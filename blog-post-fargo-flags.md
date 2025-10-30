# Building Fargo Flags: A Developer-First Feature Flag Toolkit

TL;DR

- Built on Vercel’s Flags SDK with a thin DX layer.
- One-file-per-flag, type-safe, server-resolved; client gets a filtered subset.
- shadcn/ui-style component registry and an interactive CLI wizard.
- Zero build step: checked-in registry with static imports.
- Try it: `npx shadcn@latest add https://flags.griffen.codes/r/flags-core` and `.../flags-cli`.

Feature flags have become essential for modern web development, but most solutions force you to choose between vendor lock-in and building everything from scratch. When I discovered [Vercel's Flags SDK](https://flags-sdk.dev/), I found the perfect foundation - but it needed better tooling for real-world adoption.

That's why I built **Fargo Flags**: a streamlined toolkit that enhances the Flags SDK with CLI tools, component registry distribution, and an improved developer experience.

## The Problem with Existing Solutions

Most feature flag services follow the same pattern:

- Store flag configurations in external dashboards
- Require API calls to resolve flag values
- Create vendor lock-in through proprietary SDKs
- Lack type safety and compile-time validation

Vercel's Flags SDK took a different approach with "flags as code" - keeping flag logic in your codebase where it belongs. But while the architecture was solid, the developer experience had room for improvement:

- Manual boilerplate for each flag
- Registry management by hand
- No CLI tools for common workflows
- Limited React integration

## The Fargo Flags Approach

Fargo Flags builds on the Flags SDK's foundation while addressing these pain points:

### 🎯 One File Per Flag Architecture

Each feature flag lives in its own file with complete type safety:

```typescript
// src/lib/flags/defs/enable-ai-assistant.flag.ts
import { z } from "zod";
import { defineFlag } from "../kit";

export const key = "enable-ai-assistant-in-pdf-toolbar" as const;
export const schema = z.boolean();

export default defineFlag({
  key,
  schema,
  description: "Enable AI assistant in PDF toolbar",
  defaultValue: false,
  client: { public: true }, // Expose to client
  async decide(ctx) {
    const user = await ctx.getUser?.();
    return user?.plan === "premium";
  },
});
```

### 🚀 Interactive CLI Wizard

Creating flags becomes effortless with the interactive wizard:

```bash
$ pnpm flags:new
✔ Flag key (kebab-case) … enable-premium-features
✔ Value type › boolean
✔ Expose to client? … yes
✔ Default value … false
✔ Description … Enable premium features for paid users

✔ created src/lib/flags/defs/enable-premium-features.flag.ts
✔ updated src/lib/flags/registry.config.ts
```

The wizard handles all the boilerplate:

- Creates the flag definition file
- Updates the registry with proper imports
- Manages client exposure settings
- Formats code with Prettier

Or run the consistency checker anytime:

```bash
pnpm flags:check
```

This validates the registry completeness and client exposure, perfect for CI.

## Architecture at a Glance

```
Flag Definitions (one file per flag)
        │
        ▼
Checked-in Registry (registry.config.ts)  ← auto-updated by CLI
        │
        ▼
Server Resolution (resolveAllFlags)
        │
        ▼
Client Subset (pickClientFlags) → <FlagsProvider>
        │
        ├── useFlag('key')
        └── <Flag when="key" />
```

### 🔒 Server-First Resolution with Client Hydration

Flags resolve on the server for security and performance, then hydrate client-safe values:

```typescript
// app/layout.tsx
export default async function RootLayout({ children }) {
  // Resolve ALL flags on server (including sensitive ones)
  const serverFlags = await resolveAllFlags({
    getUser: async () => getCurrentUser(),
    getWorkspace: async () => getCurrentWorkspace(),
  });
  
  // Extract only client-safe flags
  const clientFlags = pickClientFlags(serverFlags);

  return (
    <html>
      <body>
        <FlagsProvider flags={clientFlags}>
          {children}
        </FlagsProvider>
      </body>
    </html>
  );
}
```

### ⚡ Enhanced React Components

Clean, declarative flag usage in components:

```typescript
import { useFlag } from "@/components/flags/flags-provider";
import { Flag } from "@/components/flags/flag";

function Dashboard() {
  const isPremium = useFlag("enable-premium-features");
  
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* Hook-based usage */}
      {isPremium && <PremiumFeatures />}
      
      {/* Declarative component */}
      <Flag when="enable-analytics">
        <AnalyticsPanel />
      </Flag>
      
      {/* With fallback */}
      <Flag 
        when="enable-premium-features" 
        fallback={<UpgradePrompt />}
      >
        <PremiumFeatures />
      </Flag>
    </div>
  );
}
```

### 🧪 Testing Made Simple

Override flags easily in tests and Storybook:

```typescript
import { FlagsTestProvider } from "@/components/flags/flags-test-provider";

// Unit tests
test("shows premium features when enabled", () => {
  render(
    <FlagsTestProvider overrides={{ "enable-premium-features": true }}>
      <Dashboard />
    </FlagsTestProvider>
  );
  
  expect(screen.getByText("Premium Features")).toBeInTheDocument();
});

// Storybook stories
export const PremiumUser = {
  decorators: [
    (Story) => (
      <FlagsTestProvider 
        overrides={{ 
          "enable-premium-features": true,
          "theme-mode": "dark"
        }}
      >
        <Story />
      </FlagsTestProvider>
    ),
  ],
};
```

### 📦 Component Registry Distribution

Install via familiar shadcn/ui-style commands:

```bash
# Core system
npx shadcn@latest add https://flags.griffen.codes/r/flags-core

# Optional components
npx shadcn@latest add https://flags.griffen.codes/r/flags-flag
npx shadcn@latest add https://flags.griffen.codes/r/flags-test-provider

# CLI tools
npx shadcn@latest add https://flags.griffen.codes/r/flags-cli
```

### 🔍 CI/CD Integration

Validate flag consistency in your pipeline:

```bash
$ pnpm flags:check
✔ flags:check OK — 4 registered, 4 files, 3 client-exposed

# Or catch issues early:
Defs present but missing in registry.config:
  - new-experimental-flag

Public flags in files but missing from clientFlagKeys:
  - enable-ai-assistant-in-pdf-toolbar
```

## Technical Architecture

### The resolveAllFlags Engine

The heart of the system is `resolveAllFlags()` - a server-side engine that:

1. **Parallel Resolution**: All flags resolve simultaneously for optimal performance
2. **Context Support**: Pass user/workspace data for personalized decisions
3. **Schema Validation**: Zod schemas ensure runtime type safety
4. **Graceful Fallbacks**: Uses `defaultValue` when `decide()` functions aren't provided

```typescript
export async function resolveAllFlags(ctx?: FlagContext): Promise<Flags> {
  const keys = Object.keys(registry) as (keyof SchemaMap)[];
  
  const entries = await Promise.all(
    keys.map(async (key) => {
      const def = registry[key];
      // This is where the magic happens:
      const raw = await Promise.resolve(def.decide?.(ctx) ?? def.defaultValue);
      const value = flagSchemas[key].parse(raw); // Zod validation
      return [key, value] as const;
    })
  );
  
  return Object.fromEntries(entries) as Flags;
}
```

### Security Model

- **Server-only flags**: Sensitive logic never reaches the client
- **Client filtering**: `pickClientFlags()` respects `client.public` settings
- **Serialization**: Optional `serialize()` functions sanitize client values
- **Context isolation**: Flag decisions run in secure server environment

### Zero Build Step

Unlike code generation approaches, Fargo Flags uses static imports with a checked-in aggregator:

```typescript
// registry.config.ts - maintained by CLI wizard
import * as f_enable_ai_assistant from "./defs/enable_ai_assistant.flag";
import * as f_theme_mode from "./defs/theme_mode.flag";

export const registry = {
  "enable-ai-assistant-in-pdf-toolbar": f_enable_ai_assistant.default,
  "theme-mode": f_theme_mode.default,
} as const;
```

This approach provides:

- No build step required
- Full TypeScript integration
- IDE autocomplete and refactoring
- Easy debugging and inspection

## Real-World Usage Patterns

### Feature Rollouts

```typescript
export default defineFlag({
  key: "new-checkout-flow",
  schema: z.boolean(),
  defaultValue: false,
  client: { public: true },
  async decide(ctx) {
    const user = await ctx.getUser?.();
    
    // Gradual rollout based on user ID
    const hash = hashUserId(user?.id);
    return hash % 100 < 25; // 25% of users
  },
});
```

### A/B Testing

```typescript
export default defineFlag({
  key: "pricing-page-variant",
  schema: z.enum(["control", "variant-a", "variant-b"]),
  defaultValue: "control",
  client: { public: true },
  async decide(ctx) {
    const user = await ctx.getUser?.();
    const hash = hashUserId(user?.id);
    
    if (hash % 3 === 0) return "variant-a";
    if (hash % 3 === 1) return "variant-b";
    return "control";
  },
});
```

### Environment-Based Configuration

```typescript
export default defineFlag({
  key: "ai-model-selection",
  schema: z.enum(["gpt-4o-mini", "gpt-4", "claude-3-sonnet"]),
  defaultValue: "gpt-4o-mini",
  client: { public: false }, // Server-only
  async decide(ctx) {
    const workspace = await ctx.getWorkspace?.();
    
    if (process.env.NODE_ENV === "development") {
      return "gpt-4o-mini"; // Cheaper for dev
    }
    
    return workspace?.plan === "enterprise" 
      ? "claude-3-sonnet" 
      : "gpt-4";
  },
});
```

## Why This Approach Works

### Developer Experience First

Every decision prioritizes developer productivity:

- Interactive CLI reduces cognitive load
- Type safety catches errors at compile time
- Consistent patterns across all flags
- Minimal boilerplate and ceremony

### Production Ready

Built for real applications:

- Server-side resolution for security
- Parallel flag evaluation for performance
- CI/CD validation prevents configuration drift
- Comprehensive testing utilities

### No Vendor Lock-in

Your flag logic stays in your codebase:

- Easy to migrate away from if needed
- No external dependencies for flag resolution
- Full control over decision logic
- Standard TypeScript and React patterns

## Getting Started

Try Fargo Flags in your Next.js project:

```bash
# Install core system
npx shadcn@latest add https://flags.griffen.codes/r/flags-core

# Install CLI tools
npx shadcn@latest add https://flags.griffen.codes/r/flags-cli

# Add package.json scripts
{
  "scripts": {
    "flags:new": "tsx scripts/create-flag.ts",
    "flags:check": "tsx scripts/check-flags-registry.ts"
  }
}

# Create your first flag
pnpm flags:new
```

## What's Next

Fargo Flags represents a new approach to feature flags - one that embraces the "flags as code" philosophy while providing the tooling developers actually want to use.

The project is open source and actively maintained. I'm excited to see how teams adopt it and what improvements the community suggests.

Try it out and let me know what you think! The full documentation and examples are available at [flags.griffen.codes](https://flags.griffen.codes).

Call to action

- Star the repo: <https://github.com/gfargo/fargo-flags>
- Try the live demo: <https://flags.griffen.codes>
- Install the core + CLI and create your first flag today

---

*Fargo Flags is built on top of [Vercel's Flags SDK](https://flags-sdk.dev/) and follows their excellent architectural patterns. Special thanks to the Vercel team for pioneering the "flags as code" approach.*

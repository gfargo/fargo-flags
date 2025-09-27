# Fargo Flags ⛳️

A **streamlined toolkit** built on top of [Vercel's Flags SDK](https://flags-sdk.dev/) that adds **shadcn-style component registry distribution**, **interactive CLI tools**, and **enhanced developer experience** for type-safe feature flags in Next.js.

## ✨ What Fargo Flags Adds to Vercel's Flags SDK

While [Vercel's Flags SDK](https://flags-sdk.dev/) provides the solid foundation of "flags as code" with server-side resolution and type safety, Fargo Flags enhances the experience with:

- 🎯 **One-file-per-flag** architecture with individual flag definitions
- 🛠️ **Interactive CLI wizard** - guided flag creation with automatic registry updates
- 🔍 **Consistency checker** - validate flag registry integrity in CI/CD
- 📦 **shadcn-style registry** - drop-in installation via component registry
- 🧪 **Enhanced testing** - easy flag overrides for tests and Storybook
- 🎨 **React components** - `<Flag>` conditional rendering and providers
- 📚 **Comprehensive docs** - interactive demo and complete usage guide
- 🔧 **Zero build step** - static imports with checked-in aggregator

## 🤝 Built on Vercel's Flags SDK

Fargo Flags is a **thin layer of abstraction** that enhances [Vercel's Flags SDK](https://flags-sdk.dev/) with streamlined tooling and distribution. We embrace the Flags SDK's core principles:

- **Flags as code** - declarative flag definitions with consistent call sites
- **Server-side resolution** - flags resolve on the server for security and performance  
- **No vendor lock-in** - your flag logic stays in your codebase
- **Type safety** - full TypeScript support with runtime validation

### What We Add

While the Flags SDK provides the solid foundation, Fargo Flags makes it **easier to adopt and scale**:

- **Interactive CLI wizard** for creating flags without manual boilerplate
- **Automatic registry management** - no need to manually maintain imports
- **Component registry distribution** - install via shadcn-style commands
- **Enhanced React integration** - providers, hooks, and conditional components
- **Testing utilities** - easy flag overrides for development and QA
- **Consistency validation** - catch configuration drift in CI/CD

Think of it as **"Flags SDK with batteries included"** - same great foundation, enhanced developer experience.

## 🚀 Quick Start

### 1. Install Core System

```bash
npx shadcn@latest add https://fargo-flags.com/r/flags-core
```

This installs the core flag system including types, runtime, and React provider.

### 2. Install CLI Tools

```bash
npx shadcn@latest add https://fargo-flags.com/r/flags-cli
```

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "flags:new": "tsx scripts/create-flag.ts",
    "flags:check": "tsx scripts/check-flags-registry.ts"
  }
}
```

### 3. Set Up Your App

```tsx
// app/layout.tsx
import { resolveAllFlags, pickClientFlags } from "@/lib/flags/runtime";
import { FlagsProvider } from "@/components/flags/flags-provider";

export default async function RootLayout({ children }) {
  const serverFlags = await resolveAllFlags({
    getUser: async () => getCurrentUser(),
    getWorkspace: async () => getCurrentWorkspace(),
  });
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

### 4. Create Your First Flag

```bash
pnpm flags:new
```

Follow the interactive wizard to create a type-safe feature flag with automatic registry updates.

### 5. Use in Components

```tsx
import { useFlag } from "@/components/flags/flags-provider";
import { Flag } from "@/components/flags/flag";

function MyComponent() {
  const isEnabled = useFlag("my-feature-flag");
  
  return (
    <div>
      {/* Using the hook */}
      {isEnabled && <NewFeature />}
      
      {/* Using the component */}
      <Flag when="my-feature-flag">
        <NewFeature />
      </Flag>
    </div>
  );
}
```

## � Registtry Components

Fargo Flags follows the shadcn component registry pattern for easy installation:

| Component | Description | Install Command |
|-----------|-------------|-----------------|
| **flags-core** | Core system (types, runtime, provider) | `npx shadcn@latest add https://fargo-flags.com/r/flags-core` |
| **flags-flag** | `<Flag>` conditional rendering component | `npx shadcn@latest add https://fargo-flags.com/r/flags-flag` |
| **flags-test-provider** | Testing utilities for overrides | `npx shadcn@latest add https://fargo-flags.com/r/flags-test-provider` |
| **flags-cli** | Interactive wizard and consistency checker | `npx shadcn@latest add https://fargo-flags.com/r/flags-cli` |

## 📁 Project Structure

```
src/
├── lib/flags/
│   ├── kit.ts                    # Core types + defineFlag helper
│   ├── runtime.ts                # Server resolver + client serialization  
│   ├── registry.config.ts        # Flag registry (auto-updated by wizard)
│   └── defs/                     # Individual flag definitions
│       ├── feature-a.flag.ts
│       └── feature-b.flag.ts
├── components/flags/
│   ├── flags-provider.tsx        # React context provider
│   ├── flag.tsx                  # Conditional rendering component
│   └── flags-test-provider.tsx   # Testing utilities
└── scripts/
    ├── create-flag.ts            # Interactive flag creation wizard
    └── check-flags-registry.ts   # Registry consistency validator
```

## 🛠️ CLI Tools

The CLI tools streamline flag management and ensure consistency:

### Interactive Flag Creation

```bash
pnpm flags:new
```

- Guided prompts for flag configuration
- Automatic TypeScript generation
- Registry updates with proper imports
- Code formatting with Prettier

### Consistency Validation  

```bash
pnpm flags:check
```

- Validates registry completeness
- Checks client flag consistency
- Perfect for CI/CD pipelines
- Catches configuration drift early

### Available Scripts

- `pnpm flags:new` - Create a new feature flag
- `pnpm flags:check` - Validate flag registry consistency  
- `pnpm dev` - Start development server
- `pnpm build` - Build for production

## 📖 Documentation

### Defining Flags

Use the interactive wizard to create flags, or manually create files in `src/lib/flags/defs/`:

```typescript
// src/lib/flags/defs/my-feature.flag.ts
import { z } from "zod";
import { defineFlag } from "../kit";

export const key = "my-awesome-feature" as const;
export const schema = z.boolean();

export default defineFlag({
  key,
  schema,
  description: "Enable my awesome new feature",
  defaultValue: false,
  client: { public: true }, // Expose to client-side
  async decide(ctx) {
    // Server-side decision logic
    const user = await ctx.getUser?.();
    const workspace = await ctx.getWorkspace?.();
    return user?.plan === "premium" || workspace?.plan === "enterprise";
  },
});
```

### Flag Types

**Boolean Flags**

```typescript
export const schema = z.boolean();
export default defineFlag({
  key: "enable-feature",
  schema,
  defaultValue: false,
  // ...
});
```

**Enum Flags**  

```typescript
export const schema = z.enum(["light", "dark", "auto"]);
export default defineFlag({
  key: "theme-mode", 
  schema,
  defaultValue: "light",
  options: [
    { value: "light", label: "Light Mode" },
    { value: "dark", label: "Dark Mode" },
    { value: "auto", label: "Auto (System)" }
  ],
  // ...
});
```

**Server-Only Flags**

```typescript
export default defineFlag({
  key: "ai-model-selection",
  schema: z.enum(["gpt-4o-mini", "gpt-4.5", "claude-3-sonnet"]),
  defaultValue: "gpt-4o-mini",
  client: { public: false }, // Server-only
  async decide(ctx) {
    // Complex server-side logic
    const workspace = await ctx.getWorkspace?.();
    return workspace?.plan === "enterprise" ? "gpt-4.5" : "gpt-4o-mini";
  },
});
```

### Using Flags

#### Client-Side with Hooks

```tsx
import { useFlag } from "@/components/flags/flags-provider";

function MyComponent() {
  const isEnabled = useFlag("my-awesome-feature");
  const themeMode = useFlag("theme-mode");
  
  return (
    <div className={themeMode === "dark" ? "dark-theme" : "light-theme"}>
      {isEnabled ? <NewFeature /> : <OldFeature />}
    </div>
  );
}
```

#### Conditional Rendering with Components

```tsx
import { Flag } from "@/components/flags/flag";

function MyComponent() {
  return (
    <div>
      {/* Boolean flag check */}
      <Flag when="my-awesome-feature">
        <NewFeature />
      </Flag>
      
      {/* Negation */}
      <Flag when="my-awesome-feature" not={true}>
        <OldFeature />
      </Flag>
      
      {/* Enum value check */}
      <Flag when="theme-mode" is="dark">
        <DarkModeStyles />
      </Flag>
      
      {/* With fallback */}
      <Flag when="loading-state" fallback={<Spinner />}>
        <Content />
      </Flag>
    </div>
  );
}
```

#### Server-Side Usage

```tsx
// In server components, API routes, or middleware
import { resolveAllFlags } from "@/lib/flags/runtime";

export async function GET() {
  const flags = await resolveAllFlags({
    getUser: async () => getCurrentUser(),
    getWorkspace: async () => getCurrentWorkspace(),
  });
  
  const aiModel = flags["ai-model-selection"]; // Server-only flag
  // Use flag value for server-side logic
  
  return Response.json({ model: aiModel });
}
```

### Testing & Development

Override flags in tests, Storybook, and development:

```tsx
import { FlagsTestProvider } from "@/components/flags/flags-test-provider";

// In Storybook stories
export const DarkMode = () => (
  <FlagsTestProvovider 
    overrides={{ 
      "my-awesome-feature": true,
      "theme-mode": "dark"
    }}
  >
    <MyComponent />
  </FlagsTestProvider>
);

// In Jest tests  
test("premium features", () => {
  render(
    <FlagsTestProvider overrides={{ "premium-features": true }}>
      <App />
    </FlagsTestProvider>
  );
  expect(screen.getByText("Premium Feature")).toBeInTheDocument();
});
```

## 🏗️ How It Works

Fargo Flags follows the same core principles as [Vercel's Flags SDK](https://flags-sdk.dev/) - flags as code with server-side resolution - while adding streamlined tooling:

1. **Define** flags in individual `*.flag.ts` files with schemas and decision logic (like Flags SDK)
2. **Wizard** (`pnpm flags:new`) creates files and updates registry automatically (Fargo enhancement)
3. **Server** resolves all flags with context via `resolveAllFlags()` (enhanced Flags SDK pattern)
4. **Client** receives safe subset via `pickClientFlags()` and React provider (Fargo tooling)
5. **Components** use `useFlag()` hook or `<Flag>` wrapper for conditional rendering (Fargo components)
6. **Validator** (`pnpm flags:check`) ensures registry consistency in CI/CD (Fargo tooling)

## 🔒 Security & Performance

- **Server-side resolution**: All decision logic runs securely on the server
- **Client filtering**: Only `client.public: true` flags are sent to browsers
- **Parallel execution**: All flags resolve simultaneously for optimal performance  
- **Type safety**: Full TypeScript support with runtime Zod validation
- **Context isolation**: User/workspace data stays on the server

## 🚀 Production Ready

- **Zero build step**: No codegen or compilation required
- **SSR optimized**: Flags resolve during server-side rendering
- **Edge compatible**: Works with Vercel Edge Runtime (with limitations)
- **CI/CD integration**: Consistency checker prevents configuration drift
- **Caching friendly**: Use React `cache()` for expensive context operations

## 🔗 Links

- **[Live Demo](/)** - Interactive feature flags showcase
- **[Documentation](/docs)** - Complete setup and usage guide
- **[Vercel Flags SDK](https://flags-sdk.dev/)** - The underlying foundation we build upon
- **[GitHub](https://github.com/your-repo/fargo-flags)** - Source code and issues

## 📝 License

MIT

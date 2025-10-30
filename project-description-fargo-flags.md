---
title: Fargo Flags — Feature Flags for Next.js
description: A thin, type-safe feature flags toolkit for Next.js built on Vercel’s Flags SDK, with a shadcn/ui-style component registry, an interactive CLI, and zero build step.
---

# Fargo Flags

**Enhanced Feature Flags Toolkit Built on Vercel's Flags SDK**

A streamlined toolkit that brings enhanced developer experience, CLI tooling, and shadcn/ui-compatible component registry distribution to feature flags, while preserving the security and performance benefits of the "flags as code" approach.

Quick Links

- Try the Demo → https://flags.griffen.codes
- Read the Docs → https://flags.griffen.codes/docs
- Star on GitHub → https://github.com/gfargo/fargo-flags

## Overview

Fargo Flags solves the feature flag dilemma by building on [Vercel's Flags SDK](https://flags-sdk.dev/) foundation - keeping your flag logic in your codebase where it belongs, while adding the tooling and convenience features that make adoption effortless.

## Key Features

### 🎯 **One File Per Flag**
Each feature flag lives in its own TypeScript file with complete type safety, Zod validation, and clear decision logic.

### 🚀 **Interactive CLI Wizard**
Create flags instantly with guided prompts - no manual boilerplate or registry management required.

### 🔒 **Server-First Security**
All flag decisions run securely on the server, with client-safe values automatically filtered and hydrated.

### ⚡ **Enhanced React Integration**
Clean hooks and declarative components make flag usage intuitive and maintainable.

### 📦 **Component Registry Distribution**
Install via familiar shadcn/ui-style commands - no complex setup or configuration files.

### 🧪 **Testing Ready**
Override flags easily in unit tests and Storybook stories with dedicated test providers.

### 🔍 **CI/CD Validation**
Consistency checker prevents configuration drift and catches issues before deployment.

## Why Fargo Flags?

**Built on Solid Foundation**: Leverages Vercel's proven "flags as code" architecture for security and performance.

**Developer Experience First**: Interactive CLI, automatic registry management, and comprehensive TypeScript support eliminate common pain points.

**No Vendor Lock-in**: Your flag logic stays in your codebase - easy to adopt, easy to migrate away from if needed.

**Production Ready**: Used in real applications with server-side resolution, parallel flag evaluation, and comprehensive error handling.

## Who It’s For

- Next.js teams who want flags-as-code with strong type safety.
- Teams avoiding vendor lock-in and remote dashboards for core flag logic.
- Apps that benefit from a CLI workflow and a component registry installation model.

## Key Differentiators

- shadcn/ui-style component registry distribution (install only what you need).
- Interactive CLI workflows that maintain a checked-in registry — no build step.
- Server-first security with explicit client exposure and optional serialization.

## How It Works

Define flags → Wizard updates registry → Server resolves via `resolveAllFlags(ctx)`; `pickClientFlags()` filters public flags → Hydrate `<FlagsProvider>` → Use `useFlag('key')` or `<Flag when="key" />`.

## Quick Start

1) Install core system

```bash
npx shadcn@latest add https://flags.griffen.codes/r/flags-core
```

2) Install CLI tools

```bash
npx shadcn@latest add https://flags.griffen.codes/r/flags-cli
```

3) Add package scripts

```json
{
  "scripts": {
    "flags:new": "tsx scripts/create-flag.ts",
    "flags:check": "tsx scripts/check-flags-registry.ts"
  }
}
```

4) Integrate into your App Router

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
        <FlagsProvider flags={clientFlags}>{children}</FlagsProvider>
      </body>
    </html>
  );
}
```

5) Create your first flag

```bash
pnpm flags:new
```

6) Use flags in components

```tsx
import { useFlag } from "@/components/flags/flags-provider";
import { Flag } from "@/components/flags/flag";

function Dashboard() {
  const isPremium = useFlag("enable-premium-features");
  return (
    <div>
      {isPremium && <PremiumFeatures />}
      <Flag when="enable-premium-features" fallback={<UpgradePrompt />}>
        <PremiumFeatures />
      </Flag>
    </div>
  );
}
```

7) Validate registry (CI-friendly)

```bash
pnpm flags:check
```

## Limitations & Guarantees

- Flags resolve on the server; client receives filtered values only.
- Every flag must define a Zod schema and default value.
- No call-site arguments; decisions use provided context only.

## Security Notes

- Client exposure is opt-in per flag via `client.public: true`.
- Optional `serialize()` hooks can sanitize values for client hydration.

## Example Usage

**Flag Definition:**
```typescript
export default defineFlag({
  key: "enable-premium-features",
  schema: z.boolean(),
  defaultValue: false,
  client: { public: true },
  async decide(ctx) {
    const user = await ctx.getUser?.();
    return user?.plan === "premium";
  },
});
```

**Component Usage:**
```typescript
function Dashboard() {
  const isPremium = useFlag("enable-premium-features");
  
  return (
    <div>
      <Flag when="enable-premium-features" fallback={<UpgradePrompt />}>
        <PremiumFeatures />
      </Flag>
    </div>
  );
}
```

## License

MIT — see `LICENSE` in the repository.

## Technical Highlights

- **Zero Build Step**: Static imports with checked-in aggregator
- **Parallel Resolution**: All flags resolve simultaneously for optimal performance  
- **Type Safety**: End-to-end TypeScript with Zod runtime validation
- **Server-Side Resolution**: Secure flag evaluation with client hydration
- **Flexible Architecture**: Boolean flags, enums, custom schemas, and serialization

## Links

- **Live Demo**: [flags.griffen.codes](https://flags.griffen.codes)
- **Documentation**: [flags.griffen.codes/docs](https://flags.griffen.codes/docs)
- **GitHub**: [github.com/gfargo/fargo-flags](https://github.com/gfargo/fargo-flags)

---

*Perfect for Next.js applications that need feature flags without vendor lock-in or complex external dependencies.*

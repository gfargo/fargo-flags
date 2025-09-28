import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-background via-primary/5 to-background p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 text-sm mb-4 inline-block"
          >
            ← Back to Demo
          </Link>
          <h1 className="text-4xl font-bold mb-4">Fargo Flags Documentation</h1>
          <p className="text-xl text-muted-foreground">
            Complete guide to the enhanced feature flags toolkit built on Vercel&apos;s Flags SDK.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="border rounded-lg p-6 mb-8 bg-muted">
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <a
              href="#overview"
              className="text-primary hover:text-primary/80"
            >
              1. Overview
            </a>
            <a
              href="#installation"
              className="text-primary hover:text-primary/80"
            >
              2. Installation
            </a>
            <a
              href="#quick-start"
              className="text-primary hover:text-primary/80"
            >
              3. Quick Start
            </a>
            <a
              href="#defining-flags"
              className="text-primary hover:text-primary/80"
            >
              4. Defining Flags
            </a>
            <a
              href="#resolve-all-flags"
              className="text-primary hover:text-primary/80"
            >
              5. resolveAllFlags
            </a>
            <a
              href="#using-flags"
              className="text-primary hover:text-primary/80"
            >
              6. Using Flags
            </a>
            <a
              href="#components"
              className="text-primary hover:text-primary/80"
            >
              7. Components
            </a>
            <a
              href="#testing"
              className="text-primary hover:text-primary/80"
            >
              8. Testing
            </a>
            <a
              href="#cli-tools"
              className="text-primary hover:text-primary/80"
            >
              9. CLI Tools
            </a>
            <a
              href="#architecture"
              className="text-primary hover:text-primary/80"
            >
              10. Architecture
            </a>
            <a
              href="#best-practices"
              className="text-primary hover:text-primary/80"
            >
              11. Best Practices
            </a>
            <a
              href="#troubleshooting"
              className="text-primary hover:text-primary/80"
            >
              12. Troubleshooting
            </a>
            <a
              href="#api-reference"
              className="text-primary hover:text-primary/80"
            >
              13. API Reference
            </a>
          </div>
        </nav>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Overview */}
          <section id="overview">
            <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-4">
                Fargo Flags is a <strong>streamlined toolkit</strong> built on top of{" "}
                <a href="https://flags-sdk.dev/" className="text-primary hover:text-primary/80">
                  Vercel&apos;s Flags SDK
                </a>{" "}
                that adds enhanced developer experience, CLI tooling, and component registry distribution.
                It embraces the Flags SDK&apos;s &quot;flags as code&quot; principles while making them easier to adopt and scale.
              </p>

              <h3 className="text-lg font-semibold mb-2">Built on Solid Foundation</h3>
              <p className="text-muted-foreground mb-3">
                We leverage Vercel&apos;s Flags SDK core principles:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li><strong>Flags as code:</strong> Declarative definitions with consistent call sites</li>
                <li><strong>Server-side resolution:</strong> Secure, performant flag evaluation</li>
                <li><strong>Type safety:</strong> Full TypeScript support with runtime validation</li>
                <li><strong>No vendor lock-in:</strong> Your flag logic stays in your codebase</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Enhanced Developer Experience</h3>
              <p className="text-muted-foreground mb-3">
                Fargo Flags adds powerful tooling on top of this foundation:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>
                  <strong>Interactive CLI wizard:</strong> Guided flag creation without manual boilerplate
                </li>
                <li>
                  <strong>Automatic registry management:</strong> No need to manually maintain imports
                </li>
                <li>
                  <strong>Component registry distribution:</strong> Install via shadcn-style commands
                </li>
                <li>
                  <strong>Enhanced React integration:</strong> Providers, hooks, and conditional components
                </li>
                <li>
                  <strong>Testing utilities:</strong> Easy flag overrides for development and QA
                </li>
                <li>
                  <strong>Consistency validation:</strong> Catch configuration drift in CI/CD
                </li>
              </ul>
            </div>
          </section>

          {/* Installation */}
          <section id="installation">
            <h2 className="text-2xl font-bold mb-4">2. Installation</h2>

            <h3 className="text-lg font-semibold mb-2">Core System</h3>
            <p className="text-muted-foreground mb-3">
              Install the core Fargo Flags system using the shadcn CLI:
            </p>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              <code>npx shadcn@latest add https://fargo-flags.com/r/flags-core</code>
            </pre>
            
            <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-6">
              <h4 className="font-medium mb-2">📦 Core Installation Includes</h4>
              <ul className="text-sm space-y-1">
                <li>• <code>src/lib/flags/kit.ts</code> - Core types and defineFlag helper</li>
                <li>• <code>src/lib/flags/runtime.ts</code> - Server-side resolver + client serialization</li>
                <li>• <code>src/components/flags/flags-provider.tsx</code> - React context provider</li>
                <li>• <code>src/lib/flags/registry.config.ts</code> - Starter registry with anchor tags</li>
                <li>• <code>src/lib/flags/defs/.gitkeep</code> - Empty directory for flag definitions</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold mb-2">Optional Components</h3>
            <p className="text-muted-foreground mb-3">
              Install additional components as needed:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-medium mb-2">Flag Component</h4>
                <pre className="bg-muted p-3 rounded text-sm mb-2">
                  <code>npx shadcn@latest add https://fargo-flags.com/r/flags-flag</code>
                </pre>
                <p className="text-xs text-muted-foreground">Installs <code>&lt;Flag&gt;</code> conditional rendering component</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Test Provider</h4>
                <pre className="bg-muted p-3 rounded text-sm mb-2">
                  <code>npx shadcn@latest add https://fargo-flags.com/r/flags-test-provider</code>
                </pre>
                <p className="text-xs text-muted-foreground">Installs <code>FlagsTestProvider</code> for testing</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2">CLI Tools</h3>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              <code>npx shadcn@latest add https://fargo-flags.com/r/flags-cli</code>
            </pre>
            
            <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2">🛠️ CLI Installation Includes</h4>
              <ul className="text-sm space-y-1">
                <li>• <code>scripts/create-flag.ts</code> - Interactive flag creation wizard</li>
                <li>• <code>scripts/check-flags-registry.ts</code> - Consistency validation tool</li>
                <li>• Instructions to add npm scripts to your <code>package.json</code></li>
              </ul>
            </div>

            <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-6">
              <h4 className="font-medium mb-2">📋 Required Package.json Scripts</h4>
              <p className="text-sm text-muted-foreground mb-2">
                After installing the CLI tools, add these scripts to your <code>package.json</code>:
              </p>
              <pre className="bg-white p-3 rounded text-sm border">
{`{
  "scripts": {
    "flags:new": "tsx scripts/create-flag.ts",
    "flags:check": "tsx scripts/check-flags-registry.ts"
  }
}`}
              </pre>
              <p className="text-xs text-muted-foreground mt-2">
                💡 The shadcn CLI cannot automatically modify package.json, so this step is manual.
              </p>
            </div>

            <h3 className="text-lg font-semibold mb-2">Manual Dependencies</h3>
            <p className="text-muted-foreground mb-3">
              If not using the registry, install dependencies manually:
            </p>
            
            <h4 className="font-medium mb-2">Runtime Dependencies</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              <code>pnpm add zod</code>
            </pre>

            <h4 className="font-medium mb-2">Development Tools (for CLI)</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              <code>pnpm add -D tsx prompts fast-glob prettier @types/prompts</code>
            </pre>

            <h4 className="font-medium mb-2">Package.json Scripts</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-6">
              {`{
  "scripts": {
    "flags:new": "tsx scripts/create-flag.ts",
    "flags:check": "tsx scripts/check-flags-registry.ts"
  }
}`}
            </pre>

            <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg">
              <h4 className="font-medium mb-2">⚠️ Important Notes</h4>
              <ul className="text-sm space-y-1">
                <li>• The shadcn CLI cannot automatically update <code>package.json</code> scripts</li>
                <li>• You must manually add the <code>flags:new</code> and <code>flags:check</code> scripts</li>
                <li>• CLI tools require <code>tsx</code> to run TypeScript files directly</li>
                <li>• Prettier is optional but recommended for code formatting</li>
              </ul>
            </div>
          </section>

          {/* Quick Start */}
          <section id="quick-start">
            <h2 className="text-2xl font-bold mb-4">3. Quick Start</h2>

            <h3 className="text-lg font-semibold mb-2">
              1. Set up the core files
            </h3>
            <p className="text-muted-foreground mb-4">
              Copy the core system files into your project structure:
            </p>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              {`src/
├── lib/flags/
│   ├── kit.ts                    # Core types
│   ├── runtime.ts                # Server resolver
│   ├── registry.config.ts        # Flag registry
│   └── defs/                     # Flag definitions
├── components/flags/
│   ├── flags-provider.tsx        # React context
│   ├── flag.tsx                  # Conditional component
│   └── flags-test-provider.tsx   # Testing utilities
└── scripts/
    ├── create-flag.ts            # Flag wizard
    └── check-flags-registry.ts   # Consistency checker`}
            </pre>

            <h3 className="text-lg font-semibold mb-2">
              2. Integrate with your app
            </h3>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              {`// app/layout.tsx
import { resolveAllFlags, pickClientFlags } from "@/lib/flags/runtime";
import { FlagsProvider } from "@/components/flags/flags-provider";

export default async function RootLayout({ children }) {
  const serverFlags = await resolveAllFlags();
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
}`}
            </pre>

            <h3 className="text-lg font-semibold mb-2">
              3. Install CLI Tools
            </h3>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-2">
              <code>npx shadcn@latest add https://fargo-flags.com/r/flags-cli</code>
            </pre>
            <p className="text-muted-foreground mb-4">
              This installs the flag creation wizard and consistency checker scripts.
            </p>

            <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2">📝 Manual Step Required</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Add these scripts to your <code>package.json</code>:
              </p>
              <pre className="bg-white p-3 rounded text-sm border">
{`"scripts": {
  "flags:new": "tsx scripts/create-flag.ts",
  "flags:check": "tsx scripts/check-flags-registry.ts"
}`}
              </pre>
            </div>

            <h3 className="text-lg font-semibold mb-2">
              4. Create your first flag
            </h3>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-2">
              <code>pnpm flags:new</code>
            </pre>
            <p className="text-muted-foreground mb-4">
              The interactive wizard will guide you through creating a properly typed flag with automatic registry updates.
            </p>

            <h3 className="text-lg font-semibold mb-2">
              5. Validate your setup
            </h3>
            <pre className="bg-muted p-4 rounded-lg text-sm">
              <code>pnpm flags:check</code>
            </pre>
          </section>

          {/* Defining Flags */}
          <section id="defining-flags">
            <h2 className="text-2xl font-bold mb-4">4. Defining Flags</h2>

            <h3 className="text-lg font-semibold mb-2">Flag File Structure</h3>
            <p className="text-muted-foreground mb-4">
              Each flag is defined in its own file in{" "}
              <code>src/lib/flags/defs/</code>:
            </p>

            <h4 className="font-medium mb-2">Boolean Flag</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              {`// src/lib/flags/defs/my-feature.flag.ts
import { z } from "zod";
import { defineFlag } from "../kit";

export const key = "my-awesome-feature" as const;
export const schema = z.boolean();

export default defineFlag({
  key,
  schema,
  description: "Enable my awesome new feature",
  defaultValue: false,
  client: { public: true }, // Expose to client
  async decide(ctx) {
    const user = await ctx.getUser?.();
    return user?.plan === "premium";
  },
});`}
            </pre>

            <h4 className="font-medium mb-2">Enum Flag</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              {`// src/lib/flags/defs/theme-mode.flag.ts
import { z } from "zod";
import { defineFlag } from "../kit";

export const key = "theme-mode" as const;
export const schema = z.enum(["light", "dark", "auto"]);

export default defineFlag({
  key,
  schema,
  description: "Application theme mode",
  defaultValue: "light",
  options: [
    { value: "light", label: "Light Mode" },
    { value: "dark", label: "Dark Mode" },
    { value: "auto", label: "Auto (System)" }
  ],
  client: { public: true },
});`}
            </pre>

            <h4 className="font-medium mb-2">Server-Only Flag</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm">
              {`// src/lib/flags/defs/ai-model.flag.ts
import { z } from "zod";
import { defineFlag } from "../kit";

export const key = "ai-claims-model" as const;
export const schema = z.enum([
  "gpt-4o-mini",
  "gpt-4.5",
  "claude-3-sonnet"
]);

export default defineFlag({
  key,
  schema,
  description: "Which AI model to use for claims processing",
  defaultValue: "gpt-4o-mini",
  client: { public: false }, // Server-only
  async decide(ctx) {
    // Complex server-side logic
    const workspace = await ctx.getWorkspace?.();
    return workspace?.plan === "enterprise" ? "gpt-4.5" : "gpt-4o-mini";
  },
});`}
            </pre>
          </section>

          {/* resolveAllFlags Deep Dive */}
          <section id="resolve-all-flags">
            <h2 className="text-2xl font-bold mb-4">5. Understanding resolveAllFlags</h2>
            
            <p className="text-muted-foreground mb-6">
              <code>resolveAllFlags</code> is the server-side engine that evaluates all your feature flags 
              and returns their resolved values. It&apos;s the bridge between your flag definitions and your application.
            </p>

            <h3 className="text-lg font-semibold mb-2">How It Works</h3>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
{`export async function resolveAllFlags(ctx?: FlagContext): Promise<Flags> {
  const keys = Object.keys(registry) as (keyof SchemaMap)[];
  
  const entries = await Promise.all(
    keys.map(async (key) => {
      const def = registry[key];
      // 🎯 This is where the magic happens:
      const raw = await Promise.resolve(def.decide?.(ctx) ?? def.defaultValue);
      const value = flagSchemas[key].parse(raw); // Zod validation
      return [key, value] as const;
    })
  );
  return Object.fromEntries(entries) as Flags;
}`}
            </pre>

            <h3 className="text-lg font-semibold mb-2">Step-by-Step Process</h3>
            <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-4">
              <ol className="list-decimal pl-4 space-y-2 text-sm">
                <li><strong>Gets all flag keys</strong> from your registry</li>
                <li><strong>Runs in parallel</strong> - all flags resolve simultaneously for performance</li>
                <li><strong>For each flag:</strong>
                  <ul className="list-disc pl-4 mt-1 space-y-1">
                    <li>Calls the <code>decide()</code> function (if defined) with context</li>
                    <li>Falls back to <code>defaultValue</code> if no <code>decide()</code> function</li>
                    <li>Validates the result against the Zod schema</li>
                    <li>Returns the final resolved value</li>
                  </ul>
                </li>
              </ol>
            </div>

            <h3 className="text-lg font-semibold mb-2">Usage Patterns</h3>
            
            <h4 className="font-medium mb-2">Basic Usage (No Context)</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
{`// Simple flags that don't need user/workspace data
const flags = await resolveAllFlags();
// All flags use their defaultValue or simple decide() logic`}
            </pre>

            <h4 className="font-medium mb-2">With Context (Recommended)</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
{`// Flags that need user/workspace information for decisions
const flags = await resolveAllFlags({
  getUser: async () => getCurrentUser(),
  getWorkspace: async () => getCurrentWorkspace(),
});`}
            </pre>

            <h4 className="font-medium mb-2">In Next.js App Router (Primary Use Case)</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
{`// app/layout.tsx
export default async function RootLayout({ children }) {
  // 🚀 This runs on every request
  const serverFlags = await resolveAllFlags({
    getUser: async () => {
      const session = await getServerSession();
      return session?.user || null;
    },
    getWorkspace: async () => {
      const workspaceId = headers().get('x-workspace-id');
      return workspaceId ? await getWorkspace(workspaceId) : null;
    },
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
}`}
            </pre>

            <h3 className="text-lg font-semibold mb-2">The Complete Flow</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2">Flag Definition → Resolution → Usage</h4>
              <pre className="text-sm">
{`// 1. Define a flag with decision logic
export default defineFlag({
  key: "enable-premium-features",
  schema: z.boolean(),
  defaultValue: false,
  client: { public: true },
  async decide(ctx) {
    // 🎯 This function runs during resolveAllFlags()
    const user = await ctx.getUser?.();
    const workspace = await ctx.getWorkspace?.();
    
    return user?.plan === "premium" || workspace?.plan === "enterprise";
  },
});

// 2. resolveAllFlags() calls the decide() function
const serverFlags = await resolveAllFlags({
  getUser: () => getCurrentUser(),
  getWorkspace: () => getCurrentWorkspace(),
});
// Result: { "enable-premium-features": true } (if user has premium plan)

// 3. pickClientFlags() filters for client-safe flags
const clientFlags = pickClientFlags(serverFlags);
// Result: { "enable-premium-features": true } (public flag, so included)

// 4. Components use the resolved values
function MyComponent() {
  const isPremium = useFlag("enable-premium-features"); // true
  return isPremium ? <PremiumFeatures /> : <UpgradePrompt />;
}`}
              </pre>
            </div>

            <h3 className="text-lg font-semibold mb-2">Key Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">🛡️ Server-Side Resolution</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Security: Sensitive logic stays on the server</li>
                  <li>Performance: Complex decisions don&apos;t slow down the client</li>
                  <li>Consistency: Same flag values across the entire request</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">⚡ Parallel Execution</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>All flags resolve simultaneously - not sequentially</li>
                  <li>Optimal performance for multiple flags</li>
                  <li>Efficient use of server resources</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2">When to Use resolveAllFlags</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-medium mb-2 text-green-600">✅ Use it for:</h4>
                <ul className="text-sm space-y-1">
                  <li>App initialization (layout.tsx)</li>
                  <li>API routes that need flag values</li>
                  <li>Server actions that depend on flags</li>
                  <li>Middleware for routing decisions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 text-red-600">❌ Don&apos;t use it for:</h4>
                <ul className="text-sm space-y-1">
                  <li>Client-side components (use useFlag instead)</li>
                  <li>Static generation (flags are dynamic)</li>
                  <li>Edge runtime with Node.js APIs in decide() functions</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2">Advanced Patterns</h3>
            
            <h4 className="font-medium mb-2">Error Handling</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
{`const flags = await resolveAllFlags({
  getUser: async () => {
    try {
      return await getCurrentUser();
    } catch (error) {
      console.warn("User lookup failed, using defaults");
      return null; // Flags will use defaultValue
    }
  },
});`}
            </pre>

            <h4 className="font-medium mb-2">Caching for Performance</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
{`import { cache } from "react";

// Cache expensive operations per request
const getCachedUser = cache(async () => {
  return await expensiveUserLookup();
});

const flags = await resolveAllFlags({
  getUser: getCachedUser, // Only runs once per request
});`}
            </pre>

            <h4 className="font-medium mb-2">Conditional Context</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm">
{`const flags = await resolveAllFlags({
  getUser: isAuthenticated ? getCurrentUser : undefined,
  getWorkspace: hasWorkspaceAccess ? getCurrentWorkspace : undefined,
});`}
            </pre>
          </section>

          {/* Using Flags */}
          <section id="using-flags">
            <h2 className="text-2xl font-bold mb-4">6. Using Flags</h2>

            <h3 className="text-lg font-semibold mb-2">useFlag Hook</h3>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              {`import { useFlag } from "@/components/flags/flags-provider";

function MyComponent() {
  const isEnabled = useFlag("my-awesome-feature");
  const themeMode = useFlag("theme-mode");
  
  return (
    <div>
      {isEnabled && <NewFeature />}
      <div className={themeMode === "dark" ? "dark-theme" : "light-theme"}>
        Content
      </div>
    </div>
  );
}`}
            </pre>

            <h3 className="text-lg font-semibold mb-2">Flag Component</h3>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              {`import { Flag } from "@/components/flags/flag";

function MyComponent() {
  return (
    <div>
      {/* Simple boolean check */}
      <Flag when="my-awesome-feature">
        <NewFeature />
      </Flag>
      
      {/* Negation */}
      <Flag when="my-awesome-feature" not={true}>
        <OldFeature />
      </Flag>
      
      {/* Specific value check */}
      <Flag when="theme-mode" is="dark">
        <DarkModeStyles />
      </Flag>
      
      {/* With fallback */}
      <Flag when="loading-state" fallback={<Spinner />}>
        <Content />
      </Flag>
    </div>
  );
}`}
            </pre>

            <h3 className="text-lg font-semibold mb-2">Server-Side Usage</h3>
            <pre className="bg-muted p-4 rounded-lg text-sm">
              {`// In server components or API routes
import { resolveAllFlags } from "@/lib/flags/runtime";

export async function GET() {
  const flags = await resolveAllFlags({
    getUser: async () => getCurrentUser(),
    getWorkspace: async () => getCurrentWorkspace(),
  });
  
  const aiModel = flags["ai-claims-model"];
  // Use server-only flag value
  
  return Response.json({ model: aiModel });
}`}
            </pre>
          </section>

          {/* Components */}
          <section id="components">
            <h2 className="text-2xl font-bold mb-4">7. Components</h2>

            <div className="space-y-8">
              {/* FlagsProvider */}
              <div>
                <h3 className="text-lg font-semibold mb-3">FlagsProvider</h3>
                <p className="text-muted-foreground mb-4">
                  The main context provider that makes flag values available
                  throughout your application. This component integrates with
                  Next.js App Router to provide SSR-first flag resolution with
                  client-side hydration.
                </p>

                <h4 className="font-medium mb-2">Props</h4>
                <div className="bg-muted p-4 rounded-lg text-sm mb-4">
                  <ul className="space-y-2">
                    <li>
                      <code className="text-blue-600">flags</code>:{" "}
                      <code>ClientFlags</code> - The client-safe flag values
                      from <code>pickClientFlags()</code>
                    </li>
                    <li>
                      <code className="text-blue-600">children</code>:{" "}
                      <code>React.ReactNode</code> - Your app components
                    </li>
                  </ul>
                </div>

                <h4 className="font-medium mb-2">
                  Next.js App Router Integration
                </h4>
                <p className="text-muted-foreground mb-3">
                  The recommended setup uses <code>resolveAllFlags()</code> on
                  the server and <code>pickClientFlags()</code>
                  to create a client-safe subset. This ensures optimal
                  performance and security.
                </p>

                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`// app/layout.tsx (Server Component)
import { ReactNode } from "react";
import { resolveAllFlags, pickClientFlags } from "@/lib/flags/runtime";
import { FlagsProvider } from "@/components/flags/flags-provider";

export default async function RootLayout({ 
  children 
}: { 
  children: ReactNode 
}) {
  // 1. Resolve ALL flags on the server (including server-only flags)
  const serverFlags = await resolveAllFlags({
    // Optional context for flag decision logic
    getUser: async () => {
      // Your user fetching logic
      return await getCurrentUser();
    },
    getWorkspace: async () => {
      // Your workspace fetching logic  
      return await getCurrentWorkspace();
    },
  });
  
  // 2. Extract only client-safe flags (respects client.public setting)
  const clientFlags = pickClientFlags(serverFlags);

  return (
    <html lang="en">
      <body>
        <FlagsProvider flags={clientFlags}>
          {children}
        </FlagsProvider>
      </body>
    </html>
  );
}`}
                </pre>

                <h4 className="font-medium mb-2">
                  Understanding resolveAllFlags()
                </h4>
                <p className="text-muted-foreground mb-3">
                  This function runs on the server and resolves all flags,
                  including their decision logic:
                </p>

                <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg text-sm mb-4">
                  <h5 className="font-medium mb-2">Key Features:</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>
                      <strong>Server-side execution:</strong> All{" "}
                      <code>decide()</code> functions run on the server
                    </li>
                    <li>
                      <strong>Context support:</strong> Pass user/workspace data
                      for personalized flags
                    </li>
                    <li>
                      <strong>Parallel resolution:</strong> All flags are
                      resolved concurrently for performance
                    </li>
                    <li>
                      <strong>Schema validation:</strong> Flag values are
                      validated against Zod schemas
                    </li>
                    <li>
                      <strong>Default fallbacks:</strong> Uses{" "}
                      <code>defaultValue</code> if <code>decide()</code> is not
                      provided
                    </li>
                  </ul>
                </div>

                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`// Example flag with decision logic
export default defineFlag({
  key: "enable-premium-features",
  schema: z.boolean(),
  defaultValue: false,
  client: { public: true },
  async decide(ctx) {
    // This runs on the server during resolveAllFlags()
    const user = await ctx.getUser?.();
    const workspace = await ctx.getWorkspace?.();
    
    // Complex server-side logic
    return user?.plan === "premium" || workspace?.plan === "enterprise";
  },
});

// resolveAllFlags() will:
// 1. Call the decide() function with your context
// 2. Validate the result against the schema  
// 3. Return the resolved value`}
                </pre>

                <h4 className="font-medium mb-2">
                  Understanding pickClientFlags()
                </h4>
                <p className="text-muted-foreground mb-3">
                  This function creates a client-safe subset by filtering flags
                  based on their <code>client.public</code> setting:
                </p>

                <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg text-sm mb-4">
                  <h5 className="font-medium mb-2">Security Features:</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>
                      <strong>Public-only filtering:</strong> Only flags with{" "}
                      <code>client: {`{ public: true }`}</code> are included
                    </li>
                    <li>
                      <strong>Serialization support:</strong> Applies optional{" "}
                      <code>serialize()</code> functions
                    </li>
                    <li>
                      <strong>Type safety:</strong> Returns properly typed{" "}
                      <code>ClientFlags</code> object
                    </li>
                    <li>
                      <strong>Server-only protection:</strong> Sensitive flags
                      never reach the client
                    </li>
                  </ul>
                </div>

                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`// Example: Server flags vs Client flags
const serverFlags = await resolveAllFlags(ctx);
// serverFlags contains ALL flags:
// {
//   "enable-premium-features": true,      // public: true
//   "ai-model-selection": "gpt-4",        // public: false (server-only)
//   "theme-mode": "dark",                 // public: true
//   "internal-debug-mode": true           // public: false (server-only)
// }

const clientFlags = pickClientFlags(serverFlags);
// clientFlags contains ONLY public flags:
// {
//   "enable-premium-features": true,
//   "theme-mode": "dark"
// }
// Note: ai-model-selection and internal-debug-mode are excluded`}
                </pre>

                <h4 className="font-medium mb-2">Advanced Context Usage</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`// Advanced context with error handling and caching
import { cache } from "react";

// Cache user lookup for the request
const getCachedUser = cache(async () => {
  try {
    return await getCurrentUser();
  } catch (error) {
    console.warn("Failed to fetch user for flags:", error);
    return null; // Graceful fallback
  }
});

const getCachedWorkspace = cache(async () => {
  try {
    return await getCurrentWorkspace();
  } catch (error) {
    console.warn("Failed to fetch workspace for flags:", error);
    return null;
  }
});

export default async function RootLayout({ children }) {
  const serverFlags = await resolveAllFlags({
    getUser: getCachedUser,
    getWorkspace: getCachedWorkspace,
  });
  
  const clientFlags = pickClientFlags(serverFlags);

  return (
    <html lang="en">
      <body>
        <FlagsProvider flags={clientFlags}>
          {children}
        </FlagsProvider>
      </body>
    </html>
  );
}`}
                </pre>

                <h4 className="font-medium mb-2">Flag Serialization</h4>
                <p className="text-muted-foreground mb-3">
                  Use the <code>serialize</code> option to transform flag values
                  before sending to the client:
                </p>

                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`// Flag definition with serialization
export default defineFlag({
  key: "user-permissions",
  schema: z.object({
    canEdit: z.boolean(),
    canDelete: z.boolean(),
    roles: z.array(z.string()),
    userId: z.string(),
  }),
  defaultValue: { canEdit: false, canDelete: false, roles: [], userId: "" },
  client: { 
    public: true,
    // Remove sensitive userId before sending to client
    serialize: (permissions) => ({
      canEdit: permissions.canEdit,
      canDelete: permissions.canDelete,
      roles: permissions.roles,
      // userId is excluded for security
    })
  },
});

// pickClientFlags() will apply the serialize function automatically`}
                </pre>

                <h4 className="font-medium mb-2">Error Handling & Debugging</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`// Robust error handling in layout
export default async function RootLayout({ children }) {
  try {
    const serverFlags = await resolveAllFlags({
      getUser: async () => {
        try {
          return await getCurrentUser();
        } catch (error) {
          // Log but don't fail - flags will use defaults
          console.warn("User fetch failed, using default flags:", error);
          return null;
        }
      },
    });
    
    const clientFlags = pickClientFlags(serverFlags);
    
    // Optional: Log flag resolution in development
    if (process.env.NODE_ENV === "development") {
      console.log("Resolved flags:", {
        server: Object.keys(serverFlags).length,
        client: Object.keys(clientFlags).length,
        flags: clientFlags,
      });
    }

    return (
      <html lang="en">
        <body>
          <FlagsProvider flags={clientFlags}>
            {children}
          </FlagsProvider>
        </body>
      </html>
    );
  } catch (error) {
    // Fallback to empty flags if resolution fails completely
    console.error("Flag resolution failed:", error);
    
    return (
      <html lang="en">
        <body>
          <FlagsProvider flags={{} as any}>
            {children}
          </FlagsProvider>
        </body>
      </html>
    );
  }
}`}
                </pre>

                <h4 className="font-medium mb-2">Performance Considerations</h4>
                <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg text-sm">
                  <h5 className="font-medium mb-2">⚡ Optimization Tips:</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>
                      <strong>Cache context functions:</strong> Use React&apos;s{" "}
                      <code>cache()</code> to avoid duplicate user/workspace
                      fetches
                    </li>
                    <li>
                      <strong>Keep decide() functions fast:</strong> They run on
                      every request - avoid expensive operations
                    </li>
                    <li>
                      <strong>Minimize client flags:</strong> Only expose flags
                      that components actually need
                    </li>
                    <li>
                      <strong>Use server-only flags:</strong> Keep sensitive
                      logic and data on the server
                    </li>
                    <li>
                      <strong>Consider static flags:</strong> Flags without{" "}
                      <code>decide()</code> functions are fastest
                    </li>
                  </ul>
                </div>
              </div>

              {/* useFlag Hook */}
              <div>
                <h3 className="text-lg font-semibold mb-3">useFlag Hook</h3>
                <p className="text-muted-foreground mb-4">
                  A React hook that returns the current value of a specific
                  flag. Provides full TypeScript autocomplete and type safety.
                </p>

                <h4 className="font-medium mb-2">Signature</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`function useFlag<K extends keyof ClientFlags>(key: K): ClientFlags[K]`}
                </pre>

                <h4 className="font-medium mb-2">Examples</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`import { useFlag } from "@/components/flags/flags-provider";

function FeatureComponent() {
  // Boolean flag
  const isNewDashboard = useFlag("enable-new-dashboard");
  
  // Enum flag  
  const themeMode = useFlag("theme-mode");
  
  // String flag
  const apiEndpoint = useFlag("api-endpoint-version");

  return (
    <div>
      {isNewDashboard && <NewDashboard />}
      
      <div className={\`theme-\${themeMode}\`}>
        <ApiClient endpoint={apiEndpoint} />
      </div>
    </div>
  );
}

// TypeScript will provide autocomplete for flag names and infer return types
function TypeSafeExample() {
  const theme = useFlag("theme-mode"); // TypeScript knows this is "light" | "dark" | "auto"
  
  // This would cause a TypeScript error:
  // const invalid = useFlag("non-existent-flag");
  
  return <div className={theme === "dark" ? "dark" : "light"}>Content</div>;
}`}
                </pre>

                <h4 className="font-medium mb-2">Best Practices</h4>
                <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg text-sm">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>
                      Use descriptive variable names that match the flag purpose
                    </li>
                    <li>
                      Extract flag values at the top of your component for
                      clarity
                    </li>
                    <li>
                      Avoid calling <code>useFlag</code> conditionally or in
                      loops
                    </li>
                    <li>
                      Consider memoizing expensive computations based on flag
                      values
                    </li>
                  </ul>
                </div>
              </div>

              {/* Flag Component */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Flag Component</h3>
                <p className="text-muted-foreground mb-4">
                  A declarative component for conditional rendering based on
                  flag values. Provides a clean, readable way to show/hide
                  content without cluttering your JSX with conditionals.
                </p>

                <h4 className="font-medium mb-2">Props</h4>
                <div className="bg-muted p-4 rounded-lg text-sm mb-4">
                  <ul className="space-y-2">
                    <li>
                      <code className="text-blue-600">when</code>:{" "}
                      <code>string</code> - The flag key to check (required)
                    </li>
                    <li>
                      <code className="text-blue-600">is</code>:{" "}
                      <code>any</code> - Render children when flag value equals
                      this
                    </li>
                    <li>
                      <code className="text-blue-600">not</code>:{" "}
                      <code>any</code> - Render children when flag value does
                      NOT equal this
                    </li>
                    <li>
                      <code className="text-blue-600">fallback</code>:{" "}
                      <code>ReactNode</code> - Content to show when condition is
                      false
                    </li>
                    <li>
                      <code className="text-blue-600">children</code>:{" "}
                      <code>ReactNode</code> - Content to show when condition is
                      true
                    </li>
                  </ul>
                </div>

                <h4 className="font-medium mb-2">Boolean Flags</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`import { Flag } from "@/components/flags/flag";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* Show when flag is truthy */}
      <Flag when="enable-analytics">
        <AnalyticsPanel />
      </Flag>
      
      {/* Show when flag is falsy */}
      <Flag when="enable-analytics" not={true}>
        <div>Analytics coming soon!</div>
      </Flag>
      
      {/* With fallback content */}
      <Flag 
        when="enable-premium-features" 
        fallback={<UpgradePrompt />}
      >
        <PremiumFeatures />
      </Flag>
    </div>
  );
}`}
                </pre>

                <h4 className="font-medium mb-2">Enum/String Flags</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`function ThemedApp() {
  return (
    <div>
      {/* Specific value matching */}
      <Flag when="theme-mode" is="dark">
        <DarkModeStyles />
      </Flag>
      
      <Flag when="theme-mode" is="light">
        <LightModeStyles />
      </Flag>
      
      <Flag when="theme-mode" is="auto">
        <SystemThemeDetector />
      </Flag>
      
      {/* Multiple conditions */}
      <Flag when="user-plan" is="premium">
        <PremiumBadge />
      </Flag>
      
      <Flag when="user-plan" not="free">
        <PaidFeatures />
      </Flag>
    </div>
  );
}`}
                </pre>

                <h4 className="font-medium mb-2">Advanced Patterns</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`function AdvancedFlagUsage() {
  return (
    <div>
      {/* Nested flags */}
      <Flag when="enable-new-ui">
        <Flag when="enable-beta-features">
          <BetaNewUI />
        </Flag>
        <Flag when="enable-beta-features" not={true}>
          <StableNewUI />
        </Flag>
      </Flag>
      
      {/* Complex fallback chains */}
      <Flag 
        when="payment-provider" 
        is="stripe"
        fallback={
          <Flag 
            when="payment-provider" 
            is="paypal"
            fallback={<DefaultPaymentForm />}
          >
            <PayPalForm />
          </Flag>
        }
      >
        <StripeForm />
      </Flag>
      
      {/* Conditional styling */}
      <Flag when="high-contrast-mode">
        <div className="high-contrast">
          <Content />
        </div>
      </Flag>
    </div>
  );
}`}
                </pre>

                <h4 className="font-medium mb-2">Performance Considerations</h4>
                <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg text-sm">
                  <p className="font-medium mb-2">⚡ Performance Tips:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>
                      Flag components are lightweight and don&apos;t cause
                      re-renders when flag values change
                    </li>
                    <li>
                      Prefer <code>&lt;Flag&gt;</code> over conditional JSX for
                      better readability
                    </li>
                    <li>
                      Use <code>fallback</code> prop instead of separate{" "}
                      <code>&lt;Flag not={`{true}`}&gt;</code> when possible
                    </li>
                    <li>
                      Avoid deeply nested Flag components - consider using the
                      hook for complex logic
                    </li>
                  </ul>
                </div>
              </div>

              {/* FlagsTestProvider */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  FlagsTestProvider
                </h3>
                <p className="text-muted-foreground mb-4">
                  A specialized provider for testing and development that allows
                  you to override flag values. Perfect for unit tests,
                  integration tests, and Storybook stories.
                </p>

                <h4 className="font-medium mb-2">Props</h4>
                <div className="bg-muted p-4 rounded-lg text-sm mb-4">
                  <ul className="space-y-2">
                    <li>
                      <code className="text-blue-600">overrides</code>:{" "}
                      <code>Partial&lt;ClientFlags&gt;</code> - Flag values to
                      override
                    </li>
                    <li>
                      <code className="text-blue-600">children</code>:{" "}
                      <code>React.ReactNode</code> - Components to test
                    </li>
                  </ul>
                </div>

                <h4 className="font-medium mb-2">Unit Testing</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`import { render, screen } from "@testing-library/react";
import { FlagsTestProvider } from "@/components/flags/flags-test-provider";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  test("shows analytics when flag is enabled", () => {
    render(
      <FlagsTestProvider overrides={{ "enable-analytics": true }}>
        <Dashboard />
      </FlagsTestProvider>
    );
    
    expect(screen.getByText("Analytics Panel")).toBeInTheDocument();
  });

  test("hides analytics when flag is disabled", () => {
    render(
      <FlagsTestProvider overrides={{ "enable-analytics": false }}>
        <Dashboard />
      </FlagsTestProvider>
    );
    
    expect(screen.queryByText("Analytics Panel")).not.toBeInTheDocument();
  });

  test("handles multiple flag overrides", () => {
    render(
      <FlagsTestProvider 
        overrides={{ 
          "enable-analytics": true,
          "theme-mode": "dark",
          "user-plan": "premium"
        }}
      >
        <Dashboard />
      </FlagsTestProvider>
    );
    
    expect(screen.getByText("Analytics Panel")).toBeInTheDocument();
    expect(screen.getByText("Premium Features")).toBeInTheDocument();
  });
});`}
                </pre>

                <h4 className="font-medium mb-2">Storybook Integration</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`// Dashboard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { FlagsTestProvider } from "@/components/flags/flags-test-provider";
import Dashboard from "./Dashboard";

const meta: Meta<typeof Dashboard> = {
  title: "Components/Dashboard",
  component: Dashboard,
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <FlagsTestProvider overrides={{}}>
        <Story />
      </FlagsTestProvider>
    ),
  ],
};

export const WithAnalytics: Story = {
  decorators: [
    (Story) => (
      <FlagsTestProvider overrides={{ "enable-analytics": true }}>
        <Story />
      </FlagsTestProvider>
    ),
  ],
};

export const DarkTheme: Story = {
  decorators: [
    (Story) => (
      <FlagsTestProvider 
        overrides={{ 
          "theme-mode": "dark",
          "enable-analytics": true 
        }}
      >
        <Story />
      </FlagsTestProvider>
    ),
  ],
};

export const PremiumUser: Story = {
  decorators: [
    (Story) => (
      <FlagsTestProvider 
        overrides={{ 
          "user-plan": "premium",
          "enable-analytics": true,
          "enable-premium-features": true
        }}
      >
        <Story />
      </FlagsTestProvider>
    ),
  ],
};`}
                </pre>

                <h4 className="font-medium mb-2">Development & Debugging</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`// Create a debug component for development
function FlagDebugger() {
  return (
    <FlagsTestProvider 
      overrides={{
        "enable-new-dashboard": true,
        "theme-mode": "dark",
        "enable-beta-features": true,
        "user-plan": "premium"
      }}
    >
      <div style={{ border: "2px solid red", padding: "10px" }}>
        <h3>🚧 Development Mode - Flags Overridden</h3>
        <YourApp />
      </div>
    </FlagsTestProvider>
  );
}

// Use in development
export default process.env.NODE_ENV === "development" 
  ? FlagDebugger 
  : YourApp;`}
                </pre>

                <h4 className="font-medium mb-2">Testing Best Practices</h4>
                <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg text-sm">
                  <p className="font-medium mb-2">✅ Testing Guidelines:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Test both enabled and disabled states for each flag</li>
                    <li>
                      Create separate test cases for different flag combinations
                    </li>
                    <li>
                      Use descriptive test names that include the flag state
                    </li>
                    <li>
                      Group related flag tests using <code>describe</code>{" "}
                      blocks
                    </li>
                    <li>
                      Consider creating test utilities for common flag
                      combinations
                    </li>
                    <li>Test edge cases like missing or invalid flag values</li>
                  </ul>
                </div>
              </div>

              {/* useFlags Hook */}
              <div>
                <h3 className="text-lg font-semibold mb-3">useFlags Hook</h3>
                <p className="text-muted-foreground mb-4">
                  Returns all available client flags as an object. Useful for
                  debugging, analytics, or when you need to work with multiple
                  flags at once.
                </p>

                <h4 className="font-medium mb-2">Usage</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
                  {`import { useFlags } from "@/components/flags/flags-provider";

function FlagDebugPanel() {
  const allFlags = useFlags();
  
  return (
    <div className="debug-panel">
      <h3>Current Flag Values</h3>
      <pre>{JSON.stringify(allFlags, null, 2)}</pre>
      
      <div>
        <p>Total flags: {Object.keys(allFlags).length}</p>
        <p>Enabled features: {
          Object.values(allFlags).filter(Boolean).length
        }</p>
      </div>
    </div>
  );
}

function ConditionalFeatures() {
  const flags = useFlags();
  
  // Check multiple flags at once
  const hasAdvancedFeatures = flags["enable-analytics"] && 
                              flags["enable-premium-features"];
  
  return (
    <div>
      {hasAdvancedFeatures && <AdvancedDashboard />}
    </div>
  );
}`}
                </pre>

                <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg text-sm">
                  <p className="font-medium mb-2">
                    ⚠️ When to use useFlags vs useFlag:
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>
                      Use <code>useFlag</code> for single flag values (most
                      common)
                    </li>
                    <li>
                      Use <code>useFlags</code> for debugging, analytics, or
                      complex multi-flag logic
                    </li>
                    <li>
                      Avoid <code>useFlags</code> in production components
                      unless necessary
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Testing */}
          <section id="testing">
            <h2 className="text-2xl font-bold mb-4">8. Testing</h2>

            <h3 className="text-lg font-semibold mb-2">Unit Tests</h3>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              {`import { render } from "@testing-library/react";
import { FlagsTestProvider } from "@/components/flags/flags-test-provider";
import MyComponent from "./MyComponent";

test("shows new feature when flag is enabled", () => {
  render(
    <FlagsTestProvider overrides={{ "my-feature": true }}>
      <MyComponent />
    </FlagsTestProvider>
  );
  
  expect(screen.getByText("New Feature")).toBeInTheDocument();
});`}
            </pre>

            <h3 className="text-lg font-semibold mb-2">Storybook</h3>
            <pre className="bg-muted p-4 rounded-lg text-sm">
              {`// MyComponent.stories.tsx
export const WithFeatureEnabled = {
  decorators: [
    (Story) => (
      <FlagsTestProvider overrides={{ "my-feature": true }}>
        <Story />
      </FlagsTestProvider>
    ),
  ],
};

export const WithFeatureDisabled = {
  decorators: [
    (Story) => (
      <FlagsTestProvider overrides={{ "my-feature": false }}>
        <Story />
      </FlagsTestProvider>
    ),
  ],
};`}
            </pre>
          </section>

          {/* CLI Tools */}
          <section id="cli-tools">
            <h2 className="text-2xl font-bold mb-4">9. CLI Tools</h2>
            
            <p className="text-muted-foreground mb-6">
              Fargo Flags includes powerful CLI tools to streamline flag management. These tools are distributed 
              via the shadcn registry and provide an interactive wizard for creating flags and a consistency 
              checker for CI/CD pipelines.
            </p>

            <h3 className="text-lg font-semibold mb-4">Installation & Setup</h3>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-medium mb-2">1. Install CLI Tools</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm mb-2">
                  <code>npx shadcn@latest add https://fargo-flags.com/r/flags-cli</code>
                </pre>
                <p className="text-sm text-muted-foreground">
                  This installs <code>scripts/create-flag.ts</code> and <code>scripts/check-flags-registry.ts</code>
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">2. Add Package.json Scripts</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The shadcn CLI cannot modify package.json automatically, so add these scripts manually:
                </p>
                <pre className="bg-muted p-4 rounded-lg text-sm mb-2">
{`{
  "scripts": {
    "flags:new": "tsx scripts/create-flag.ts",
    "flags:check": "tsx scripts/check-flags-registry.ts"
  }
}`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">3. Install Dependencies</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The CLI tools require these development dependencies:
                </p>
                <pre className="bg-muted p-4 rounded-lg text-sm">
                  <code>pnpm add -D tsx prompts fast-glob prettier @types/prompts</code>
                </pre>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4">flags:new - Interactive Flag Creation</h3>
            
            <p className="text-muted-foreground mb-4">
              The flag creation wizard guides you through defining new feature flags with proper TypeScript types, 
              Zod schemas, and automatic registry updates.
            </p>

            <h4 className="font-medium mb-2">Usage</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              <code>pnpm flags:new</code>
            </pre>

            <h4 className="font-medium mb-2">Interactive Prompts</h4>
            <div className="space-y-3 mb-6">
              <div className="p-3 border rounded-lg">
                <h5 className="font-medium text-sm mb-1">Flag Key</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Enter a kebab-case identifier (e.g., <code>enable-ai-assistant</code>)
                </p>
                <div className="bg-gray-50 p-2 rounded text-xs">
                  <span className="text-green-600">✓</span> enable-ai-assistant<br/>
                  <span className="text-green-600">✓</span> pagination-ui-location<br/>
                  <span className="text-red-600">✗</span> EnableAIAssistant<br/>
                  <span className="text-red-600">✗</span> enable_ai_assistant
                </div>
              </div>

              <div className="p-3 border rounded-lg">
                <h5 className="font-medium text-sm mb-1">Value Type</h5>
                <p className="text-sm text-muted-foreground mb-2">Choose between:</p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>boolean</strong> - Simple on/off flags</li>
                  <li>• <strong>string enum</strong> - Multiple predefined options</li>
                </ul>
              </div>

              <div className="p-3 border rounded-lg">
                <h5 className="font-medium text-sm mb-1">Client Exposure</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Choose whether this flag should be available on the client-side:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Public:</strong> Available via <code>useFlag()</code> and <code>&lt;Flag&gt;</code></li>
                  <li>• <strong>Server-only:</strong> Only available in <code>resolveAllFlags()</code></li>
                </ul>
              </div>

              <div className="p-3 border rounded-lg">
                <h5 className="font-medium text-sm mb-1">Default Value</h5>
                <p className="text-sm text-muted-foreground">
                  The fallback value when no <code>decide()</code> function is provided or when it returns undefined.
                </p>
              </div>
            </div>

            <h4 className="font-medium mb-2">What Gets Created</h4>
            <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-6">
              <h5 className="font-medium mb-2">Automatic File Generation</h5>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>Flag Definition:</strong> <code>src/lib/flags/defs/your-flag.flag.ts</code>
                  <div className="text-xs text-muted-foreground ml-4">Complete flag definition with schema, defaults, and client settings</div>
                </li>
                <li>
                  <strong>Registry Updates:</strong> <code>src/lib/flags/registry.config.ts</code>
                  <div className="text-xs text-muted-foreground ml-4">Automatic import, schema registration, and client key management</div>
                </li>
                <li>
                  <strong>Code Formatting:</strong> Prettier formatting (if available)
                  <div className="text-xs text-muted-foreground ml-4">Clean, consistent code style</div>
                </li>
              </ul>
            </div>

            <h4 className="font-medium mb-2">Example Workflow</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-6">
{`$ pnpm flags:new
✔ Flag key (kebab-case) … enable-premium-features
✔ Value type › boolean
✔ Expose to client? … yes
✔ Default value … false
✔ Description (optional) … Enable premium features for paid users

✔ created src/lib/flags/defs/enable_premium_features.flag.ts
✔ updated src/lib/flags/registry.config.ts
✔ formatted src/lib/flags/defs/enable_premium_features.flag.ts
✔ formatted src/lib/flags/registry.config.ts`}
            </pre>

            <h3 className="text-lg font-semibold mb-4">flags:check - Registry Consistency Validation</h3>
            
            <p className="text-muted-foreground mb-4">
              The consistency checker validates that your flag definitions and registry are in sync. 
              This is essential for CI/CD pipelines to catch configuration drift.
            </p>

            <h4 className="font-medium mb-2">Usage</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              <code>pnpm flags:check</code>
            </pre>

            <h4 className="font-medium mb-2">What It Validates</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Registry Completeness</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• All flag files have registry entries</li>
                    <li>• All registry entries have corresponding files</li>
                    <li>• Schema definitions match registry keys</li>
                  </ul>
                </div>

                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Client Flag Consistency</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Public flags are in clientFlagKeys array</li>
                    <li>• clientFlagKeys only contains public flags</li>
                    <li>• No orphaned client keys</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium text-sm mb-1">File Structure</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• All .flag.ts files export required &apos;key&apos;</li>
                    <li>• Flag keys match filename conventions</li>
                    <li>• No duplicate flag keys</li>
                  </ul>
                </div>

                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Import Integrity</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• All imports resolve correctly</li>
                    <li>• No missing or broken imports</li>
                    <li>• Registry anchor tags are intact</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="font-medium mb-2">Success Output</h4>
            <pre className="bg-primary/5 border border-primary/10 p-4 rounded-lg text-sm mb-4">
              <code className="text-primary">✔ flags:check OK — 4 registered, 4 files, 3 client-exposed</code>
            </pre>

            <h4 className="font-medium mb-2">Error Output</h4>
            <pre className="bg-red-50 border border-red-200 p-4 rounded-lg text-sm mb-6">
{`Defs present but missing in registry.config:
  - new-experimental-flag

Public flags in files but missing from clientFlagKeys:
  - enable-ai-assistant-in-pdf-toolbar`}
            </pre>

            <h3 className="text-lg font-semibold mb-4">CI/CD Integration</h3>
            
            <p className="text-muted-foreground mb-4">
              Add the consistency checker to your CI pipeline to catch flag configuration issues early.
            </p>

            <h4 className="font-medium mb-2">GitHub Actions</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
{`# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: pnpm install
      - run: pnpm flags:check  # Validate flag consistency
      - run: pnpm build
      - run: pnpm test`}
            </pre>

            <h4 className="font-medium mb-2">Pre-commit Hook</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-6">
{`# package.json
{
  "lint-staged": {
    "src/lib/flags/**/*.ts": ["pnpm flags:check"]
  }
}`}
            </pre>

            <h3 className="text-lg font-semibold mb-4">Advanced Usage</h3>

            <h4 className="font-medium mb-2">Custom Flag Templates</h4>
            <p className="text-muted-foreground mb-3">
              You can modify <code>scripts/create-flag.ts</code> to customize the generated flag templates:
            </p>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
{`// Add custom prompts
{ type: "text", name: "team", message: "Owning team" },

// Customize generated content
const contents = \`import { z } from "zod";
import { defineFlag } from "../kit";

/**
 * \${answers.description}
 * @owner \${answers.team}
 */
export const key = "\${key}" as const;
// ... rest of template\`;`}
            </pre>

            <h4 className="font-medium mb-2">Batch Operations</h4>
            <p className="text-muted-foreground mb-3">
              For bulk flag management, you can extend the scripts:
            </p>
            <pre className="bg-muted p-4 rounded-lg text-sm">
{`// scripts/migrate-flags.ts - Custom migration script
import { registry } from "../src/lib/flags/registry.config";

// Bulk update flag properties
// Migrate deprecated flags
// Generate flag usage reports`}
            </pre>
            
            <p className="text-muted-foreground mb-6">
              Fargo Flags includes powerful CLI tools to streamline flag creation and maintenance. 
              These tools are distributed via the shadcn-style component registry.
            </p>

            <h3 className="text-lg font-semibold mb-2">Installation</h3>
            <p className="text-muted-foreground mb-3">
              Install the CLI tools using the shadcn CLI:
            </p>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-6">
              <code>npx shadcn@latest add https://fargo-flags.com/r/flags-cli</code>
            </pre>
            
            <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-6">
              <h4 className="font-medium mb-2">📦 What Gets Installed</h4>
              <ul className="text-sm space-y-1">
                <li>• <code>scripts/create-flag.ts</code> - Interactive flag creation wizard</li>
                <li>• <code>scripts/check-flags-registry.ts</code> - Consistency validation tool</li>
                <li>• Instructions to add npm scripts to your <code>package.json</code></li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold mb-2">Setup Package Scripts</h3>
            <p className="text-muted-foreground mb-3">
              After installation, add these scripts to your <code>package.json</code>:
            </p>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-6">
{`{
  "scripts": {
    "flags:new": "tsx scripts/create-flag.ts",
    "flags:check": "tsx scripts/check-flags-registry.ts"
  },
  "devDependencies": {
    "tsx": "^4.20.5",
    "prompts": "^2.4.2",
    "fast-glob": "^3.3.3",
    "prettier": "^3.6.2"
  }
}`}
            </pre>

            <h3 className="text-lg font-semibold mb-2">Create Flag Wizard</h3>
            <p className="text-muted-foreground mb-3">
              Interactive wizard that creates a new flag file and updates the registry automatically.
            </p>
            
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              <code>pnpm flags:new</code>
            </pre>

            <h4 className="font-medium mb-2">Wizard Flow</h4>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">1</span>
                  <span><strong>Flag Key:</strong> Enter kebab-case flag identifier (e.g., &quot;enable-new-dashboard&quot;)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">2</span>
                  <span><strong>Value Type:</strong> Choose between boolean or string enum</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">3</span>
                  <span><strong>Enum Options:</strong> If enum, specify comma-separated values</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">4</span>
                  <span><strong>Client Exposure:</strong> Choose if flag should be available on client</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">5</span>
                  <span><strong>Serializer:</strong> Optional function to transform values for client</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">6</span>
                  <span><strong>Default Value:</strong> Set the fallback value</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">7</span>
                  <span><strong>Description:</strong> Optional human-readable description</span>
                </div>
              </div>
            </div>

            <h4 className="font-medium mb-2">What the Wizard Does</h4>
            <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg mb-6">
              <ul className="text-sm space-y-1">
                <li>✅ Creates flag file in <code>src/lib/flags/defs/</code></li>
                <li>✅ Updates <code>registry.config.ts</code> with imports and entries</li>
                <li>✅ Adds to <code>clientFlagKeys</code> if public</li>
                <li>✅ Formats code with Prettier (if available)</li>
                <li>✅ Validates flag key naming conventions</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold mb-2">Consistency Checker</h3>
            <p className="text-muted-foreground mb-3">
              Validates that all flag definitions are properly registered and consistent. 
              Essential for CI/CD pipelines and team development.
            </p>
            
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
              <code>pnpm flags:check</code>
            </pre>

            <h4 className="font-medium mb-2">What It Validates</h4>
            <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg mb-4">
              <ul className="text-sm space-y-1">
                <li>🔍 Every <code>defs/*.flag.ts</code> file is imported in <code>registry.config.ts</code></li>
                <li>🔍 All imports have corresponding entries in <code>flagSchemas</code> and <code>registry</code></li>
                <li>🔍 <code>flagSchemas</code> keys match <code>registry</code> keys exactly</li>
                <li>🔍 <code>clientFlagKeys</code> aligns with each flag&apos;s <code>client.public</code> setting</li>
                <li>🔍 No orphaned registry entries without corresponding flag files</li>
                <li>🔍 Flag key naming conventions are followed</li>
              </ul>
            </div>

            <h4 className="font-medium mb-2">Example Output</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
{`✔ flags:check OK — 4 registered, 4 files, 2 client-exposed

# Or if issues are found:
Defs present but missing in registry.config:
  - new-feature-flag

Public flags in files but missing from clientFlagKeys:
  - enable-analytics`}
            </pre>

            <h4 className="font-medium mb-2">CI/CD Integration</h4>
            <p className="text-muted-foreground mb-3">
              Add the consistency checker to your CI pipeline:
            </p>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
{`# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: pnpm install
      - run: pnpm flags:check  # Validate flag consistency
      - run: pnpm test`}
            </pre>

            <h3 className="text-lg font-semibold mb-2">Manual Flag Creation</h3>
            <p className="text-muted-foreground mb-3">
              You can also create flags manually without the wizard. The system supports both approaches:
            </p>
            
            <h4 className="font-medium mb-2">1. Create Flag File</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
{`// src/lib/flags/defs/my-feature.flag.ts
import { z } from "zod";
import { defineFlag } from "../kit";

export const key = "my-feature" as const;
export const schema = z.boolean();

export default defineFlag({
  key,
  schema,
  description: "My new feature",
  defaultValue: false,
  client: { public: true },
});`}
            </pre>

            <h4 className="font-medium mb-2">2. Update Registry Manually</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
{`// src/lib/flags/registry.config.ts
// Add import
import * as f_my_feature from "./defs/my_feature.flag";

// Add to flagSchemas
export const flagSchemas = {
  "my-feature": f_my_feature.schema,
  // ... other flags
} as const;

// Add to registry
export const registry = {
  "my-feature": f_my_feature.default,
  // ... other flags
} as const;

// Add to clientFlagKeys if public
export const clientFlagKeys = [
  "my-feature",
  // ... other public flags
] as const;`}
            </pre>

            <h4 className="font-medium mb-2">3. Validate Changes</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm mb-6">
              <code>pnpm flags:check</code>
            </pre>

            <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg">
              <h4 className="font-medium mb-2">💡 Pro Tips</h4>
              <ul className="text-sm space-y-1">
                <li>• Use the wizard for speed and consistency</li>
                <li>• Run <code>flags:check</code> before committing changes</li>
                <li>• Set up pre-commit hooks to validate flags automatically</li>
                <li>• Use descriptive flag keys that explain the feature</li>
                <li>• Keep flag descriptions up to date for team clarity</li>
              </ul>
            </div>
          </section>

          {/* Architecture */}
          <section id="architecture">
            <h2 className="text-2xl font-bold mb-4">10. Architecture</h2>

            <h3 className="text-lg font-semibold mb-2">How It Works</h3>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-6">
              <li>
                Define flags in individual <code>*.flag.ts</code> files
              </li>
              <li>
                Wizard updates <code>registry.config.ts</code> with static
                imports
              </li>
              <li>
                Server resolves all flags during SSR with optional context
              </li>
              <li>Client receives safe subset via React provider</li>
              <li>
                Components use hooks or <code>&lt;Flag&gt;</code> wrapper
              </li>
            </ol>

            <h3 className="text-lg font-semibold mb-2">File Structure</h3>
            <pre className="bg-muted p-4 rounded-lg text-sm">
              {`src/
├── lib/flags/
│   ├── kit.ts                    # Core types and defineFlag helper
│   ├── runtime.ts                # Server-side resolver + client serialization
│   ├── registry.config.ts        # Aggregator (checked in; wizard updates)
│   └── defs/                     # One file per flag
│       ├── feature-a.flag.ts
│       └── feature-b.flag.ts
├── components/flags/
│   ├── flags-provider.tsx        # React context provider
│   ├── flag.tsx                  # Conditional rendering component
│   └── flags-test-provider.tsx   # Testing utilities
└── scripts/
    ├── create-flag.ts            # Flag scaffolding wizard
    └── check-flags-registry.ts   # CI consistency checker`}
            </pre>
          </section>

          {/* Best Practices */}
          <section id="best-practices">
            <h2 className="text-2xl font-bold mb-4">11. Best Practices</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Flag Naming</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>
                    Use kebab-case for flag keys:{" "}
                    <code>enable-new-dashboard</code>
                  </li>
                  <li>
                    Be descriptive: <code>show-premium-features</code> vs{" "}
                    <code>premium</code>
                  </li>
                  <li>
                    Include context: <code>checkout-flow-v2</code> vs{" "}
                    <code>v2</code>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Security</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>
                    Keep sensitive flags server-only:{" "}
                    <code>client: {`{ public: false }`}</code>
                  </li>
                  <li>
                    Use <code>serialize</code> to sanitize public flag values
                  </li>
                  <li>Never expose API keys or secrets in flag values</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Performance</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>
                    Keep <code>decide()</code> functions fast - they run on
                    every request
                  </li>
                  <li>
                    Use Next.js <code>cache()</code> for expensive flag
                    decisions
                  </li>
                  <li>Minimize the number of client-exposed flags</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Testing</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Test both enabled and disabled states of features</li>
                  <li>
                    Use <code>FlagsTestProvider</code> for consistent test
                    environments
                  </li>
                  <li>Include flag states in your Storybook stories</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting">
            <h2 className="text-2xl font-bold mb-4">12. Troubleshooting</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Common Issues</h3>

                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Flag not found error</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <code>Error: Flag &quot;my-flag&quot; not found</code>
                    </p>
                    <p className="text-sm">
                      Run <code>pnpm flags:check</code> to ensure the flag is
                      properly registered.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">TypeScript errors</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <code>Property does not exist on type</code>
                    </p>
                    <p className="text-sm">
                      Restart your TypeScript server after adding new flags.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Hydration mismatches</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Server and client flag values differ
                    </p>
                    <p className="text-sm">
                      Ensure flag decisions are deterministic or use server-only
                      flags.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* API Reference */}
          <section id="api-reference">
            <h2 className="text-2xl font-bold mb-4">13. API Reference</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">defineFlag()</h3>
                <pre className="bg-muted p-4 rounded-lg text-sm">
                  {`defineFlag({
  key: string;                    // Unique flag identifier
  schema: ZodSchema;              // Zod schema for validation
  description?: string;           // Human-readable description
  defaultValue: T;                // Default value (must match schema)
  options?: Array<{               // For enum flags
    value: T;
    label?: string;
  }>;
  client?: {                      // Client exposure settings
    public: boolean;
    serialize?: (value: T) => any;
  };
  decide?: (ctx: FlagContext) => T | Promise<T>; // Server-side decision logic
})`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">useFlag()</h3>
                <pre className="bg-muted p-4 rounded-lg text-sm">
                  {`function useFlag<K extends keyof ClientFlags>(key: K): ClientFlags[K]`}
                </pre>
                <p className="text-sm text-muted-foreground">
                  Returns the current value of a client-exposed flag.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  resolveAllFlags()
                </h3>
                <pre className="bg-muted p-4 rounded-lg text-sm">
                  {`function resolveAllFlags(ctx?: FlagContext): Promise<Flags>`}
                </pre>
                <p className="text-sm text-muted-foreground">
                  Resolves all flags on the server with optional context.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">FlagContext</h3>
                <pre className="bg-muted p-4 rounded-lg text-sm">
                  {`type FlagContext = {
  getUser?: () => Promise<{ id: string; plan?: string } | null>;
  getWorkspace?: () => Promise<{ id: string; plan?: string } | null>;
}`}
                </pre>
                <p className="text-sm text-muted-foreground">
                  Context object passed to flag decision functions.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t text-center">
          <p className="text-muted-foreground">
            <Link
              href="/"
              className="text-primary hover:text-primary/80"
            >
              ← Back to Demo
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

import { CopyButton } from "@/components/ui/copy-button";

export function InstallationSection() {
  return (
    <section id="installation">
      <h2 className="text-2xl font-bold mb-4">2. Installation</h2>

      <h3 className="text-lg font-semibold mb-2">Core System</h3>
      <p className="text-muted-foreground mb-3">
        Install the core Fargo Flags system using the shadcn CLI:
      </p>
      <div className="mb-4">
        <CopyButton
          text="npx shadcn@latest add https://flags.griffen.codes/r/flags-core"
          className="w-full"
        />
      </div>

      <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-6">
        <h4 className="font-medium mb-2">
          📦 Core Installation Includes
        </h4>
        <ul className="text-sm space-y-1">
          <li>
            • <code>src/lib/flags/kit.ts</code> - Core types and
            defineFlag helper
          </li>
          <li>
            • <code>src/lib/flags/runtime.ts</code> - Server-side
            resolver + client serialization
          </li>
          <li>
            • <code>src/components/flags/flags-provider.tsx</code> -
            React context provider
          </li>
          <li>
            • <code>src/lib/flags/registry.config.ts</code> - Starter
            registry with anchor tags
          </li>
          <li>
            • <code>src/lib/flags/defs/.gitkeep</code> - Empty directory
            for flag definitions
          </li>
        </ul>
      </div>

      <h3 className="text-lg font-semibold mb-2">
        Optional Components
      </h3>
      <p className="text-muted-foreground mb-3">
        Install additional components as needed:
      </p>

      <div className="grid gap-4 mb-6">
        <div>
          <h4 className="font-medium mb-2">Flag Component</h4>
          <div className="mb-2">
            <CopyButton 
              text="npx shadcn@latest add https://flags.griffen.codes/r/flags-flag"
              className="w-full"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Installs <code>&lt;Flag&gt;</code> conditional rendering
            component
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-2">Test Provider</h4>
          <div className="mb-2">
            <CopyButton 
              text="npx shadcn@latest add https://flags.griffen.codes/r/flags-test-provider"
              className="w-full"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Installs <code>FlagsTestProvider</code> for testing
          </p>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">CLI Tools</h3>
      <div className="mb-4">
        <CopyButton 
          text="npx shadcn@latest add https://flags.griffen.codes/r/flags-cli"
          className="w-full"
        />
      </div>

      <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg mb-4">
        <h4 className="font-medium mb-2">
          🛠️ CLI Installation Includes
        </h4>
        <ul className="text-sm space-y-1">
          <li>
            • <code>scripts/create-flag.ts</code> - Interactive flag
            creation wizard
          </li>
          <li>
            • <code>scripts/check-flags-registry.ts</code> - Consistency
            validation tool
          </li>
          <li>
            • Instructions to add npm scripts to your{" "}
            <code>package.json</code>
          </li>
        </ul>
      </div>

      <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-6">
        <h4 className="font-medium mb-2">
          📋 Required Package.json Scripts
        </h4>
        <p className="text-sm text-muted-foreground mb-2">
          After installing the CLI tools, add these scripts to your{" "}
          <code>package.json</code>:
        </p>
        <pre className="bg-background p-3 rounded text-sm border">
          {`{
  "scripts": {
    "flags:new": "tsx scripts/create-flag.ts",
    "flags:check": "tsx scripts/check-flags-registry.ts",
    "flags:validate": "tsx scripts/validate-flags-installation.ts"
  }
}`}
        </pre>
        <p className="text-xs text-muted-foreground mt-2">
          💡 The shadcn CLI cannot automatically modify package.json, so
          this step is manual.
        </p>
      </div>

      <h3 className="text-lg font-semibold mb-2">
        Manual Dependencies
      </h3>
      <p className="text-muted-foreground mb-3">
        If not using the registry, install dependencies manually:
      </p>

      <h4 className="font-medium mb-2">Runtime Dependencies</h4>
      <div className="mb-4">
        <CopyButton 
          text="pnpm add zod"
          className="w-full"
        />
      </div>

      <h4 className="font-medium mb-2">Development Tools (for CLI)</h4>
      <div className="mb-4">
        <CopyButton 
          text="pnpm add -D tsx prompts fast-glob prettier @types/prompts"
          className="w-full"
        />
      </div>

      <h4 className="font-medium mb-2">Package.json Scripts</h4>
      <pre className="bg-muted p-4 rounded-lg text-sm mb-6">
        {`{
  "scripts": {
    "flags:new": "tsx scripts/create-flag.ts",
    "flags:check": "tsx scripts/check-flags-registry.ts",
    "flags:validate": "tsx scripts/validate-flags-installation.ts"
  }
}`}
      </pre>

      <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg">
        <h4 className="font-medium mb-2">⚠️ Important Notes</h4>
        <ul className="text-sm space-y-1">
          <li>
            • The shadcn CLI cannot automatically update{" "}
            <code>package.json</code> scripts
          </li>
          <li>
            • You must manually add the <code>flags:new</code>,{" "}
            <code>flags:check</code>, and <code>flags:validate</code> scripts
          </li>
          <li>
            • CLI tools require <code>tsx</code> to run TypeScript files
            directly
          </li>
          <li>
            • Prettier is optional but recommended for code formatting
          </li>
        </ul>
      </div>
    </section>
  );
}
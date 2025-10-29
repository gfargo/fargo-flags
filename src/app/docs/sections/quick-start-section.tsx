import { CodeBlock } from "../components/shared/code-block";
import { InfoBox } from "../components/shared/info-box";

export function QuickStartSection() {
  return (
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
      <CodeBlock
        code={`// app/layout.tsx
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
      />

      <h3 className="text-lg font-semibold mb-2">
        3. Install CLI Tools
      </h3>
      <CodeBlock
        code="npx shadcn@latest add https://flags.griffen.codes/r/flags-cli"
      />
      <p className="text-muted-foreground mb-4">
        This installs the flag creation wizard and consistency checker
        scripts.
      </p>

      <InfoBox type="tip" title="Manual Step Required">
        <p className="text-sm text-muted-foreground mb-2">
          Add these scripts to your <code>package.json</code>:
        </p>
        <pre className="bg-background p-3 rounded text-sm border">
          {`"scripts": {
  "flags:new": "tsx scripts/create-flag.ts",
  "flags:check": "tsx scripts/check-flags-registry.ts"
}`}
        </pre>
      </InfoBox>

      <h3 className="text-lg font-semibold mb-2">
        4. Create your first flag
      </h3>
      <CodeBlock code="pnpm flags:new" />
      <p className="text-muted-foreground mb-4">
        The interactive wizard will guide you through creating a
        properly typed flag with automatic registry updates.
      </p>

      <h3 className="text-lg font-semibold mb-2">
        5. Validate your setup
      </h3>
      <CodeBlock code="pnpm flags:check" />
    </section>
  );
}
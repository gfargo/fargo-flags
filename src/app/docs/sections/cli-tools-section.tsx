import { CodeBlock } from "../components/shared/code-block";
import { InfoBox } from "../components/shared/info-box";

export function CLIToolsSection() {
  return (
    <section id="cli-tools">
      <h2 className="text-2xl font-bold mb-4">9. CLI Tools</h2>

      <p className="text-muted-foreground mb-6">
        Fargo Flags includes powerful CLI tools to streamline flag
        management. These tools are distributed via the shadcn registry
        and provide an interactive wizard for creating flags and a
        consistency checker for CI/CD pipelines.
      </p>

      <h3 className="text-lg font-semibold mb-4">
        Installation & Setup
      </h3>

      <div className="space-y-4 mb-8">
        <div>
          <h4 className="font-medium mb-2">1. Install CLI Tools</h4>
          <CodeBlock
            code="npx shadcn@latest add https://flags.griffen.codes/r/flags-cli"
          />
          <p className="text-sm text-muted-foreground">
            This installs <code>scripts/create-flag.ts</code> and{" "}
            <code>scripts/check-flags-registry.ts</code>
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-2">
            2. Add Package.json Scripts
          </h4>
          <p className="text-sm text-muted-foreground mb-2">
            The shadcn CLI cannot modify package.json automatically, so
            add these scripts manually:
          </p>
          <pre className="bg-muted p-4 rounded-lg text-sm mb-2">
            {`{
  "scripts": {
    "flags:new": "tsx scripts/create-flag.ts",
    "flags:check": "tsx scripts/check-flags-registry.ts",
    "flags:validate": "tsx scripts/validate-flags-installation.ts"
  }
}`}
          </pre>
        </div>

        <div>
          <h4 className="font-medium mb-2">3. Install Dependencies</h4>
          <p className="text-sm text-muted-foreground mb-2">
            The CLI tools require these development dependencies:
          </p>
          <CodeBlock
            code="pnpm add -D tsx prompts fast-glob prettier @types/prompts"
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4">
        flags:new - Interactive Flag Creation
      </h3>

      <p className="text-muted-foreground mb-4">
        The flag creation wizard guides you through defining new feature
        flags with proper TypeScript types, Zod schemas, and automatic
        registry updates.
      </p>

      <h4 className="font-medium mb-2">Usage</h4>
      <CodeBlock code="pnpm flags:new" />

      <h4 className="font-medium mb-2">Interactive Prompts</h4>
      <div className="space-y-3 mb-6">
        <div className="p-3 border rounded-lg">
          <h5 className="font-medium text-sm mb-1">Flag Key</h5>
          <p className="text-sm text-muted-foreground mb-2">
            Enter a kebab-case identifier (e.g.,{" "}
            <code>enable-ai-assistant</code>)
          </p>
          <div className="bg-gray-50 p-2 rounded text-xs">
            <span className="text-green-600">✓</span>{" "}
            enable-ai-assistant
            <br />
            <span className="text-green-600">✓</span>{" "}
            pagination-ui-location
            <br />
            <span className="text-red-600">✗</span> EnableAIAssistant
            <br />
            <span className="text-red-600">✗</span> enable_ai_assistant
          </div>
        </div>

        <div className="p-3 border rounded-lg">
          <h5 className="font-medium text-sm mb-1">Value Type</h5>
          <p className="text-sm text-muted-foreground mb-2">
            Choose between:
          </p>
          <ul className="text-sm space-y-1">
            <li>
              • <strong>boolean</strong> - Simple on/off flags
            </li>
            <li>
              • <strong>string enum</strong> - Multiple predefined
              options
            </li>
          </ul>
        </div>

        <div className="p-3 border rounded-lg">
          <h5 className="font-medium text-sm mb-1">Client Exposure</h5>
          <p className="text-sm text-muted-foreground mb-2">
            Choose whether this flag should be available on the
            client-side:
          </p>
          <ul className="text-sm space-y-1">
            <li>
              • <strong>Public:</strong> Available via{" "}
              <code>useFlag()</code> and <code>&lt;Flag&gt;</code>
            </li>
            <li>
              • <strong>Server-only:</strong> Only available in{" "}
              <code>resolveAllFlags()</code>
            </li>
          </ul>
        </div>
      </div>

      <InfoBox type="info" title="Automatic File Generation">
        <ul className="text-sm space-y-2">
          <li>
            <strong>Flag Definition:</strong>{" "}
            <code>src/lib/flags/defs/your-flag.flag.ts</code>
            <div className="text-xs text-muted-foreground ml-4">
              Complete flag definition with schema, defaults, and client
              settings
            </div>
          </li>
          <li>
            <strong>Registry Updates:</strong>{" "}
            <code>src/lib/flags/registry.config.ts</code>
            <div className="text-xs text-muted-foreground ml-4">
              Automatic import, schema registration, and client key
              management
            </div>
          </li>
          <li>
            <strong>Code Formatting:</strong> Prettier formatting (if
            available)
            <div className="text-xs text-muted-foreground ml-4">
              Clean, consistent code style
            </div>
          </li>
        </ul>
      </InfoBox>

      <h3 className="text-lg font-semibold mb-4">
        flags:check - Registry Consistency Validation
      </h3>

      <p className="text-muted-foreground mb-4">
        The consistency checker validates that your flag definitions and
        registry are in sync. This is essential for CI/CD pipelines to
        catch configuration drift.
      </p>

      <h4 className="font-medium mb-2">Usage</h4>
      <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
        <code>pnpm flags:check</code>
      </pre>

      <h4 className="font-medium mb-2">What It Validates</h4>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-3">
          <div className="p-3 border rounded-lg">
            <h5 className="font-medium text-sm mb-1">
              Registry Completeness
            </h5>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• All flag files have registry entries</li>
              <li>• All registry entries have corresponding files</li>
              <li>• Schema definitions match registry keys</li>
            </ul>
          </div>

          <div className="p-3 border rounded-lg">
            <h5 className="font-medium text-sm mb-1">
              Client Flag Consistency
            </h5>
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
              <li>
                • All .flag.ts files export required &apos;key&apos;
              </li>
              <li>• Flag keys match filename conventions</li>
              <li>• No duplicate flag keys</li>
            </ul>
          </div>

          <div className="p-3 border rounded-lg">
            <h5 className="font-medium text-sm mb-1">
              Import Integrity
            </h5>
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
        <code className="text-primary">
          ✔ flags:check OK — 4 registered, 4 files, 3 client-exposed
        </code>
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
        Add the consistency checker to your CI pipeline to catch flag
        configuration issues early.
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

      <InfoBox type="tip" title="Pro Tips">
        <ul className="text-sm space-y-1">
          <li>• Use the wizard for speed and consistency</li>
          <li>
            • Run <code>flags:check</code> before committing changes
          </li>
          <li>
            • Set up pre-commit hooks to validate flags automatically
          </li>
          <li>• Use descriptive flag keys that explain the feature</li>
          <li>• Keep flag descriptions up to date for team clarity</li>
        </ul>
      </InfoBox>
    </section>
  );
}
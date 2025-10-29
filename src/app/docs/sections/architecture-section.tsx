export function ArchitectureSection() {
  return (
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
  );
}
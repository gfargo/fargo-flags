export function TroubleshootingSection() {
  return (
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
                Ensure flag decisions are deterministic or use
                server-only flags.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
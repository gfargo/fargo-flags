export function APIReferenceSection() {
  return (
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
  );
}
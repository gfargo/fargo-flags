import { InfoBox } from "../components/shared/info-box";

export function ResolveAllFlagsSection() {
  return (
    <section id="resolve-all-flags">
      <h2 className="text-2xl font-bold mb-4">
        5. Understanding resolveAllFlags
      </h2>

      <p className="text-muted-foreground mb-6">
        <code>resolveAllFlags</code> is the server-side engine that
        evaluates all your feature flags and returns their resolved
        values. It&apos;s the bridge between your flag definitions and
        your application.
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

      <h3 className="text-lg font-semibold mb-2">
        Step-by-Step Process
      </h3>
      <InfoBox type="info">
        <ol className="list-decimal pl-4 space-y-2 text-sm">
          <li>
            <strong>Gets all flag keys</strong> from your registry
          </li>
          <li>
            <strong>Runs in parallel</strong> - all flags resolve
            simultaneously for performance
          </li>
          <li>
            <strong>For each flag:</strong>
            <ul className="list-disc pl-4 mt-1 space-y-1">
              <li>
                Calls the <code>decide()</code> function (if defined)
                with context
              </li>
              <li>
                Falls back to <code>defaultValue</code> if no{" "}
                <code>decide()</code> function
              </li>
              <li>Validates the result against the Zod schema</li>
              <li>Returns the final resolved value</li>
            </ul>
          </li>
        </ol>
      </InfoBox>

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

      <h4 className="font-medium mb-2">
        In Next.js App Router (Primary Use Case)
      </h4>
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

      <h3 className="text-lg font-semibold mb-2">Key Benefits</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 border rounded-lg">
          <h4 className="font-medium mb-2">
            🛡️ Server-Side Resolution
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>Security: Sensitive logic stays on the server</li>
            <li>
              Performance: Complex decisions don&apos;t slow down the
              client
            </li>
            <li>
              Consistency: Same flag values across the entire request
            </li>
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
    </section>
  );
}
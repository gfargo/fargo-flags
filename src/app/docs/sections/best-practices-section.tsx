export function BestPracticesSection() {
  return (
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
  );
}
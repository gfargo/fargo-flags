import { InfoBox } from "../components/shared/info-box";

export function ComponentsSection() {
  return (
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
                <code className="text-primary">flags</code>:{" "}
                <code>ClientFlags</code> - The client-safe flag values
                from <code>pickClientFlags()</code>
              </li>
              <li>
                <code className="text-primary">children</code>:{" "}
                <code>React.ReactNode</code> - Your app components
              </li>
            </ul>
          </div>

          <h4 className="font-medium mb-2">
            Next.js App Router Integration
          </h4>
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

          <InfoBox type="info" title="Key Features">
            <ul className="list-disc pl-4 space-y-1">
              <li>
                <strong>Server-side execution:</strong> All{" "}
                <code>decide()</code> functions run on the server
              </li>
              <li>
                <strong>Context support:</strong> Pass user/workspace
                data for personalized flags
              </li>
              <li>
                <strong>Parallel resolution:</strong> All flags are
                resolved concurrently for performance
              </li>
              <li>
                <strong>Schema validation:</strong> Flag values are
                validated against Zod schemas
              </li>
            </ul>
          </InfoBox>
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
}`}
          </pre>
        </div>

        {/* Flag Component */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Flag Component</h3>
          <p className="text-muted-foreground mb-4">
            A declarative component for conditional rendering based on
            flag values. Provides a clean, readable way to show/hide
            content without cluttering your JSX with conditionals.
          </p>

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
        </div>

        {/* FlagsTestProvider */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            FlagsTestProvider
          </h3>
          <p className="text-muted-foreground mb-4">
            A specialized provider for testing and development that
            allows you to override flag values. Perfect for unit tests,
            integration tests, and Storybook stories.
          </p>

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
});`}
          </pre>
        </div>
      </div>
    </section>
  );
}
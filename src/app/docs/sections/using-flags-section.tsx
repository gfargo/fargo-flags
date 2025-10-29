export function UsingFlagsSection() {
  return (
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
  );
}
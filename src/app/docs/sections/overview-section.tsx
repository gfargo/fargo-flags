export function OverviewSection() {
  return (
    <section id="overview">
      <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
      <div className="prose max-w-none">
        <p className="text-muted-foreground mb-4">
          Fargo Flags is a <strong>streamlined toolkit</strong> built on
          top of{" "}
          <a
            href="https://flags-sdk.dev/"
            className="text-primary hover:text-primary/80"
          >
            Vercel&apos;s Flags SDK
          </a>{" "}
          that adds enhanced developer experience, CLI tooling, and
          component registry distribution. It embraces the Flags
          SDK&apos;s &quot;flags as code&quot; principles while making
          them easier to adopt and scale.
        </p>

        <h3 className="text-lg font-semibold mb-2">
          Built on Solid Foundation
        </h3>
        <p className="text-muted-foreground mb-3">
          We leverage Vercel&apos;s Flags SDK core principles:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
          <li>
            <strong>Flags as code:</strong> Declarative definitions with
            consistent call sites
          </li>
          <li>
            <strong>Server-side resolution:</strong> Secure, performant
            flag evaluation
          </li>
          <li>
            <strong>Type safety:</strong> Full TypeScript support with
            runtime validation
          </li>
          <li>
            <strong>No vendor lock-in:</strong> Your flag logic stays in
            your codebase
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">
          Enhanced Developer Experience
        </h3>
        <p className="text-muted-foreground mb-3">
          Fargo Flags adds powerful tooling on top of this foundation:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>
            <strong>Interactive CLI wizard:</strong> Guided flag
            creation without manual boilerplate
          </li>
          <li>
            <strong>Automatic registry management:</strong> No need to
            manually maintain imports
          </li>
          <li>
            <strong>Component registry distribution:</strong> Install
            via shadcn/ui-style commands
          </li>
          <li>
            <strong>Enhanced React integration:</strong> Providers,
            hooks, and conditional components
          </li>
          <li>
            <strong>Testing utilities:</strong> Easy flag overrides for
            development and QA
          </li>
          <li>
            <strong>Consistency validation:</strong> Catch configuration
            drift in CI/CD
          </li>
        </ul>
      </div>
    </section>
  );
}
import {
  Braces,
  ServerCog,
  TerminalSquare,
  Package,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";

const FEATURES = [
  {
    icon: Braces,
    title: "Typed flags-as-code",
    body: "Every flag is a Zod-validated definition with an inferred type. No string keys at call sites, no drift between config and code.",
  },
  {
    icon: ServerCog,
    title: "Server-side resolution",
    body: "Flags resolve during SSR through the Flags SDK's evaluate(), so there's no layout shift and pages stay static.",
  },
  {
    icon: TerminalSquare,
    title: "CLI wizard",
    body: "Scaffold a new flag, its schema, and registry wiring in one interactive command — managed regions keep edits conflict-free.",
  },
  {
    icon: Package,
    title: "Component registry",
    body: "Install the provider, <Flag> component, and CLI straight into your codebase with shadcn — you own the source, no black box.",
  },
  {
    icon: FlaskConical,
    title: "Testing utilities",
    body: "FlagsTestProvider lets you override any flag in tests and stories, so every variant is trivial to render and assert.",
  },
  {
    icon: ShieldCheck,
    title: "CI consistency checks",
    body: "A built-in checker verifies schemas, registry, and client exposure stay in sync — wire it into CI to catch mismatches early.",
  },
];

export function Features() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Toolkit
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything around the flag, handled
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The Flags SDK gives you the resolution engine. Fargo Flags adds the
            ergonomics: authoring, distribution, testing, and validation.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-card p-6">
              <f.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

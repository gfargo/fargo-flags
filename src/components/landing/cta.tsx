import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

const GITHUB_URL = "https://github.com/gfargo/fargo-flags";

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ship your next flag in minutes
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Add the toolkit, run the wizard, and get a typed, testable flag
            wired end to end — resolution, components, and CI checks included.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Github className="h-4 w-4" />
              Star on GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

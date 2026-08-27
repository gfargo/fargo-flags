"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const BASE = "https://flags.griffen.codes/r";

const ITEMS = [
  {
    name: "flags-complete",
    summary: "The full toolkit — core, components, and CLI in one command.",
    tag: "recommended",
  },
  {
    name: "flags-core",
    summary: "Kit, runtime, server resolution, and the flags provider.",
  },
  {
    name: "flags-flag",
    summary: "The declarative <Flag> component for conditional rendering.",
  },
  {
    name: "flags-test-provider",
    summary: "Override any flag in tests and stories.",
  },
  {
    name: "flags-cli",
    summary: "Interactive wizard and consistency checker scripts.",
  },
] as const;

function InstallRow({
  name,
  summary,
  tag,
}: {
  name: string;
  summary: string;
  tag?: string;
}) {
  const [copied, setCopied] = React.useState(false);
  const cmd = `npx shadcn@latest add ${BASE}/${name}.json`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="flex flex-col gap-3 bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-mono text-sm font-semibold text-foreground">
            {name}
          </h3>
          {tag && (
            <span className="rounded-full border border-brand/40 bg-brand/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-brand">
              {tag}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground text-pretty">
          {summary}
        </p>
      </div>
      <button
        type="button"
        onClick={copy}
        className={cn(
          "group inline-flex shrink-0 items-center gap-2 rounded-md border border-border bg-background px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
        )}
      >
        <span className="truncate">add {name}</span>
        {copied ? (
          <Check className="h-3.5 w-3.5 text-brand" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  );
}

export function ComponentsShowcase() {
  return (
    <section id="components" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Registry
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Install only what you need
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every piece ships through a shadcn-compatible registry. Pull the
            whole toolkit or a single component — the source lands in your repo,
            yours to edit.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border">
          {ITEMS.map((item) => (
            <InstallRow key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

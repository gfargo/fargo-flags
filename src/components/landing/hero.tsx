"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, Copy, Terminal } from "lucide-react";
import { CodeBlock } from "@/components/landing/code-block";

const INSTALL_CMD = "npx shadcn@latest add https://flags.griffen.codes/r/flags-complete.json";

const HERO_SNIPPET = `import { defineFlag } from "@/lib/flags/kit";

export default defineFlag({
  key: "checkout-redesign",
  schema: z.boolean(),
  defaultValue: false,
  client: { public: true },
  async decide(ctx) {
    const user = await ctx.getUser?.();
    return user?.plan === "pro";
  },
});`;

function InstallChip() {
  const [copied, setCopied] = React.useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="group flex w-full max-w-md items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-left transition-colors hover:border-foreground/20"
    >
      <Terminal className="h-4 w-4 shrink-0 text-brand" />
      <code className="flex-1 truncate font-mono text-xs text-foreground sm:text-[13px]">
        npx shadcn add flags-complete
      </code>
      <span className="text-muted-foreground transition-colors group-hover:text-foreground">
        {copied ? <Check className="h-4 w-4 text-brand" /> : <Copy className="h-4 w-4" />}
      </span>
    </button>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-70" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div className="flex flex-col items-start justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Built on Vercel&apos;s Flags SDK
          </span>

          <h1 className="mt-6 text-balance font-sans text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Feature flags,{" "}
            <span className="text-brand">typed and testable</span>.
          </h1>

          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            A developer-focused toolkit for flags-as-code: Zod-validated
            definitions, server-side resolution, a CLI wizard, and a
            shadcn-style component registry you own.
          </p>

          <div className="mt-8 w-full space-y-4">
            <InstallChip />
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
              >
                Read the docs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Try the live demo
              </Link>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 items-center">
          <CodeBlock
            code={HERO_SNIPPET}
            filename="flags/defs/checkout-redesign.flag.ts"
            className="w-full min-w-0 shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}

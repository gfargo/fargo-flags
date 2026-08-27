"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/landing/code-block";

const TABS = [
  {
    id: "define",
    label: "Define",
    filename: "flags/defs/checkout-redesign.flag.ts",
    code: `import { z } from "zod";
import { defineFlag } from "@/lib/flags/kit";

export const key = "checkout-redesign" as const;
export const schema = z.boolean();

export default defineFlag({
  key,
  schema,
  description: "New checkout flow",
  defaultValue: false,
  client: { public: true },
  async decide(ctx) {
    const user = await ctx.getUser?.();
    return user?.plan === "pro";
  },
});`,
  },
  {
    id: "resolve",
    label: "Resolve",
    filename: "app/layout.tsx",
    code: `import { resolveAllFlags } from "@/lib/flags/server";
import { pickClientFlags } from "@/lib/flags/runtime";
import { FlagsProvider } from "@/components/flags/flags-provider";

export default async function RootLayout({ children }) {
  const flags = await resolveAllFlags();
  const clientFlags = pickClientFlags(flags);

  return (
    <FlagsProvider flags={clientFlags}>
      {children}
    </FlagsProvider>
  );
}`,
  },
  {
    id: "render",
    label: "Render",
    filename: "components/toolbar.tsx",
    code: `import { Flag } from "@/components/flags/flag";

export function Toolbar() {
  return (
    <div className="toolbar">
      <ZoomButton />
      <Flag when="checkout-redesign">
        <NewCheckoutButton />
      </Flag>
    </div>
  );
}`,
  },
  {
    id: "test",
    label: "Test",
    filename: "toolbar.test.tsx",
    code: `import { render, screen } from "@testing-library/react";
import { FlagsTestProvider } from "@/components/flags/flags-test-provider";

it("shows the new checkout when enabled", () => {
  render(
    <FlagsTestProvider overrides={{ "checkout-redesign": true }}>
      <Toolbar />
    </FlagsTestProvider>
  );
  expect(screen.getByText("New checkout")).toBeVisible();
});`,
  },
] as const;

export function Examples() {
  const [active, setActive] = React.useState<(typeof TABS)[number]["id"]>("define");
  const current = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <section id="examples" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Workflow
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From definition to test in four steps
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            One consistent API across the whole lifecycle of a flag.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap gap-1 border-b border-border">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                className={cn(
                  "relative -mb-px rounded-t-md px-4 py-2 font-mono text-sm transition-colors",
                  active === t.id
                    ? "border-x border-t border-border bg-card text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
          <CodeBlock
            key={current.id}
            code={current.code}
            filename={current.filename}
            className="rounded-tl-none"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import { Bot, Download, FileText, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { FlagsTestProvider, type PartialClientFlags } from "@/components/flags/flags-test-provider";
import { Flag } from "@/components/flags/flag";
import { useFlag } from "@/components/flags/flags-provider";

type Overrides = PartialClientFlags;

const PAGINATION_OPTIONS = ["top", "bottom", "both"] as const;
const THEME_OPTIONS = ["light", "dark", "auto"] as const;

/* ---------------------------------- controls --------------------------------- */

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors",
        checked ? "border-brand bg-brand" : "border-border bg-muted"
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-background transition-transform",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
}

function Segmented<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: readonly T[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="inline-flex rounded-md border border-border bg-muted p-0.5">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            "rounded px-2.5 py-1 font-mono text-xs capitalize transition-colors",
            value === opt
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

/* ---------------------------------- preview --------------------------------- */

function Pagination() {
  return (
    <div className="flex items-center justify-center gap-1 py-1.5">
      <span className="rounded px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
        Prev
      </span>
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={cn(
            "rounded px-1.5 py-0.5 font-mono text-[11px]",
            n === 1
              ? "bg-brand text-brand-foreground"
              : "text-muted-foreground"
          )}
        >
          {n}
        </span>
      ))}
      <span className="rounded px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
        Next
      </span>
    </div>
  );
}

function DocumentPreview() {
  const paginationLocation = useFlag("pagination-ui-location");
  const showTop = paginationLocation === "top" || paginationLocation === "both";
  const showBottom =
    paginationLocation === "bottom" || paginationLocation === "both";

  return (
    <div className="flex h-full flex-col rounded-lg border border-border bg-background">
      {/* toolbar */}
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <div className="flex items-center gap-2 text-muted-foreground">
          <FileText className="h-4 w-4" />
          <span className="font-mono text-xs">report.pdf</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded text-muted-foreground">
            <ZoomIn className="h-3.5 w-3.5" />
          </span>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded text-muted-foreground">
            <Download className="h-3.5 w-3.5" />
          </span>
          <Flag when="enable-ai-assistant-in-pdf-toolbar">
            <span className="inline-flex items-center gap-1 rounded bg-brand px-2 py-1 text-[11px] font-medium text-brand-foreground">
              <Bot className="h-3.5 w-3.5" />
              AI
            </span>
          </Flag>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-2 p-3">
        {showTop && <Pagination />}
        <div className="flex flex-1 flex-col gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md border border-border p-2.5">
              <div className="h-2 w-2/3 rounded bg-muted" />
              <div className="mt-1.5 h-2 w-full rounded bg-muted" />
            </div>
          ))}
        </div>
        {showBottom && <Pagination />}
      </div>
    </div>
  );
}

/* ---------------------------------- console --------------------------------- */

export function FlagConsole() {
  const [overrides, setOverrides] = React.useState<Overrides>({
    "enable-ai-assistant-in-pdf-toolbar": false,
    "pagination-ui-location": "bottom",
    "theme-mode": "light",
  });

  const aiEnabled = Boolean(overrides["enable-ai-assistant-in-pdf-toolbar"]);
  const pagination = (overrides["pagination-ui-location"] ?? "bottom") as
    (typeof PAGINATION_OPTIONS)[number];
  const themeMode = (overrides["theme-mode"] ?? "light") as
    (typeof THEME_OPTIONS)[number];

  const set = <K extends keyof Overrides>(key: K, value: Overrides[K]) =>
    setOverrides((prev) => ({ ...prev, [key]: value }));

  const resolved = JSON.stringify(overrides, null, 2);

  return (
    <section id="demo" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Live demo
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Flip a flag, watch it resolve
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            These are real flags from this project, resolved through{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
              FlagsTestProvider
            </code>
            . Toggle the controls and the preview re-renders exactly as it
            would in production.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          {/* controls + readout */}
          <div className="flex min-w-0 flex-col gap-4 rounded-xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-border pb-4">
              <div className="min-w-0">
                <p className="font-mono text-sm text-foreground">
                  enable-ai-assistant
                </p>
                <p className="text-xs text-muted-foreground">
                  boolean · shows the AI action in the toolbar
                </p>
              </div>
              <Toggle
                checked={aiEnabled}
                onChange={(v) => set("enable-ai-assistant-in-pdf-toolbar", v)}
                label="Toggle AI assistant"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-border pb-4">
              <div className="min-w-0">
                <p className="font-mono text-sm text-foreground">
                  pagination-ui-location
                </p>
                <p className="text-xs text-muted-foreground">
                  enum · where paging controls render
                </p>
              </div>
              <Segmented
                value={pagination}
                options={PAGINATION_OPTIONS}
                onChange={(v) => set("pagination-ui-location", v)}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
              <div className="min-w-0">
                <p className="font-mono text-sm text-foreground">theme-mode</p>
                <p className="text-xs text-muted-foreground">
                  enum · repaints the preview surface
                </p>
              </div>
              <Segmented
                value={themeMode}
                options={THEME_OPTIONS}
                onChange={(v) => set("theme-mode", v)}
              />
            </div>

            <div className="mt-1 overflow-hidden rounded-lg border border-border bg-background">
              <div className="border-b border-border px-3 py-1.5 font-mono text-[11px] text-muted-foreground">
                resolved flags
              </div>
              <pre className="overflow-x-auto p-3 font-mono text-xs leading-relaxed text-foreground">
                <code>{resolved}</code>
              </pre>
            </div>
          </div>

          {/* preview */}
          <div
            className={cn(
              "min-h-[360px] min-w-0 rounded-xl border border-border bg-muted/40 p-4",
              themeMode === "dark" && "dark"
            )}
          >
            <FlagsTestProvider overrides={overrides}>
              <DocumentPreview />
            </FlagsTestProvider>
          </div>
        </div>
      </div>
    </section>
  );
}

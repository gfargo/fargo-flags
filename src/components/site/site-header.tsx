"use client";

import * as React from "react";
import Link from "next/link";
import { Check, Copy, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Wordmark, GithubMark } from "@/components/site/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/#components" },
  { label: "Examples", href: "/#examples" },
];

const GITHUB_URL = "https://github.com/gfargo/fargo-flags";
const INSTALL_CMD =
  "npx shadcn@latest add https://flags.griffen.codes/r/flags-complete";

function InstallChip({ className }: { className?: string }) {
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
      aria-label="Copy install command"
      className={cn(
        "group inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
        className
      )}
    >
      <span className="text-brand">$</span>
      <span>shadcn add flags-complete</span>
      {copied ? (
        <Check className="h-3.5 w-3.5 text-brand" />
      ) : (
        <Copy className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
      )}
    </button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="shrink-0" aria-label="Fargo Flags home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <InstallChip className="hidden sm:inline-flex" />
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub repository"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <GithubMark className="h-4 w-4" />
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-border md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <InstallChip className="mt-1 justify-start" />
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/site/logo";
import { ThemeToggle } from "@/components/theme-toggle";

interface DocsSidebarProps {
  sections: Array<{ id: string; title: string }>;
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export function DocsSidebar({ sections, activeSection, onSectionClick }: DocsSidebarProps) {
  return (
    <aside className="hidden lg:block w-64 sticky top-0 h-screen overflow-y-auto border-r border-border bg-sidebar">
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" aria-label="Fargo Flags home">
            <Wordmark />
          </Link>
          <ThemeToggle />
        </div>

        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </Link>

        <h2 className="mb-3 mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Documentation
        </h2>

        <nav className="space-y-0.5">
          {sections.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => onSectionClick(id)}
              className={cn(
                "w-full rounded-md px-3 py-2 text-left text-sm transition-colors",
                activeSection === id
                  ? "bg-accent font-medium text-foreground"
                  : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "mr-2 inline-block h-1.5 w-1.5 rounded-full align-middle transition-colors",
                  activeSection === id ? "bg-brand" : "bg-transparent"
                )}
              />
              {title}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}

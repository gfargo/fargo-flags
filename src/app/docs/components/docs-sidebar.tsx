"use client";

import Link from "next/link";

interface DocsSidebarProps {
  sections: Array<{ id: string; title: string }>;
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export function DocsSidebar({ sections, activeSection, onSectionClick }: DocsSidebarProps) {
  return (
    <aside className="hidden lg:block w-64 sticky top-0 h-screen overflow-y-auto border-r border-border bg-card/50 backdrop-blur-sm">
      <div className="p-6">
        <Link
          href="/"
          className="text-primary hover:text-primary/80 text-sm mb-6 inline-block"
        >
          ← Back to Demo
        </Link>

        <h2 className="text-lg font-semibold mb-4 text-foreground">
          Documentation
        </h2>

        <nav className="space-y-1">
          {sections.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => onSectionClick(id)}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === id
                  ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {title}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );

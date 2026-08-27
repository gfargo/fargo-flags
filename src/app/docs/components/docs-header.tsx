import Link from "next/link";

interface DocsHeaderProps {
  sections: Array<{ id: string; title: string }>;
  onSectionClick: (id: string) => void;
}

export function DocsHeader({ sections, onSectionClick }: DocsHeaderProps) {
  return (
    <>
      {/* Mobile Header */}
      <div className="mb-8 lg:hidden">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground text-sm mb-4 inline-block"
        >
          ← Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          Fargo Flags Documentation
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">
          Complete guide to the feature flags toolkit built on Vercel&apos;s
          Flags SDK.
        </p>
      </div>

      {/* Mobile Table of Contents */}
      <nav className="lg:hidden border rounded-lg p-6 mb-8 bg-muted">
        <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
        <div className="grid md:grid-cols-2 gap-2 text-sm">
          {sections.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => onSectionClick(id)}
              className="text-left text-primary hover:text-primary/80"
            >
              {title}
            </button>
          ))}
        </div>
      </nav>

      {/* Desktop Header */}
      <div className="hidden lg:block mb-8">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          Fargo Flags Documentation
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">
          Complete guide to the feature flags toolkit built on Vercel&apos;s
          Flags SDK.
        </p>
      </div>
    </>
  );
}

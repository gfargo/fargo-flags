import Link from "next/link";

export function DocsFooter() {
  return (
    <div className="mt-16 pt-8 border-t text-center">
      <p className="text-muted-foreground">
        <Link
          href="/"
          className="text-primary hover:text-primary/80"
        >
          ← Back to Demo
        </Link>
      </p>
    </div>
  );
}
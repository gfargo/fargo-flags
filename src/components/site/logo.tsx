import { cn } from "@/lib/utils";

/**
 * Fargo Flags mark — a minimal geometric flag/pennant built from a mast
 * and two offset triangles. Uses currentColor so it inherits text color.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path d="M5 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M5 3.5h11l-3 3.5 3 3.5H5z"
        fill="currentColor"
        className="text-brand"
      />
      <path
        d="M5 12h8l-2.2 2.6L13 17H5z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  );
}

export function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span className="text-brand">
        <Logo />
      </span>
      <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
        fargo<span className="text-muted-foreground">/</span>flags
      </span>
    </span>
  );
}

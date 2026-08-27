import Link from "next/link";
import { Wordmark, GithubMark } from "@/components/site/logo";

const GITHUB_URL = "https://github.com/gfargo/fargo-flags";
const SDK_URL = "https://flags-sdk.dev";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <Link href="/" aria-label="Fargo Flags home">
            <Wordmark />
          </Link>
          <p className="max-w-sm text-sm text-muted-foreground text-pretty">
            A typed feature-flags toolkit built on{" "}
            <Link
              href={SDK_URL}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              Vercel&apos;s Flags SDK
            </Link>
            .
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
          <Link href="/docs" className="transition-colors hover:text-foreground">
            Documentation
          </Link>
          <Link href="/#components" className="transition-colors hover:text-foreground">
            Components
          </Link>
          <Link
            href={SDK_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Flags SDK
          </Link>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <GithubMark className="h-3.5 w-3.5" />
            GitHub
          </Link>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <p className="font-mono text-xs text-muted-foreground">
            {"// MIT licensed — built by gfargo"}
          </p>
        </div>
      </div>
    </footer>
  );
}

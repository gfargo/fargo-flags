import { Metadata } from "next";
import DocsClient from './docs-client';

export const metadata: Metadata = {
  title: "Documentation - Fargo Flags | Complete Guide to Enhanced Feature Flags",
  description: "Complete documentation for Fargo Flags - enhanced feature flags toolkit built on Vercel's Flags SDK. Learn installation, usage, CLI tools, React components, and best practices.",
  keywords: [
    "fargo flags documentation",
    "feature flags guide",
    "vercel flags sdk tutorial",
    "typescript feature flags",
    "react feature flags",
    "nextjs feature flags",
    "cli tools documentation",
    "flags as code guide"
  ],
  authors: [{ name: "gfargo" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://flags.griffen.codes/docs"
  }
};

export default function DocsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Fargo Flags Documentation - Complete Guide",
    "description": "Complete documentation for Fargo Flags - enhanced feature flags toolkit built on Vercel's Flags SDK. Learn installation, usage, CLI tools, React components, and best practices.",
    "url": "https://flags.griffen.codes/docs",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": "gfargo"
    },
    "publisher": {
      "@type": "Person",
      "name": "gfargo"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://flags.griffen.codes/docs"
    },
    "articleSection": "Documentation",
    "keywords": [
      "fargo flags documentation",
      "feature flags guide",
      "vercel flags sdk tutorial",
      "typescript feature flags",
      "react feature flags",
      "nextjs feature flags",
      "cli tools documentation"
    ],
    "about": {
      "@type": "SoftwareApplication",
      "name": "Fargo Flags"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DocsClient />
    </>
  );
}

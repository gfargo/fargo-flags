import HomeClient from "./home-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Fargo Flags - Typed Feature Flags Toolkit Built on Vercel's Flags SDK",
  description:
    "A developer-focused feature flags toolkit: typed flags-as-code, server-side resolution, a CLI wizard, and a shadcn-style component registry. Built on Vercel's Flags SDK.",
  keywords: [
    "feature flags",
    "feature toggles",
    "vercel flags sdk",
    "typescript",
    "react",
    "nextjs",
    "cli tools",
    "developer tools",
    "flags as code",
    "server-side rendering",
  ],
  authors: [{ name: "gfargo" }],
  creator: "griffen.codes",
  publisher: "griffen.codes",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://flags.griffen.codes",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Fargo Flags",
    description:
      "A developer-focused feature flags toolkit built on Vercel's Flags SDK with typed flags-as-code, a CLI wizard, and a component registry.",
    url: "https://flags.griffen.codes",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    programmingLanguage: ["TypeScript", "JavaScript"],
    author: {
      "@type": "Person",
      name: "gfargo",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Interactive CLI wizard for flag creation",
      "Automatic registry management",
      "Component registry distribution",
      "Enhanced React components",
      "Testing utilities",
      "Consistency validation for CI/CD",
    ],
    screenshot: "https://flags.griffen.codes/opengraph-image.jpg",
    softwareVersion: "1.0.0",
    releaseNotes: "Initial release with full feature flag toolkit",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}

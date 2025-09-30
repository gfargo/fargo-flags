import HomeClient from "./home-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Fargo Flags - Enhanced Feature Flags Toolkit Built on Vercel's Flags SDK",
  description:
    "Streamlined feature flags toolkit with CLI tools, component registry, and enhanced developer experience. Built on Vercel's Flags SDK with TypeScript support, server-side resolution, and React components.",
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
      "Enhanced feature flags toolkit built on Vercel's Flags SDK with CLI tools, component registry, and streamlined developer experience.",
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

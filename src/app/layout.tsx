import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { resolveAllFlags, pickClientFlags } from "@/lib/flags/runtime";
import { FlagsProvider } from "@/components/flags/flags-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flags.griffen.codes'),
  title: {
    default: "Fargo Flags - Enhanced Feature Flags Toolkit",
    template: "%s | Fargo Flags"
  },
  description: "Enhanced feature flags toolkit built on Vercel's Flags SDK with CLI tools, component registry, and streamlined developer experience.",
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
    "server-side rendering"
  ],
  authors: [{ name: "gfargo" }],
  creator: "griffen.codes",
  publisher: "griffen.codes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serverFlags = await resolveAllFlags({
    // Optional loaders you define in kit.ts contracts
    // getUser: async () => ...
    // getWorkspace: async () => ...
  });
  const clientFlags = pickClientFlags(serverFlags);

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://flags.griffen.codes" />
        <meta name="theme-color" content="#511281" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FlagsProvider flags={clientFlags}>
          {children}
        </FlagsProvider>
        <Analytics />
      </body>
    </html>
  );
}

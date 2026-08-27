import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Hero } from "@/components/landing/hero";
import { FlagConsole } from "@/components/landing/flag-console";
import { Features } from "@/components/landing/features";
import { Examples } from "@/components/landing/examples";
import { ComponentsShowcase } from "@/components/landing/components-showcase";
import { CTA } from "@/components/landing/cta";

export default function HomeClient() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FlagConsole />
        <Features />
        <Examples />
        <ComponentsShowcase />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { DocsSidebar } from "./components/docs-sidebar";
import { DocsHeader } from "./components/docs-header";

import {
  QuickStartSection,
  DefiningFlagsSection,
  ResolveAllFlagsSection,
  UsingFlagsSection,
  ComponentsSection,
  TestingSection,
  CLIToolsSection,
  ArchitectureSection,
  BestPracticesSection,
  TroubleshootingSection,
  APIReferenceSection,
  DocsFooter,
  OverviewSection,
  InstallationSection,
} from "./sections";

const sections = [
  { id: "overview", title: "1. Overview" },
  { id: "installation", title: "2. Installation" },
  { id: "quick-start", title: "3. Quick Start" },
  { id: "defining-flags", title: "4. Defining Flags" },
  { id: "resolve-all-flags", title: "5. resolveAllFlags" },
  { id: "using-flags", title: "6. Using Flags" },
  { id: "components", title: "7. Components" },
  { id: "testing", title: "8. Testing" },
  { id: "cli-tools", title: "9. CLI Tools" },
  { id: "architecture", title: "10. Architecture" },
  { id: "best-practices", title: "11. Best Practices" },
  { id: "troubleshooting", title: "12. Troubleshooting" },
  { id: "api-reference", title: "13. API Reference" },
];

export default function DocsClient() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="flex">
        <DocsSidebar
          sections={sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />

        <main className="flex-1 p-8 pb-20 gap-16 sm:p-20 max-w-4xl mx-auto lg:mx-0">
          <DocsHeader
            sections={sections}
            onSectionClick={scrollToSection}
          />

          <div className="space-y-12">
            <OverviewSection />
            <InstallationSection />
            <QuickStartSection />
            <DefiningFlagsSection />
            <ResolveAllFlagsSection />
            <UsingFlagsSection />
            <ComponentsSection />
            <TestingSection />
            <CLIToolsSection />
            <ArchitectureSection />
            <BestPracticesSection />
            <TroubleshootingSection />
            <APIReferenceSection />
          </div>

          <DocsFooter />
        </main>
      </div>
    </div>
  );
}

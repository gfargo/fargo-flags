"use client";
import { useState } from "react";
import { useFlag } from "@/components/flags/flags-provider";
import { Flag } from "@/components/flags/flag";
import { FlagsTestProvider } from "@/components/flags/flags-test-provider";

type FlagOverrides = {
  "enable-ai-assistant-in-pdf-toolbar": boolean;
  "pagination-ui-location": "top" | "bottom" | "both";
  "theme-mode": "light" | "dark" | "auto";
};

function InteractiveDemo({ 
  setOverrides 
}: { 
  setOverrides: (fn: (prev: FlagOverrides) => FlagOverrides) => void; 
}) {
  const showAssistant = useFlag("enable-ai-assistant-in-pdf-toolbar");
  const paginationLocation = useFlag("pagination-ui-location");
  const themeMode = useFlag("theme-mode");

  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Fargo Flags
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
          A type-safe feature flags system with shadcn-style component registry. 
          Build, test, and deploy features with confidence.
        </p>
        <div className="flex gap-4 justify-center mb-6">
          <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            ✓ Type Safe
          </div>
          <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            ✓ Zero Build Step
          </div>
          <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            ✓ SSR Ready
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <a 
            href="/docs" 
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            📚 View Documentation
          </a>
          <a 
            href="https://github.com/your-repo/fargo-flags" 
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            ⭐ Star on GitHub
          </a>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <section className="border rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">🚀 Interactive Feature Flags Demo</h2>
        <p className="text-muted-foreground mb-6">
          Try changing the flag values below to see how they instantly affect the UI components.
        </p>
        
        <div className="space-y-8">
          {/* AI Assistant Demo */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-lg">🤖 AI Assistant Feature</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  showAssistant 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {showAssistant ? 'ENABLED' : 'DISABLED'}
                </span>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-3">
                  Flag: <code className="bg-background px-2 py-1 rounded">enable-ai-assistant-in-pdf-toolbar</code>
                </p>
                
                <div className="border rounded-lg p-4 bg-background">
                  <div className="flex items-center justify-between p-3 border-b mb-3">
                    <span className="font-medium">PDF Document Viewer</span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">
                        📄 Save
                      </button>
                      <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">
                        🖨️ Print
                      </button>
                      <Flag when="enable-ai-assistant-in-pdf-toolbar">
                        <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm animate-pulse">
                          🤖 AI Assistant
                        </button>
                      </Flag>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <Flag when="enable-ai-assistant-in-pdf-toolbar">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                        ✨ AI Assistant is ready to help analyze this document, extract key information, and answer questions.
                      </div>
                    </Flag>
                    <Flag when="enable-ai-assistant-in-pdf-toolbar" not={true}>
                      <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                        Standard PDF viewer without AI-powered features.
                      </div>
                    </Flag>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">🎛️ Try It Yourself</h4>
              <div className="p-4 border rounded-lg bg-blue-50">
                <label className="block text-sm font-medium mb-2">
                  Toggle AI Assistant:
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setOverrides(prev => ({
                      ...prev,
                      "enable-ai-assistant-in-pdf-toolbar": false
                    }))}
                    className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                      !showAssistant 
                        ? 'bg-gray-600 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Disabled
                  </button>
                  <button
                    onClick={() => setOverrides(prev => ({
                      ...prev,
                      "enable-ai-assistant-in-pdf-toolbar": true
                    }))}
                    className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                      showAssistant 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-200 text-blue-700 hover:bg-blue-300'
                    }`}
                  >
                    Enabled
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Watch the PDF toolbar update instantly when you toggle this flag!
                </p>
              </div>
            </div>
          </div>

          {/* Pagination Demo */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-lg">📄 Pagination Layout</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {paginationLocation.toUpperCase()}
                </span>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-3">
                  Flag: <code className="bg-background px-2 py-1 rounded">pagination-ui-location</code>
                </p>
                
                <div className="border rounded-lg p-4 bg-background space-y-3">
                  <Flag when="pagination-ui-location" is="top">
                    <div className="p-3 bg-green-50 border border-green-200 rounded text-center">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <button className="px-2 py-1 bg-white border rounded">←</button>
                        <span className="px-2 py-1 bg-blue-500 text-white rounded">1</span>
                        <span className="px-2 py-1 bg-white border rounded">2</span>
                        <span className="px-2 py-1 bg-white border rounded">3</span>
                        <button className="px-2 py-1 bg-white border rounded">→</button>
                      </div>
                    </div>
                  </Flag>
                  
                  <Flag when="pagination-ui-location" is="both">
                    <div className="p-3 bg-green-50 border border-green-200 rounded text-center">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <button className="px-2 py-1 bg-white border rounded">←</button>
                        <span className="px-2 py-1 bg-blue-500 text-white rounded">1</span>
                        <span className="px-2 py-1 bg-white border rounded">2</span>
                        <span className="px-2 py-1 bg-white border rounded">3</span>
                        <button className="px-2 py-1 bg-white border rounded">→</button>
                      </div>
                    </div>
                  </Flag>

                  <div className="p-6 border-2 border-dashed border-gray-300 rounded text-center space-y-2">
                    <div className="p-2 bg-gray-50 rounded text-sm">📋 Search Result 1</div>
                    <div className="p-2 bg-gray-50 rounded text-sm">📋 Search Result 2</div>
                    <div className="p-2 bg-gray-50 rounded text-sm">📋 Search Result 3</div>
                    <div className="text-xs text-muted-foreground">... and 47 more results</div>
                  </div>

                  <Flag when="pagination-ui-location" is="bottom">
                    <div className="p-3 bg-green-50 border border-green-200 rounded text-center">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <button className="px-2 py-1 bg-white border rounded">←</button>
                        <span className="px-2 py-1 bg-blue-500 text-white rounded">1</span>
                        <span className="px-2 py-1 bg-white border rounded">2</span>
                        <span className="px-2 py-1 bg-white border rounded">3</span>
                        <button className="px-2 py-1 bg-white border rounded">→</button>
                      </div>
                    </div>
                  </Flag>
                  
                  <Flag when="pagination-ui-location" is="both">
                    <div className="p-3 bg-green-50 border border-green-200 rounded text-center">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <button className="px-2 py-1 bg-white border rounded">←</button>
                        <span className="px-2 py-1 bg-blue-500 text-white rounded">1</span>
                        <span className="px-2 py-1 bg-white border rounded">2</span>
                        <span className="px-2 py-1 bg-white border rounded">3</span>
                        <button className="px-2 py-1 bg-white border rounded">→</button>
                      </div>
                    </div>
                  </Flag>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">🎛️ Try It Yourself</h4>
              <div className="p-4 border rounded-lg bg-blue-50">
                <label className="block text-sm font-medium mb-2">
                  Change Pagination Location:
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setOverrides(prev => ({
                      ...prev,
                      "pagination-ui-location": "top"
                    }))}
                    className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors ${
                      paginationLocation === "top"
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-200 text-blue-700 hover:bg-blue-300'
                    }`}
                  >
                    Top Only
                  </button>
                  <button
                    onClick={() => setOverrides(prev => ({
                      ...prev,
                      "pagination-ui-location": "bottom"
                    }))}
                    className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors ${
                      paginationLocation === "bottom"
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-200 text-blue-700 hover:bg-blue-300'
                    }`}
                  >
                    Bottom Only
                  </button>
                  <button
                    onClick={() => setOverrides(prev => ({
                      ...prev,
                      "pagination-ui-location": "both"
                    }))}
                    className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors ${
                      paginationLocation === "both"
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-200 text-blue-700 hover:bg-blue-300'
                    }`}
                  >
                    Top & Bottom
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  See how the pagination controls move around the content area!
                </p>
              </div>
            </div>
          </div>

          {/* Theme Mode Demo */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-lg">🎨 Theme Mode</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {themeMode.toUpperCase()}
                </span>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-3">
                  Flag: <code className="bg-background px-2 py-1 rounded">theme-mode</code>
                </p>
                
                <div className={`border rounded-lg p-4 transition-colors ${
                  themeMode === 'dark' ? 'bg-gray-900 text-white border-gray-700' : 
                  themeMode === 'light' ? 'bg-white text-gray-900 border-gray-200' :
                  'bg-gradient-to-br from-white to-gray-100 text-gray-900 border-gray-300'
                }`}>
                  <div className="flex items-center justify-between p-3 border-b mb-3 border-current border-opacity-20">
                    <span className="font-medium">Application Header</span>
                    <div className="flex gap-2">
                      <Flag when="theme-mode" is="dark">
                        <span className="text-xs bg-gray-800 px-2 py-1 rounded">🌙 Dark</span>
                      </Flag>
                      <Flag when="theme-mode" is="light">
                        <span className="text-xs bg-gray-100 text-gray-900 px-2 py-1 rounded">☀️ Light</span>
                      </Flag>
                      <Flag when="theme-mode" is="auto">
                        <span className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900 px-2 py-1 rounded">🔄 Auto</span>
                      </Flag>
                    </div>
                  </div>
                  <div className="text-sm opacity-80">
                    <Flag when="theme-mode" is="dark">
                      <div className="p-3 bg-gray-800 border border-gray-700 rounded">
                        🌙 Dark mode provides a sleek, modern look that&apos;s easier on the eyes in low-light environments.
                      </div>
                    </Flag>
                    <Flag when="theme-mode" is="light">
                      <div className="p-3 bg-gray-50 border border-gray-200 rounded text-gray-900">
                        ☀️ Light mode offers a clean, bright interface perfect for daytime use and maximum readability.
                      </div>
                    </Flag>
                    <Flag when="theme-mode" is="auto">
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded text-gray-900">
                        🔄 Auto mode automatically switches between light and dark themes based on your system preferences.
                      </div>
                    </Flag>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">🎛️ Try It Yourself</h4>
              <div className="p-4 border rounded-lg bg-purple-50">
                <label className="block text-sm font-medium mb-2">
                  Change Theme Mode:
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setOverrides(prev => ({
                      ...prev,
                      "theme-mode": "light"
                    }))}
                    className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors ${
                      themeMode === "light"
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                    }`}
                  >
                    ☀️ Light Mode
                  </button>
                  <button
                    onClick={() => setOverrides(prev => ({
                      ...prev,
                      "theme-mode": "dark"
                    }))}
                    className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors ${
                      themeMode === "dark"
                        ? 'bg-gray-800 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    🌙 Dark Mode
                  </button>
                  <button
                    onClick={() => setOverrides(prev => ({
                      ...prev,
                      "theme-mode": "auto"
                    }))}
                    className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors ${
                      themeMode === "auto"
                        ? 'bg-purple-600 text-white' 
                        : 'bg-purple-200 text-purple-700 hover:bg-purple-300'
                    }`}
                  >
                    🔄 Auto Mode
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Watch the theme change instantly across the entire interface!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Library Demo */}
      <section className="border rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">🧩 Component Library</h2>
        <p className="text-muted-foreground mb-6">
          Fargo Flags comes with several React components to make working with feature flags seamless.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* useFlag Hook Demo */}
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">🪝 useFlag Hook</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Get flag values directly in your components with full type safety.
            </p>
            <div className="bg-muted p-3 rounded text-sm">
              <div className="mb-2 font-mono text-xs">
                const showAssistant = useFlag(&quot;enable-ai-assistant-in-pdf-toolbar&quot;);
              </div>
              <div className="text-muted-foreground">
                Current value: <span className="font-medium text-foreground">{String(showAssistant)}</span>
              </div>
            </div>
          </div>

          {/* Flag Component Demo */}
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">🏷️ &lt;Flag&gt; Component</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Conditionally render content based on flag values.
            </p>
            <div className="bg-muted p-3 rounded text-sm space-y-2">
              <div className="font-mono text-xs">
                &lt;Flag when=&quot;theme-mode&quot; is=&quot;dark&quot;&gt;
              </div>
              <div className="pl-4">
                <Flag when="theme-mode" is="dark">
                  <span className="text-blue-600">🌙 This shows in dark mode!</span>
                </Flag>
                <Flag when="theme-mode" not="dark">
                  <span className="text-gray-500">Hidden in dark mode</span>
                </Flag>
              </div>
              <div className="font-mono text-xs">
                &lt;/Flag&gt;
              </div>
            </div>
          </div>

          {/* FlagsProvider Demo */}
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">🔄 FlagsProvider</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Integrates with Next.js App Router for SSR-first flag resolution.
            </p>
            <div className="bg-muted p-3 rounded text-sm space-y-2">
              <div className="font-mono text-xs">
                {/* app/layout.tsx */}
              </div>
              <div className="font-mono text-xs">
                const serverFlags = await resolveAllFlags();
              </div>
              <div className="font-mono text-xs">
                const clientFlags = pickClientFlags(serverFlags);
              </div>
              <div className="font-mono text-xs mt-2">
                &lt;FlagsProvider flags={`{clientFlags}`}&gt;
              </div>
              <div className="pl-4 text-muted-foreground text-xs">
                {`{children}`}
              </div>
              <div className="font-mono text-xs">
                &lt;/FlagsProvider&gt;
              </div>
            </div>
          </div>

          {/* FlagsTestProvider Demo */}
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">🧪 FlagsTestProvider</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Override flag values for testing and development.
            </p>
            <div className="bg-muted p-3 rounded text-sm">
              <div className="font-mono text-xs mb-2">
                &lt;FlagsTestProvider overrides={`{{ "my-flag": true }}`}&gt;
              </div>
              <div className="pl-4 text-muted-foreground">
                Test components...
              </div>
              <div className="font-mono text-xs">
                &lt;/FlagsTestProvider&gt;
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-medium mb-2">💡 Pro Tip</h4>
          <p className="text-sm text-muted-foreground">
            All components are fully typed! Your IDE will provide autocomplete for flag names and values, 
            catching typos at compile time instead of runtime.
          </p>
        </div>
      </section>

      {/* CLI Tools Showcase */}
      <section className="border rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Developer Tools</h2>
        <p className="text-muted-foreground mb-6">
          Fargo Flags includes powerful CLI tools distributed via the shadcn registry to streamline your development workflow.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3 flex items-center gap-2">
              <span className="text-2xl">🧙‍♂️</span>
              Interactive Flag Wizard
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Create new feature flags with guided prompts, automatic TypeScript generation, and registry updates.
            </p>
            <div className="bg-muted p-3 rounded text-sm mb-3">
              <div className="font-mono text-xs mb-2">$ pnpm flags:new</div>
              <div className="text-muted-foreground text-xs space-y-1">
                <div>✔ Flag key: enable-premium-features</div>
                <div>✔ Value type: boolean</div>
                <div>✔ Expose to client: yes</div>
                <div>✔ Default value: false</div>
              </div>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Auto-generates files</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">Updates registry</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded">Type-safe</span>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3 flex items-center gap-2">
              <span className="text-2xl">🔍</span>
              Consistency Checker
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Validate flag definitions and registry consistency. Perfect for CI/CD pipelines.
            </p>
            <div className="bg-muted p-3 rounded text-sm mb-3">
              <div className="font-mono text-xs mb-2">$ pnpm flags:check</div>
              <div className="text-green-600 text-xs">
                ✔ flags:check OK — 4 registered, 4 files, 3 client-exposed
              </div>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded">CI/CD ready</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">Catches drift</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded">Zero config</span>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-medium mb-2">📦 Easy Installation</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium mb-1">Install via shadcn registry:</p>
              <code className="text-xs bg-white px-2 py-1 rounded border">npx shadcn@latest add https://fargo-flags.com/r/flags-cli</code>
            </div>
            <div>
              <p className="font-medium mb-1">Add to package.json:</p>
              <code className="text-xs bg-white px-2 py-1 rounded border">&quot;flags:new&quot;: &quot;tsx scripts/create-flag.ts&quot;</code>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="border rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">✨ Key Features</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">🎯 One File Per Flag</h3>
            <p className="text-sm text-muted-foreground">
              Each feature flag lives in its own file with schema, defaults, and decision logic.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">🔒 Type Safety</h3>
            <p className="text-sm text-muted-foreground">
              Full TypeScript support with Zod schemas for runtime validation.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">🚀 No Build Step</h3>
            <p className="text-sm text-muted-foreground">
              Static imports with checked-in aggregator. No codegen required.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">🌐 SSR First</h3>
            <p className="text-sm text-muted-foreground">
              Resolve flags on the server, hydrate client-safe subset.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">🔧 Developer Tools</h3>
            <p className="text-sm text-muted-foreground">
              Wizard for creating flags, consistency checker for CI.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">🧪 Testing Ready</h3>
            <p className="text-sm text-muted-foreground">
              Test provider for overriding flags in tests and Storybook.
            </p>
          </div>
        </div>
      </section>

      {/* resolveAllFlags Deep Dive */}
      <section className="border rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">⚡ How resolveAllFlags Works</h2>
        <p className="text-muted-foreground mb-6">
          The server-side engine that evaluates all your feature flags and returns their resolved values.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-3">🔄 The Resolution Process</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">1</span>
                <span>Gets all flag keys from your registry</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">2</span>
                <span>Runs all flags in parallel for performance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">3</span>
                <span>Calls each flag&apos;s <code>decide()</code> function with context</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">4</span>
                <span>Falls back to <code>defaultValue</code> if no decide function</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">5</span>
                <span>Validates results against Zod schemas</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">🎯 Usage Patterns</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <h4 className="font-medium text-sm mb-1">Basic Usage</h4>
                <code className="text-xs">await resolveAllFlags()</code>
                <p className="text-xs text-muted-foreground mt-1">Simple flags using defaultValue</p>
              </div>
              
              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <h4 className="font-medium text-sm mb-1">With Context</h4>
                <code className="text-xs">await resolveAllFlags({`{ getUser, getWorkspace }`})</code>
                <p className="text-xs text-muted-foreground mt-1">Personalized flags with user data</p>
              </div>
              
              <div className="p-3 bg-purple-50 border border-purple-200 rounded">
                <h4 className="font-medium text-sm mb-1">In API Routes</h4>
                <code className="text-xs">const flags = await resolveAllFlags(ctx)</code>
                <p className="text-xs text-muted-foreground mt-1">Server-side flag access</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="font-medium mb-2">🔒 Security & Performance</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium mb-1">Server-Only Execution</p>
              <p className="text-muted-foreground">All decision logic runs securely on the server</p>
            </div>
            <div>
              <p className="font-medium mb-1">Parallel Processing</p>
              <p className="text-muted-foreground">All flags resolve simultaneously for speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="border rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">🏗️ Architecture</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-3">📁 Directory Structure</h3>
            <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`lib/flags/
├── kit.ts                    # Core types
├── runtime.ts                # Server resolver
├── registry.config.ts        # Aggregator
└── defs/                     # Flag definitions
    ├── feature-a.flag.ts
    └── feature-b.flag.ts

components/flags/
├── flags-provider.tsx        # React context
├── flag.tsx                  # Conditional component
└── flags-test-provider.tsx   # Testing utilities`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">⚡ How It Works</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">1</span>
                <span>Define flags in <code>defs/*.flag.ts</code> files</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">2</span>
                <span>Wizard updates <code>registry.config.ts</code> automatically</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">3</span>
                <span>Server resolves all flags with context</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">4</span>
                <span>Client receives safe subset via provider</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">5</span>
                <span>Components use hooks or <code>&lt;Flag&gt;</code> wrapper</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="border rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">🚀 Getting Started</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-3">📦 Installation</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm mb-2">Install core system:</p>
                <code className="block p-3 bg-muted rounded text-sm">
                  npx shadcn@latest add https://fargo-flags.com/r/flags-core
                </code>
              </div>
              <div>
                <p className="text-sm mb-2">Install CLI tools:</p>
                <code className="block p-3 bg-muted rounded text-sm">
                  npx shadcn@latest add https://fargo-flags.com/r/flags-cli
                </code>
              </div>
              <div>
                <p className="text-sm mb-2">Add package.json scripts:</p>
                <code className="block p-3 bg-muted rounded text-sm text-xs">
                  &quot;flags:new&quot;: &quot;tsx scripts/create-flag.ts&quot;
                </code>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">⚡ CLI Tools</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm mb-2">Install CLI tools:</p>
                <code className="block p-3 bg-muted rounded text-sm">
                  npx shadcn@latest add https://fargo-flags.com/r/flags-cli
                </code>
              </div>
              <div>
                <p className="text-sm mb-2">Create a new flag:</p>
                <code className="block p-3 bg-muted rounded text-sm">
                  pnpm flags:new
                </code>
              </div>
              <div>
                <p className="text-sm mb-2">Validate consistency:</p>
                <code className="block p-3 bg-muted rounded text-sm">
                  pnpm flags:check
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">💻 Code Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">1. Define a Flag</h3>
            <pre className="p-4 bg-muted rounded text-sm overflow-x-auto">
{`// lib/flags/defs/my-feature.flag.ts
import { z } from "zod";
import { defineFlag } from "../kit";

export const key = "my-awesome-feature" as const;
export const schema = z.boolean();

export default defineFlag({
  key,
  schema,
  description: "Enable my awesome new feature",
  defaultValue: false,
  client: { public: true },
  async decide(ctx) {
    const user = await ctx.getUser?.();
    return user?.plan === "premium";
  },
});`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">2. Use in Components</h3>
            <pre className="p-4 bg-muted rounded text-sm overflow-x-auto">
{`import { useFlag } from "@/components/flags/flags-provider";
import { Flag } from "@/components/flags/flag";

function MyComponent() {
  const isEnabled = useFlag("my-awesome-feature");
  
  return (
    <div>
      <h1>My App</h1>
      
      {/* Using the hook */}
      {isEnabled && <NewFeatureButton />}
      
      {/* Using the component */}
      <Flag when="my-awesome-feature">
        <NewFeaturePanel />
      </Flag>
    </div>
  );
}`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">3. Next.js App Router Integration</h3>
            <pre className="p-4 bg-muted rounded text-sm overflow-x-auto">
{`// app/layout.tsx (Server Component)
import { resolveAllFlags, pickClientFlags } from "@/lib/flags/runtime";
import { FlagsProvider } from "@/components/flags/flags-provider";

export default async function RootLayout({ children }) {
  // 🚀 resolveAllFlags() runs on the server and:
  // - Calls each flag's decide() function with context
  // - Validates results against Zod schemas  
  // - Returns ALL flags (including server-only ones)
  const serverFlags = await resolveAllFlags({
    getUser: async () => getCurrentUser(),
    getWorkspace: async () => getCurrentWorkspace(),
  });
  
  // 🔒 pickClientFlags() creates client-safe subset:
  // - Only includes flags with client: { public: true }
  // - Applies optional serialize() functions
  // - Excludes sensitive server-only flags
  const clientFlags = pickClientFlags(serverFlags);

  return (
    <html lang="en">
      <body>
        <FlagsProvider flags={clientFlags}>
          {children}
        </FlagsProvider>
      </body>
    </html>
  );
}`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">4. Testing with Overrides</h3>
            <pre className="p-4 bg-muted rounded text-sm overflow-x-auto">
{`import { FlagsTestProvider } from "@/components/flags/flags-test-provider";

function MyStory() {
  return (
    <FlagsTestProvider 
      overrides={{ "my-awesome-feature": true }}
    >
      <MyComponent />
    </FlagsTestProvider>
  );
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  const [overrides, setOverrides] = useState<FlagOverrides>({
    "enable-ai-assistant-in-pdf-toolbar": false,
    "pagination-ui-location": "bottom",
    "theme-mode": "light",
  });

  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-6xl mx-auto">
        <FlagsTestProvider overrides={overrides}>
          <InteractiveDemo setOverrides={setOverrides} />
        </FlagsTestProvider>
      </main>
    </div>
  );
}

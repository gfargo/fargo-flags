# Project Structure

## Directory Organization

```
fargo-flags/
├── src/                          # Source code
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout with fonts and metadata
│   │   ├── page.tsx              # Home page
│   │   ├── globals.css           # Global styles with Tailwind and theme variables
│   │   └── favicon.ico           # App favicon
│   └── lib/                      # Shared utilities and core logic
│       └── utils.ts              # Common utilities (cn function)
├── public/                       # Static assets
│   ├── *.svg                     # Icon assets (Next.js, Vercel, etc.)
├── .kiro/                        # Kiro IDE configuration
│   └── steering/                 # AI assistant guidance files
├── scripts/                      # Build and utility scripts
├── registry/                     # Generated component registry files (when implemented)
└── config files                  # Various configuration files
```

## Code Organization Patterns

### File Naming Conventions
- **Components**: PascalCase for React components (`Button.tsx`)
- **Utilities**: camelCase for utility functions (`utils.ts`)
- **Pages**: lowercase for Next.js pages (`page.tsx`, `layout.tsx`)
- **Types**: PascalCase for interfaces and types
- **Constants**: UPPER_SNAKE_CASE for constants

### Import Structure
- External dependencies first
- Internal imports grouped by:
  1. Components (`@/components`)
  2. Utilities (`@/lib`)
  3. Types (`@/types`)
  4. Relative imports last

### Component Structure
- Use React Server Components by default
- Mark client components with `"use client"` directive
- Co-locate component-specific utilities when needed
- Follow shadcn/ui patterns for component variants

## Feature Flags Architecture (Implemented)

```
src/lib/flags/
├── kit.ts                    # Core types and defineFlag helper
├── runtime.ts                # Server-side resolver + client serialization
├── registry.config.ts        # Aggregator (checked in, wizard updates)
└── defs/                     # One file per flag
    ├── enable_ai_assistant.flag.ts
    ├── pagination_ui_location.flag.ts
    ├── ai_claims_model.flag.ts
    └── theme_mode.flag.ts

src/components/flags/
├── flags-provider.tsx        # React context provider
├── flag.tsx                  # Conditional rendering component
└── flags-test-provider.tsx   # Testing utilities

scripts/
├── create-flag.ts            # Interactive flag creation wizard
└── check-flags-registry.ts   # Registry consistency validator

src/app/
├── page.tsx                  # Interactive demo with live flag toggles
└── docs/page.tsx             # Comprehensive documentation
```

## Styling Conventions
- Use Tailwind CSS classes with `cn()` utility for conditional styling
- CSS variables for theming (light/dark mode support)
- Component variants with `class-variance-authority`
- Global styles in `src/app/globals.css` using `@layer base`

## Configuration Files
- `components.json` - shadcn/ui configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `eslint.config.mjs` - ESLint configuration for Next.js and TypeScript
- `postcss.config.mjs` - PostCSS configuration for Tailwind
- `next.config.ts` - Next.js configuration
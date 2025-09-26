# Technology Stack

## Framework & Runtime
- **Next.js 15.5.4** with App Router
- **React 19.1.0** with React Server Components (RSC)
- **TypeScript 5** with strict mode enabled
- **Node.js** runtime with ES2017 target

## Styling & UI
- **Tailwind CSS 4** with PostCSS
- **shadcn/ui** components (New York style)
- **Lucide React** for icons
- **class-variance-authority** for component variants
- **clsx** and **tailwind-merge** for conditional styling
- **tw-animate-css** for animations

## Development Tools
- **ESLint 9** with Next.js and TypeScript configs
- **Turbopack** for development and build (--turbopack flag)
- **Geist** fonts (Sans and Mono variants)

## Key Dependencies

### Runtime Dependencies
- **zod** - Schema validation for feature flags
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Tailwind class merging utility

### Development Dependencies (CLI Tools)
- **tsx** - TypeScript execution for CLI scripts
- **prompts** - Interactive CLI prompts for flag wizard
- **fast-glob** - File system scanning for consistency checker
- **prettier** - Code formatting for generated files
- **@types/prompts** - TypeScript definitions for prompts

## Common Commands

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with Turbopack
npm run start        # Start production server
npm run lint         # Run ESLint

# Feature Flags CLI Tools
npm run flags:new    # Interactive flag creation wizard
npm run flags:check  # Validate flag registry consistency
```

## Path Aliases
- `@/*` maps to `./src/*`
- Components: `@/components`
- Utils: `@/lib/utils`
- UI Components: `@/components/ui`
- Hooks: `@/hooks`

## Build Configuration
- Uses Turbopack for faster builds and development
- CSS variables for theming with light/dark mode support
- Modular CSS with @layer base for global styles
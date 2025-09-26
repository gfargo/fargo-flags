# Product Overview

## Fargo Flags

A **production-ready** type-safe feature flags system designed as a shadcn-style component registry. This project implements a comprehensive feature flag management system with:

## Core Architecture
- **One-file-per-flag** architecture with individual flag definitions
- **Type-safe** flag resolution with Zod schema validation
- **Server-side and client-side** flag exposure control (NEXT_PUBLIC-style)
- **Component registry pattern** for easy installation and distribution
- **Zero build step** - uses static imports with checked-in aggregator

## Developer Experience
- **Interactive CLI wizard** (`pnpm flags:new`) for creating flags
- **Consistency checker** (`pnpm flags:check`) for CI/CD validation
- **Live demo page** with interactive flag toggles
- **Comprehensive documentation** with usage examples
- **Testing utilities** for Storybook and Jest integration

## Key Features

### Distribution & Installation
- Drop-in installation via shadcn-compatible registry
- Modular components (core, CLI, testing utilities)
- Automatic registry updates via wizard

### Type Safety & Performance  
- Strong TypeScript integration with end-to-end type safety
- SSR-first approach with client hydration
- Parallel flag resolution for optimal performance
- Runtime Zod validation with compile-time types

### Security & Flexibility
- Server-only vs client-exposed flag control
- Context-based decision logic (user, workspace, etc.)
- Flexible flag types (boolean, enum, custom schemas)
- Safe client serialization with optional sanitizers

### Production Ready
- CI/CD integration with consistency validation
- Testing utilities for development and QA
- Interactive demo showcasing real-world usage patterns
- Comprehensive documentation with best practices
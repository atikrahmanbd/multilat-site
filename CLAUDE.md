# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start Development Server (http://localhost:3000)
npm run build    # Production Build
npm run start    # Start Production Server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a Next.js 16 website for Multilat (digital services company) using the App Router, React 19, TypeScript, and Tailwind CSS 4.

### Path Alias

Use `@/*` for imports from `./src/*` (configured in tsconfig.json).

### Source Structure

- `src/app/` - App Router pages (each folder with `page.tsx` is a route)
- `src/components/` - React components organized by purpose:
  - `ui/` - Reusable UI primitives (animations, effects, cards, buttons)
  - `sections-[page]/` - Page-specific section components (e.g., `sections-home/`, `sections-domains/`)
  - `sections-common/` - Shared sections used across multiple pages
  - `header/` and `footer/` - Layout components
- `src/lib/utils.ts` - Utility function `cn()` for merging Tailwind classes
- `src/config/` - Configuration files (TLD categories)
- `src/data/` - Static data files (domain pricing JSON)

### Key Dependencies

- **Animations**: Framer Motion, GSAP, Lottie
- **3D**: Three.js with @react-three/fiber
- **UI Components**: Radix UI (Accordion, Collapsible)
- **Icons**: Tabler Icons, Lucide React, React Icons
- **Particles**: tsparticles

### Theme System

The app uses next-themes for dark/light mode with a custom ThemeColorProvider for accent colors. Theme providers wrap the entire app in `layout.tsx`.

### Component Patterns

- Page components compose multiple section components
- Section components are self-contained with their own data
- UI components in `src/components/ui/` are highly animated and reusable
- Many UI components are inspired by Aceternity UI patterns

### Images

Remote images from `images.unsplash.com` are allowed in next.config.ts.

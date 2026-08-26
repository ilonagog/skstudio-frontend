# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (Next.js, default port 3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint (flat config, `eslint-config-next` core-web-vitals + typescript rules)
- `npm test` — run the Vitest suite once
- `npm run test:watch` — Vitest in watch mode
- `npx vitest run path/to/file.test.tsx` — a single test file; add `-t "test name"` for a single test

Tests use Vitest + React Testing Library (jsdom), configured in `vitest.config.mts` with `vitest.setup.ts` for jest-dom matchers and automatic cleanup. Test files are colocated next to the code they cover. **This repo is test-first — see the `test-driven-development` skill.**

Note: Vitest cannot render `async` server components. Keep async `page.tsx` files thin and test the components they delegate to.

## Project skills

Conventions for this repo are captured as skills in `.claude/skills/` — consult them rather than inferring patterns from surrounding code:

- **`test-driven-development`** — mandatory test-first loop; read before writing any code
- **`add-route`** — adding or changing a page under `app/`
- **`build-component`** — writing any component; shadcn/Tailwind conventions
- **`pre-commit-check`** — verification steps before claiming work is done

## Architecture

This is a Next.js 16 App Router storefront ("skstudio-frontend" / "MyStore") using React 19, TypeScript, and Tailwind CSS v4.

- **Routing**: file-based routes under `app/` — `app/page.tsx` (home), `app/products`, `app/cart`, `app/login`, `app/signup`, `app/admin`. `app/layout.tsx` is the root layout and always renders `app/components/Navbar.tsx` above `children`, so the navbar is present on every route.
- **UI components**: shadcn/ui components live in `components/ui/` (generated via the `shadcn` CLI, config in `components.json` — style `radix-nova`, base color `neutral`, icon library `lucide-react`). Page-specific components live in `app/components/`. Use the shadcn CLI to add new primitives rather than hand-rolling them, to stay consistent with the existing set.
- **Styling**: Tailwind v4 with the `@tailwindcss/postcss` plugin; global styles and CSS variables in `app/globals.css`. Use the `cn()` helper from `lib/utils.ts` (clsx + tailwind-merge) when composing conditional class names.
- **Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/components/ui/button`, `@/lib/utils`.
- **Data**: there is no backend or data layer yet — product data in `app/products/page.tsx` and the "admin" flag in `app/components/Navbar.tsx` are hardcoded local arrays/objects. Auth, cart, and admin pages (`app/login`, `app/signup`, `app/cart`, `app/admin`) are currently UI stubs with no real logic wired up.
- **Client vs. server components**: most interactive pages/components (`app/page.tsx`, `app/components/Navbar.tsx`) are explicitly marked `"use client"` for hooks like `useRouter`; keep that boundary in mind when adding state or effects to other pages.

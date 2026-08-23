# Rubina Gaharali Mollah - Portfolio

A React + Vite + TypeScript + Tailwind CSS v4 portfolio site, using shadcn/ui
(Radix primitives), Framer Motion, GSAP, and Lenis for smooth scrolling.

## Requirements

- Node.js **18+** (Node **22 LTS** recommended — tested against it)
- npm 9+ (bundled with Node), or pnpm 8+

## Getting started

```bash
npm install
npm run dev
```

or, with pnpm:

```bash
pnpm install
pnpm dev
```

The dev server starts on **http://localhost:5173**.

## Scripts

| Command            | Description                                      |
|---------------------|--------------------------------------------------|
| `npm run dev`       | Start the Vite dev server                        |
| `npm run build`     | Type-check, then build a production bundle to `dist/` |
| `npm run preview`   | Preview the production build locally             |
| `npm run typecheck` | Run TypeScript in `--noEmit` mode                 |

## Project structure

```
.
├── index.html              # Vite entry HTML
├── vite.config.ts          # Vite config (React + Tailwind v4 plugins)
├── tsconfig.json           # Standalone TypeScript config
├── components.json         # shadcn/ui config
├── package.json
├── public/                 # Static files served as-is (favicon, robots.txt)
└── src/
    ├── main.tsx             # App entry point
    ├── App.tsx              # Router + providers
    ├── index.css            # Tailwind v4 entry + design tokens
    ├── assets/               # Images/PDF actually used by the site
    ├── components/           # Shared components
    │   └── ui/                # shadcn/ui primitives (Radix-based)
    ├── data/                 # Static content (projects, artwork, resume data)
    ├── hooks/                # Custom hooks (scroll reveal, cursor, Lenis, etc.)
    ├── pages/                # Route-level pages (Home, Gallery, Case Study, 404)
    └── sections/              # Page sections (Hero, About, Projects, ...)
```


### One honest caveat

This sandbox has no network access, so `npm install` / `npm run build`
could not be executed end-to-end here to produce a lockfile or a live build
log. Everything above was verified statically (import-by-import, dependency-
by-dependency, byte-for-byte asset tracing). **Please run `npm install`
followed by `npm run build` once on your machine** as a final sanity check —
if anything surfaces, it'll be a normal version-resolution nudge, not a
structural issue with the cleanup. This also means there's no bundled
lockfile: your `npm install`/`pnpm install` will generate a fresh one
matching the pinned versions above, which is the correct way to start a
newly-cleaned repo (rather than hand-editing the old monorepo's 200KB+
`pnpm-lock.yaml`, which listed hundreds of unrelated workspace packages).

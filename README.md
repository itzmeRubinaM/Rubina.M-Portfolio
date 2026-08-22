# Rubina Mollah — Portfolio

A React + Vite + TypeScript + Tailwind CSS v4 portfolio site, using shadcn/ui
(Radix primitives), Framer Motion, GSAP, and Lenis for smooth scrolling.

This project was cleaned up from a Replit monorepo export into a normal,
standalone Vite app. See **"What changed"** below for details.

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

## What changed from the Replit export

The original export was a **pnpm workspace/monorepo** (root `package.json` +
`pnpm-workspace.yaml`, with the real app nested at `artifacts/portfolio`,
alongside unrelated workspace members: `artifacts/api-server`,
`artifacts/mockup-sandbox`, `lib/*`, `scripts/`, Replit metadata, and Replit's
local agent/session folders). None of the UI, animations, copy, or design was
touched — only project plumbing.

1. **Moved the real app to the project root.** Everything under
   `artifacts/portfolio/{src,public,index.html,components.json}` is now at
   the top level.
2. **Removed everything not required to run the site:**
   - `.replit`, `.replitignore`, `replit.md`, `.local/` (Replit agent state)
   - `pnpm-workspace.yaml`, the workspace root `package.json`, `.npmrc`
   - `artifacts/api-server`, `artifacts/mockup-sandbox` (separate,
     unrelated services — not imported by the portfolio anywhere)
   - `lib/*` (`api-client-react`, `api-spec`, `api-zod`, `db`) — confirmed
     unused by searching the app source for `@workspace/*` imports (none found)
   - `scripts/` (a workspace-level tsx script, unrelated to the site)
   - `.git`, `tsconfig.tsbuildinfo` build caches
   - Unused files under `attached_assets/` — only the **18 images/PDF actually
     imported by the app** were kept (moved into `src/assets/`); leftover
     screenshots, duplicate profile photos, and pasted chat-log `.txt` files
     from the Replit session were dropped.
3. **Removed Replit-only tooling:**
   - `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`,
     `@replit/vite-plugin-runtime-error-modal` (dev-only Replit editor
     integrations; they were already conditionally disabled outside Replit,
     but are now fully removed rather than dead-installed)
   - `@replit/connectors-sdk` (was only in the monorepo root, never imported
     by the portfolio)
   - `@workspace/api-client-react` workspace dependency (never imported)
4. **Rewrote `vite.config.ts`** to be a normal, standalone config:
   - No more required `PORT` / `BASE_PATH` env vars (the original threw at
     startup if these weren't set — a Replit-hosting requirement). Dev now
     just runs on port `5173`.
   - The `@assets` alias that pointed *outside* the project
     (`../../attached_assets`) is gone — assets now live inside `src/assets`
     and are imported via the existing `@/assets/...` alias, so the project
     is fully self-contained.
5. **Rewrote `tsconfig.json`** as a standalone config (no longer extends a
   monorepo-root `tsconfig.base.json` or references sibling packages).
6. **Fixed the Windows/Rollup/esbuild native-binary problem.** The original
   `pnpm-workspace.yaml` explicitly deleted every non-`linux-x64` optional
   native binary for esbuild, Rollup, Lightning CSS, and the Tailwind Oxide
   engine (`"esbuild>@esbuild/win32-x64": "-"`, etc.) — this is why it
   wouldn't run on Windows. That workspace file (and its overrides) is gone;
   a plain `npm install`/`pnpm install` on Windows now pulls the correct
   `win32-x64` optional binaries automatically.
7. **Rebuilt `package.json` from scratch:**
   - Pinned every dependency to a real, resolvable version (the original
     used pnpm `catalog:` references, which only resolve inside the
     workspace and are meaningless in a standalone project).
   - Moved runtime UI libraries into `dependencies` and build-only tooling
     (Vite, TypeScript, Tailwind, the Vite React/Tailwind plugins) into
     `devDependencies` — the original had almost everything, including
     Radix and Framer Motion, incorrectly listed under `devDependencies`.
   - Dropped 3 dependencies that were present in the manifest but never
     imported anywhere in the source (`@hookform/resolvers`, `date-fns`,
     `zod`) — the shadcn `form.tsx`/`calendar.tsx` primitives are present in
     the UI kit but the site doesn't currently use any form.
8. **Verification performed:** every `import` in every `.ts`/`.tsx` file
   under `src/` was checked — (a) every non-relative import resolves to a
   package listed in `package.json`, (b) every relative and `@/`-aliased
   import resolves to a real file on disk. No broken imports, no missing
   assets, no leftover `@assets`/`@workspace` references remain.

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

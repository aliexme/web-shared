# @aliexme/react-utils

React hooks and components. React 19 is a peerDependency — never move it into `dependencies`.

- Tests are colocated as `*.test.tsx` and run by the root Vitest config: hooks declare `// @vitest-environment happy-dom` directly above the first import; server-only behavior goes into `*.server.test.ts` files with `// @vitest-environment node`. Verification is `pnpm check` + `pnpm test` from the root (the root `tsconfig.json` paths cover this package).
- Depends on `@aliexme/js-utils` via `workspace:^`. The root typecheck resolves it to `packages/js-utils/src`, so js-utils changes surface here without rebuilding.
- Layout: `src/hooks/`, `src/lib/` with `index.ts` barrels re-exported from `src/index.ts` — new exports must go through both.
- Build: `pnpm build` here or at the root — Vite lib mode via the root `vite-lib.config.ts` plus `@vitejs/plugin-react`; ESM only, `.d.ts` from `tsconfig.build.json`.
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.

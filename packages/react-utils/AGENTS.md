# @aliexme/react-utils

React hooks and components. React is a peerDependency — never move it into `dependencies`.

- Tests are colocated as `*.test.tsx` and run by the root Vitest config: hooks declare `// @vitest-environment happy-dom` directly above the first import; server-only behavior goes into `*.server.test.ts` files with `// @vitest-environment node`. Verification is `pnpm check` + `pnpm test` from the root (the root `tsconfig.json` paths cover this package).
- Depends on `@aliexme/js-utils` via `workspace:^`. The root typecheck resolves it to `packages/js-utils/src`, so js-utils changes surface here without rebuilding.
- Layout: `src/hooks/<name>/` — each hook lives in its own folder: `<name>.ts`, its tests, and an `index.ts` barrel; `src/lib/` holds shared non-hook helpers without barrels. Barrels use explicit named exports, never `export *` (`export { x, type XOptions } from './x'`). Cross-imports go through the folder (`../useValueRef`), never the inner file. `src/index.ts` is the only other barrel — it re-exports every hook's folder and `src/lib/*` with explicit named exports; add new exports there.
- Build: `pnpm build` here or at the root — tsdown via `tsdown.config.ts` (`platform: 'browser'`; no React plugin needed — sources are pure `.ts`, rolldown/oxc handles JSX if it ever appears); ESM only, `unbundle` mode preserves module structure, `.d.ts` generated automatically.
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.

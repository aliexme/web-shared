# @aliexme/js-utils

Tree-shakable JS utility library — the only package in the repo with tests.

- Layout: `src/<category>/<name>/` (`array`, `async`, `function`, `number`, `object`, `random`, `string`) — each utility lives in its own folder: `<name>.ts`, its `<name>.spec.ts`, and an `index.ts` barrel. Barrels use explicit named exports, never `export *` (`export { x } from './x'`; exported types use the inline modifier: `export { x, type XOptions } from './x'`). Cross-imports go through the folder (`../findKey`, `../../number/clamp`), never the inner file. There are no per-category barrels; `src/index.ts` re-exports every utility's folder — add new utilities there.
- Tests are colocated and run by the root Jest config: `pnpm jest packages/js-utils/src/<category>/<name>/<name>.spec.ts` from the repo root. For randomness, mock `Math.random`: a single call per test → `mockReturnValue(0.5)`, multiple calls → `mockImplementation(seededRandom())` from `src/random`.
- Build: `pnpm build` here or at the root — Vite lib mode via the shared root `vite-lib.config.ts`; ESM only, preserves module structure, generates `.d.ts` from `tsconfig.build.json` (specs excluded).
- Versioning/publishing is handled by Lerna from the repo root — never edit `version` by hand.

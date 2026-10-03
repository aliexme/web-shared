# @aliexme/js-utils

Tree-shakable JS utility library — the only package in the repo with tests.

- Layout: `src/<category>/` (`array`, `async`, `function`, `number`, `object`, `string`). Each category has an `index.ts` barrel, re-exported from `src/index.ts` — new utilities must be exported through both.
- Tests are colocated (`*.spec.ts`) and run by the root Jest config: `pnpm jest packages/js-utils/src/<category>/<name>.spec.ts` from the repo root. For randomness, mock `Math.random` with `seedrandom('')` (root devDependency).
- Build: `pnpm build` here or at the root — Vite lib mode via the shared root `vite-lib.config.ts`; ESM only, preserves module structure, generates `.d.ts` from `tsconfig.build.json` (specs excluded).
- Versioning/publishing is handled by Lerna from the repo root — never edit `version` by hand.

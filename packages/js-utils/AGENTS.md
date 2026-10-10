# @aliexme/js-utils

Tree-shakable JS utility library.

- Layout: `src/<category>/<name>/` (`array`, `async`, `function`, `number`, `object`, `random`, `string`) — each utility lives in its own folder: `<name>.ts`, its `<name>.test.ts`, and an `index.ts` barrel. Barrels use explicit named exports, never `export *` (`export { x } from './x'`; exported types use the inline modifier: `export { x, type XOptions } from './x'`). Cross-imports go through the folder (`../findKey`, `../../number/clamp`), never the inner file. There are no per-category barrels; `src/index.ts` re-exports every utility's folder — add new utilities there.
- Tests are colocated and run by the root Vitest config: `pnpm vitest run packages/js-utils/src/<category>/<name>/<name>.test.ts` from the repo root. For randomness, mock `Math.random`: a single call per test → `mockReturnValue(0.5)`, multiple calls → `mockImplementation(seededRandom())` from `src/random`.
- Build: `pnpm build` here or at the root — tsdown via `tsdown.config.ts`; ESM only, `unbundle` mode preserves module structure, `.d.ts` generated automatically (tests are unreachable from the entry, so they stay out of declarations). `tsconfig.json` sets `types: ["node"]` for the Node APIs used in tests — `@types/node` is a devDependency of this package.
- Versioning/publishing is handled by Lerna from the repo root — never edit `version` by hand.

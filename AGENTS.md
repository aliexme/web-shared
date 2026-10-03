# AGENTS.md

pnpm workspace monorepo publishing the `@aliexme/*` package family to npm. Versioning and publishing are handled by Lerna (independent versions) with nx task caching (`nx.json`). No CI — the lefthook pre-commit hook is the quality gate.

## Commands

- `pnpm check` — all checks in parallel: `check:ts` + `check:eslint` + `check:stylelint` + `check:biome`
- `pnpm fix` — autofix eslint + stylelint + biome (there is no TS autofix)
- `pnpm test` — all tests (Vitest)
- `pnpm vitest run packages/js-utils/src/string/capitalize/capitalize.test.ts` — single test file
- `pnpm vitest run -t '<test name>'` — single test case
- `pnpm test:coverage` — coverage
- `pnpm build` — `lerna run build`
- `pnpm publish` — Lerna publish, `main` branch only

Run `pnpm check && pnpm test` before finishing any change. Pre-commit runs the full typecheck plus eslint/stylelint/biome on staged files; autofixes are re-staged automatically.

## Testing

- Vitest config lives at the repo root and matches `**/*.test.ts` across the repo (default excludes cover `node_modules`, `dist`, and config files) — currently `js-utils` is the only package with tests.
- Tests are colocated with sources as `*.test.ts`.
- Tests involving randomness mock `Math.random` for deterministic assertions: a single call per test → `vi.spyOn(Math, 'random').mockReturnValue(0.5)`; multiple calls → `mockImplementation(seededRandom())` via `seededRandom` from `@aliexme/js-utils` — see `packages/js-utils/src/random/randomArrayItem/randomArrayItem.test.ts` and `packages/js-utils/src/random/randomString/randomString.test.ts`.

## Package layout

Two kinds of packages, handled differently:

- Built TS libraries: `js-utils`, `react-utils` — Vite library builds through the shared root `vite-lib.config.ts` (ESM only, `preserveModules`, `.d.ts` via `vite-plugin-dts`). `tsconfig.build.json` excludes test files from declarations.
- No-build packages shipped as-is: `eslint-config`, `stylelint-config`, `prettier-config` (raw JS with multi-entry exports), `biome-config` (single JSON), `ts-types` (single `index.d.ts`).

Workspace cross-dependencies use `workspace:*` / `workspace:^`. The root `tsconfig.json` maps `@aliexme/js-utils` and `@aliexme/react-utils` to their `src/` via `paths`, so the root typecheck sees package sources, not `dist/`.

## Tooling conventions

- Biome is the primary formatter/import organizer: single quotes, no semicolons, width 120, sorted import groups (with `@aliexme/**` in its own group), sorted object keys. Prettier runs only through the ESLint/Stylelint plugins.
- Root config files (`eslint.config.js`, `biome.json`, `stylelint.config.js`, `prettier.config.js`) consume the workspace config packages — they double as the real-world smoke test for those packages, so update them alongside config changes.
- ESLint enforces the `@stylistic/migrate` rule; `pnpm fix:eslint` rewrites deprecated stylistic rules.
- `deps:*` scripts run taze interactively via `pnx` (pnpm's built-in alias for `pnpm dlx`).
- pnpm enforces `minimumReleaseAge: 4320` (3 days): freshly published npm versions won't resolve until they age. `allowBuilds` blocks install scripts of several tools.

## Commits & releases

- History follows Conventional Commits with optional package scope (`feat:`, `fix:`, `chore:`, `feat(biome-config):`).
- Never bump versions manually — Lerna publishes changed packages from `main` and creates the `chore(release): publish` commit.

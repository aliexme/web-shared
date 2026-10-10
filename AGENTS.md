# AGENTS.md

pnpm workspace monorepo publishing the `@aliexme/*` package family to npm. Versioning and publishing are handled by Lerna (independent versions) with nx task caching (`nx.json`). No CI — the lefthook pre-commit hook is the quality gate.

## Commands

- `pnpm check` — all checks in parallel: `check:ts` + `check:eslint` + `check:stylelint` + `check:biome` + `check:prettier`
- `pnpm fix` — autofix eslint + stylelint + biome + prettier (there is no TS autofix)
- `pnpm test` — all tests (Vitest)
- `pnpm vitest run packages/js-utils/src/string/capitalize/capitalize.test.ts` — single test file
- `pnpm vitest run -t '<test name>'` — single test case
- `pnpm test:coverage` — coverage
- `pnpm build` — `lerna run build`
- `pnpm publish` — Lerna publish, `main` branch only

Run `pnpm check && pnpm test` before finishing any change. Pre-commit runs the full typecheck plus eslint/stylelint on staged files, formats them with Biome and Prettier, and re-stages autofixes automatically.

## Testing

- Vitest config lives at the repo root and matches `**/*.test.{ts,tsx}` across the repo (default excludes cover `node_modules`, `dist`, and config files) — both `js-utils` and `react-utils` have tests.
- Tests are colocated with sources as `*.test.{ts,tsx}`.
- Coverage is enforced at 100% (statements, branches, functions, lines) via `coverage.thresholds` in the root Vitest config — run `pnpm test:coverage`.
- Browser-facing tests declare `// @vitest-environment happy-dom` directly above the first import (no blank line between); server-only paths get a dedicated `*.server.test.ts` with `// @vitest-environment node`.
- Tests involving randomness mock `Math.random` for deterministic assertions: a single call per test → `vi.spyOn(Math, 'random').mockReturnValue(0.5)`; multiple calls → `mockImplementation(seededRandom())` via `seededRandom` from `@aliexme/js-utils` — see `packages/js-utils/src/random/randomArrayItem/randomArrayItem.test.ts` and `packages/js-utils/src/random/randomString/randomString.test.ts`.

## Package layout

Two kinds of packages, handled differently:

- Built TS libraries: `js-utils`, `react-utils` — Vite library builds through the shared root `vite-lib.config.ts` (ESM only, `preserveModules`, `.d.ts` via `vite-plugin-dts`). `tsconfig.build.json` excludes test files from declarations.
- No-build packages shipped as-is: `eslint-config`, `stylelint-config`, `prettier-config` (raw JS with multi-entry exports), `biome-config` (single JSON), `ts-types` (`.d.ts` sources, one folder per type, single-entry barrel).

Workspace cross-dependencies use `workspace:*` / `workspace:^`. The root `tsconfig.json` maps `@aliexme/js-utils` and `@aliexme/react-utils` to their `src/` via `paths`, so the root typecheck sees package sources, not `dist/`.

## Tooling conventions

- Biome formats JS/TS/JSON/CSS and organizes imports: single quotes, no semicolons, width 120, sorted import groups (with `@aliexme/**` in its own group), sorted object keys. Standalone Prettier (`check:prettier`/`fix:prettier`) formats everything Biome cannot — Markdown, YAML, etc. ESLint disables formatting rules via `eslint-config-prettier`; Stylelint presets contain no formatting rules.
- Root config files (`eslint.config.js`, `biome.json`, `stylelint.config.js`, `prettier.config.js`) consume the workspace config packages — they double as the real-world smoke test for those packages, so update them alongside config changes.
- ESLint enforces the `@stylistic/migrate` rule; `pnpm fix:eslint` rewrites deprecated stylistic rules.
- `deps:*` scripts run taze interactively via `pnx` (pnpm's built-in alias for `pnpm dlx`).
- Root `package.json` dependencies are pinned to exact versions (no `^`/`~` ranges) — add new ones with `pnpm add -Dw --save-exact <pkg>`.
- pnpm enforces `minimumReleaseAge: 4320` (3 days): freshly published npm versions won't resolve until they age. `allowBuilds` blocks install scripts of several tools.

## Commits & releases

- History follows Conventional Commits with optional package scope (`feat:`, `fix:`, `chore:`, `feat(biome-config):`).
- Never bump versions manually — Lerna publishes changed packages from `main` and creates the `chore(release): publish` commit.

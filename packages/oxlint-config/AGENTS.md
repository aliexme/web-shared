# @aliexme/oxlint-config

Shared oxlint configuration — a single `index.js` typed with `defineConfig` from `oxlint`, no build step, published as-is.

- `oxlint` is a peerDependency (`^1.87.0`); the package has no `scripts`.
- The `plugins` field overwrites the default plugin set, so it is pinned explicitly to the oxlint defaults (`eslint`, `typescript`, `unicorn`, `oxc`); `react` is deliberately not included — consumers opt in by setting `plugins` in their own config (the field replaces the whole set). The `correctness` and `suspicious` categories are enabled, raised to `error` so findings fail CI without extra flags.
- oxlint auto-discovers `.oxlintrc.json`/`.oxlintrc.jsonc` and `oxlint.config.ts`/`.mts`; package imports are not supported in the JSON format, so consumers re-export this package from `oxlint.config.ts` via `defineConfig({ extends: [...] })`. `.gitignore` is respected by default; per-project ignores go into `ignorePatterns`.
- The repo root consumes it via `oxlint.config.ts` (dogfooding): `check:oxlint`/`fix:oxlint` plus the pre-commit lint job; run `pnpm check:oxlint` at the root after edits.
- Type-aware linting (`options.typeAware`/`typeCheck`, requires the `oxlint-tsgolint` package) is deliberately out of scope.
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.

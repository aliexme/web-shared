# @aliexme/biome-config

Shared Biome configuration — a single `biome-config.json`, no build step, published as-is.

- The package has no `scripts`; the Biome CLI is a peerDependency (`^2.0.0`) supplied by the consumer.
- `useEditorconfig: true` — formatting follows the repo `.editorconfig`; import groups put `@aliexme/**` in its own group; object keys are auto-sorted.
- JS/TS formatting is kept in lockstep with `@aliexme/prettier-config` (line width 120, no semicolons, single quotes, operators at line end) so `biome check --write` and prettier-based fixers (`eslint-plugin-prettier`, `stylelint-prettier`) converge; CSS strings are single-quoted for the same reason. Known residual divergence: `@keyframes` names — prettier preserves their original quote style (no option controls it) while Biome normalizes to single quotes.
- The repo root consumes this file via `biome.json` `extends` (dogfooding): run `pnpm check:biome` at the root after edits.
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.

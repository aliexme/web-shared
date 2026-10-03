# @aliexme/biome-config

Shared Biome configuration — a single `biome-config.json`, no build step, published as-is.

- The package has no `scripts`; the Biome CLI is a peerDependency (`^2.0.0`) supplied by the consumer.
- `useEditorconfig: true` — formatting follows the repo `.editorconfig`; import groups put `@aliexme/**` in its own group; object keys are auto-sorted.
- The repo root consumes this file via `biome.json` `extends` (dogfooding): run `pnpm check:biome` at the root after edits.
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.

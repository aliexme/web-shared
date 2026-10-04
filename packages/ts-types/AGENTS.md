# @aliexme/ts-types

Common TypeScript utility types. No build step — the package is published as-is: each type lives in its own folder under `src/`, re-exported by the root `index.d.ts` (the package entry).

- One folder per type: `src/<name>/<name>.d.ts` + `index.d.ts` folder barrel + `<name>.test.ts` (type-level tests via `expectTypeOf`).
- A new type gets a folder, an export in the root `index.d.ts` barrel, and a README section.
- `files` publishes only `index.d.ts` and `src/**/*.d.ts` — tests never ship.
- Verify with `pnpm check:ts` (here or from the repo root) and `pnpm vitest run packages/ts-types`.
- `typescript` is a peerDependency (`^6.0.0`) — do not add it to `dependencies`.
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.

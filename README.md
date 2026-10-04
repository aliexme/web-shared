# :hammer: Web Shared

A set of packages for web development

## Packages

| Package | Description |
| --- | --- |
| [@aliexme/js-utils](packages/js-utils) | Tree-shakable JavaScript utilities |
| [@aliexme/react-utils](packages/react-utils) | React hooks and utilities |
| [@aliexme/ts-types](packages/ts-types) | Common TypeScript utility types |
| [@aliexme/eslint-config](packages/eslint-config) | Rule set for ESLint |
| [@aliexme/stylelint-config](packages/stylelint-config) | A set of rules for Stylelint |
| [@aliexme/prettier-config](packages/prettier-config) | Shared Prettier configuration |
| [@aliexme/biome-config](packages/biome-config) | Shared Biome configuration |

## Development

The repo is a pnpm workspace. Useful commands:

```sh
pnpm check            # typecheck + eslint + stylelint + biome
pnpm test             # run all tests (Vitest)
pnpm test:coverage    # run all tests with coverage
pnpm fix              # autofix eslint + stylelint + biome
pnpm build            # build all packages (Lerna)
```

Versioning and publishing are handled by Lerna from the repo root.

## License

MIT

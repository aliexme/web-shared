# @aliexme/eslint-config

Rule set for ESLint

## Installation

```sh
npm i --save-dev eslint @aliexme/eslint-config
```

## Usage

Extend your ESLint config file:

```js
import { defineConfig } from 'eslint/config'
import eslintConfigRecommended from '@aliexme/eslint-config'

export default defineConfig([
  eslintConfigRecommended, // <--
])
```

## Available configs

| Export                             | Description                                                                                         |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| `@aliexme/eslint-config`           | recommended: base + typescript + import + package-json presets                                      |
| `@aliexme/eslint-config/stylistic` | `@stylistic` formatting rules (single quotes, no semicolons, width 120) plus `package.json` sorting |
| `@aliexme/eslint-config/react`     | React and React Hooks rules                                                                         |
| `@aliexme/eslint-config/vue`       | Vue rules                                                                                           |
| `@aliexme/eslint-config/astro`     | Astro rules                                                                                         |

## Formatting

`recommended` does not enforce formatting. If your project has no dedicated
formatter (Biome, Prettier), add the `stylistic` config — single quotes, no
semicolons, 2-space indent, width 120:

```js
import { defineConfig } from 'eslint/config'
import eslintConfigRecommended from '@aliexme/eslint-config'
import eslintConfigStylistic from '@aliexme/eslint-config/stylistic'

export default defineConfig([
  eslintConfigRecommended,
  eslintConfigStylistic, // <--
])
```

Note: if you use Prettier, `eslint-config-prettier/flat` disables all
`@stylistic` rules, so the two are mutually exclusive.

## Type-aware linting

`recommended` uses `strictTypeChecked` rules with the
[project service](https://typescript-eslint.io/packages/parser#project-service),
so a `tsconfig.json` at the package root is required for type-aware rules.

## Optional presets

### React

Install additional packages:

```sh
npm i --save-dev @eslint-react/eslint-plugin eslint-plugin-react-hooks
```

The React preset uses the
[`recommended-type-checked`](https://eslint-react.xyz/docs/presets) preset of
ESLint React, so it requires ESLint `>=10.3.0` and type-aware linting (the `typescript`
preset's project service).

And add the following lines to your ESLint config file:

```js
import { defineConfig } from 'eslint/config'
import eslintConfigRecommended from '@aliexme/eslint-config'
import eslintConfigReact from '@aliexme/eslint-config/react'

export default defineConfig([
  eslintConfigRecommended,
  eslintConfigReact, // <--
])
```

### Vue

Install additional packages:

```sh
npm i --save-dev eslint-plugin-vue
```

And add the following lines to your ESLint config file:

```js
import { defineConfig } from 'eslint/config'
import eslintConfigRecommended from '@aliexme/eslint-config'
import eslintConfigVue from '@aliexme/eslint-config/vue'

export default defineConfig([
  eslintConfigRecommended,
  eslintConfigVue, // <--
])
```

### Astro

Install additional packages:

```sh
npm i --save-dev eslint-plugin-astro
```

And add the following lines to your ESLint config file:

```js
import { defineConfig } from 'eslint/config'
import eslintConfigRecommended from '@aliexme/eslint-config'
import eslintConfigAstro from '@aliexme/eslint-config/astro'

export default defineConfig([
  eslintConfigRecommended,
  eslintConfigAstro, // <--
])
```

## License

MIT

# @aliexme/eslint-config

Rule set for ESLint

## Installation

```sh
npm i --save-dev eslint @aliexme/eslint-config
```

## Usage

Extend your ESLint config file:

```js
import eslintConfigRecommended from '@aliexme/eslint-config'

export default defineConfig([
  eslintConfigRecommended, // <--
])
```

## Available configs

| Export | Description |
| --- | --- |
| `@aliexme/eslint-config` (or `/recommended`) | All-in-one config: base + typescript + stylistic + import + package-json |
| `@aliexme/eslint-config/base` | `@eslint/js` recommended plus language modernization rules |
| `@aliexme/eslint-config/typescript` | typescript-eslint strict and stylistic rules with type-aware parsing |
| `@aliexme/eslint-config/stylistic` | `@stylistic` formatting rules (single quotes, no semicolons, width 120) |
| `@aliexme/eslint-config/import` | `eslint-plugin-import-x` rules with import ordering |
| `@aliexme/eslint-config/package-json` | `eslint-plugin-package-json` rules |
| `@aliexme/eslint-config/prettier` | Runs Prettier through ESLint |
| `@aliexme/eslint-config/react` | React and React Hooks rules |
| `@aliexme/eslint-config/vue` | Vue rules |
| `@aliexme/eslint-config/astro` | Astro rules |

Individual configs can be composed instead of the recommended one:

```js
import eslintConfigBase from '@aliexme/eslint-config/base'
import eslintConfigTypescript from '@aliexme/eslint-config/typescript'

export default defineConfig([
  eslintConfigBase,
  eslintConfigTypescript, // <--
])
```

### React

Install additional packages:

```sh
npm i --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

And add the following lines to your ESLint config file:

```js
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
import eslintConfigAstro from '@aliexme/eslint-config/astro'

export default defineConfig([
  eslintConfigRecommended,
  eslintConfigAstro, // <--
])
```

### Prettier

Install additional packages:

```sh
npm i --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

And add the following lines to your ESLint config file:

```js
import eslintConfigPrettier from '@aliexme/eslint-config/prettier'

export default defineConfig([
  eslintConfigRecommended,
  eslintConfigPrettier, // <--
])
```

## License

MIT

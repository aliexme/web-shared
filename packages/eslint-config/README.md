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

### React Native

Install additional packages:

```sh
npm i --save-dev eslint-plugin-react-native
```

And add the following lines to your ESLint config file:

```js
import eslintConfigReactNative from '@aliexme/eslint-config/react-native'

export default defineConfig([
  eslintConfigRecommended,
  eslintConfigReactNative, // <--
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

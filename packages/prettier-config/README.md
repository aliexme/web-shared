# @aliexme/prettier-config

Shared Prettier configuration

## Installation

```sh
npm i --save-dev prettier @aliexme/prettier-config
```

Requires `prettier@^3.0.0` as a peer dependency.

## Usage

Reference it in your Prettier config file:

```js
import prettierConfig from '@aliexme/prettier-config'

/** @type {import('prettier').Config} */
export default prettierConfig
```

Or add it to your `package.json`:

```json
{
  "prettier": "@aliexme/prettier-config"
}
```

## License

MIT

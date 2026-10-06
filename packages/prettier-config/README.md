# @aliexme/prettier-config

Shared Prettier configuration

## Installation

```sh
npm i --save-dev prettier @aliexme/prettier-config
```

Requires `prettier@^3.0.0` as a peer dependency.

## Options

Everything not listed here follows the Prettier defaults. The deliberate overrides:

| Option | Value | Prettier default |
| --- | --- | --- |
| `printWidth` | `120` | `80` |
| `semi` | `false` | `true` |
| `singleQuote` | `true` | `false` |

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

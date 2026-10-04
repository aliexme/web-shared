# @aliexme/biome-config

Shared Biome configuration

## Installation

```sh
npm i --save-dev @biomejs/biome @aliexme/biome-config
```

Requires `@biomejs/biome@^2.0.0` as a peer dependency.

## Usage

Extend your `biome.json`:

```json
{
  "$schema": "https://biomejs.dev/schemas/2.5.14/schema.json",
  "extends": ["@aliexme/biome-config"]
}
```

## Highlights

- Formatting follows the repo `.editorconfig` (`useEditorconfig: true`)
- Single quotes, no semicolons, line width 120
- Import organization with `@aliexme/**` in its own group
- Automatic sorting of object keys
- VCS integration: uses `.gitignore` and formats only changed files on the default branch

## License

MIT

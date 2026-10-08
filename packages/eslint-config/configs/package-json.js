import { defineConfig } from 'eslint/config'
import packageJson from 'eslint-plugin-package-json'

export default defineConfig([
  packageJson.configs.recommended,
  packageJson.configs.stylistic,
  {
    name: '@aliexme/eslint-config/package-json',
    files: ['**/package.json'],
    rules: {
      'package-json/sort-collections': ['error', ['dependencies', 'devDependencies', 'peerDependencies', 'overrides']],
      'package-json/no-redundant-files': 'off',
      'package-json/specify-peers-locally': 'off',
    },
  },
])

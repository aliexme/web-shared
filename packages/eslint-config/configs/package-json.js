import { defineConfig } from 'eslint/config'
import packageJson from 'eslint-plugin-package-json'

export default defineConfig([
  packageJson.configs.recommended,
  {
    name: '@aliexme/eslint-config/package-json',
    files: ['**/package.json'],
    rules: {
      'package-json/sort-collections': 'off',
      'package-json/no-redundant-files': 'off',
      'package-json/specify-peers-locally': 'off',
    },
  },
])

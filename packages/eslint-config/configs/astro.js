import { defineConfig } from 'eslint/config'
import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

export default defineConfig([
  eslintPluginAstro.configs.recommended,
  {
    name: '@aliexme/eslint-config/astro',
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        project: false,
        projectService: false,
      },
    },
    rules: {
      // The TypeScript project service is disabled for Astro frontmatter above,
      // so type-aware rules from the typescript config must be turned off here.
      ...tseslint.configs.disableTypeChecked.rules,
      'astro/no-unused-css-selector': 'error',
      'astro/prefer-object-class-list': 'error',
    },
  },
])

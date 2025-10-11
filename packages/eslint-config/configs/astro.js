import { defineConfig } from 'eslint/config'
import eslintPluginAstro from 'eslint-plugin-astro'

export default defineConfig([
  eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        project: true,
        projectService: false,
      },
    },
    rules: {
      'astro/no-unused-css-selector': 'error',
      'astro/prefer-object-class-list': 'error',
    },
  },
])

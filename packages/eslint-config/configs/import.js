import { defineConfig } from 'eslint/config'
// @ts-expect-error Could not find a declaration file for module 'eslint-plugin-import'
import importPlugin from 'eslint-plugin-import'

export default defineConfig([
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    name: '@aliexme/eslint-config/import',
    settings: {
      'import/resolver': {
        node: {
          moduleDirectory: ['src/', 'node_modules'],
        },
        typescript: {},
      },
      'import/extensions': ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx', '.vue', '.astro'],
      'import/ignore': ['node_modules'],
    },
    rules: {
      'import/no-useless-path-segments': ['error', { noUselessIndex: false }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object'],
          pathGroups: [
            { pattern: '{react*,vue*,astro*}', group: 'external', position: 'before' },
            { pattern: '{next*,nuxt*}', group: 'external', position: 'before' },
            { pattern: '@aliexme/**', group: 'external', position: 'after' },
            { pattern: '#*', group: 'external', position: 'after' },
            { pattern: './**/{styles,*.styles,*.css,*.scss}', group: 'internal', position: 'before' },
            { pattern: '../**/{styles,*.styles,*.css,*.scss}', group: 'internal', position: 'before' },
            { pattern: '@/**', group: 'internal', position: 'before' },
            { pattern: '~/**', group: 'internal', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          warnOnUnassignedImports: true,
          distinctGroup: false,
        },
      ],
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      'import/no-self-import': 'error',
      'import/no-mutable-exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/namespace': 'off',
    },
  },
])

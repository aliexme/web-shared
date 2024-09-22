import type { Linter } from 'eslint'
import { fixupPluginRules } from '@eslint/compat'
// @ts-expect-error Could not find a declaration file for module 'eslint-plugin-import'
import eslintPluginImport from 'eslint-plugin-import'

import { compat } from '../utils/compat.js'

export default [
  ...compat.extends('plugin:import/typescript'),
  {
    name: '@aliexme/eslint-config/import',
    plugins: {
      import: fixupPluginRules(eslintPluginImport),
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx', '.vue'],
          moduleDirectory: ['src/', 'node_modules'],
        },
      },
      'import/ignore': ['node_modules'],
    },
    rules: {
      'import/no-useless-path-segments': ['error', { noUselessIndex: false }],
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index', 'object'],
          pathGroups: [
            {
              pattern: '@aliexme/**',
              group: 'external',
              position: 'after',
            },
            {
              // Nuxt imports
              pattern: '#{app,components,imports}',
              group: 'external',
              position: 'after',
            },
            {
              pattern: './{styles,*.styles,*.css,*.scss}',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['@aliexme'],
          'newlines-between': 'always',
          warnOnUnassignedImports: true,
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
] satisfies Linter.Config[]

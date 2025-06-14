import tseslint from 'typescript-eslint'
import { createNodeResolver, importX } from 'eslint-plugin-import-x'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'

export default /** @type {import('eslint').Linter.Config[]} */ (
  tseslint.config([
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,
    {
      name: '@aliexme/eslint-config/import',
      settings: {
        'import-x/resolver-next': [
          createNodeResolver({ modules: ['src/', 'node_modules'] }),
          createTypeScriptImportResolver(),
        ],
        'import-x/extensions': [
          '.js',
          '.cjs',
          '.mjs',
          '.jsx',
          '.ts',
          '.cts',
          '.mts',
          '.tsx',
          '.vue',
          '.svelte',
          '.astro',
        ],
        'import-x/ignore': ['node_modules'],
      },
      rules: {
        'import-x/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object'],
            pathGroups: [
              { pattern: '{react*,vue*,svelte*,astro*}', group: 'external', position: 'before' },
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
        'import-x/no-useless-path-segments': ['error', { noUselessIndex: false }],
        'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
        'import-x/no-self-import': 'error',
        'import-x/no-mutable-exports': 'error',
        'import-x/first': 'error',
        'import-x/newline-after-import': 'error',
        'import-x/default': 'off',
        'import-x/named': 'off',
        'import-x/namespace': 'off',
        'import-x/no-named-as-default-member': 'off',
      },
    },
  ])
)

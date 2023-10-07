/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  plugins: ['import'],
  extends: ['plugin:import/recommended'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx'],
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
            pattern: './{styles,*.styles,*.css,*.scss}',
            group: 'internal',
            position: 'before',
          },
        ],
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
}

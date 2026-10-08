import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  stylistic.configs.customize({
    jsx: true,
    arrowParens: true,
    blockSpacing: true,
    braceStyle: '1tbs',
    commaDangle: 'always-multiline',
    indent: 2,
    quoteProps: 'as-needed',
    quotes: 'single',
    semi: false,
  }),
  {
    name: '@aliexme/eslint-config/stylistic',
    rules: {
      '@stylistic/max-len': [
        'error',
        {
          code: 120,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
      '@stylistic/space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/array-bracket-newline': ['error', { multiline: true }],
      '@stylistic/array-element-newline': [
        'error',
        {
          consistent: true,
          multiline: true,
        },
      ],
      '@stylistic/object-curly-newline': [
        'error',
        {
          consistent: true,
          multiline: true,
        },
      ],
      '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: { delimiter: 'none' },
          singleline: { delimiter: 'semi' },
        },
      ],
      '@stylistic/wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
      '@stylistic/space-infix-ops': ['error', { int32Hint: true }],
      '@stylistic/operator-linebreak': [
        'error',
        'before',
        {
          overrides: { '=': 'after' },
        },
      ],
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/spaced-comment': [
        'error',
        'always',
        {
          markers: ['/', '!', '?'],
        },
      ],
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

      // JSX
      '@stylistic/jsx-curly-spacing': ['error', { when: 'never', children: true }],
      '@stylistic/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'proportional-always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
      '@stylistic/jsx-curly-brace-presence': ['error', 'never'],
    },
  },
])

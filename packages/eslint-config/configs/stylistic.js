import stylistic from '@stylistic/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */
export default [
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
    rules: {
      '@stylistic/array-bracket-newline': ['error', { multiline: true }],
      '@stylistic/array-element-newline': [
        'error',
        {
          consistent: true,
          multiline: true,
        },
      ],
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
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
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: { delimiter: 'none' },
          singleline: { delimiter: 'semi' },
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
    },
  },
]

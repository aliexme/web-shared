/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  plugins: ['react'],
  extends: ['plugin:import/react', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'proportional-always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],
    'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-closing-bracket-location': 'error',
    'react/self-closing-comp': 'error',
    'react/no-unused-prop-types': 'error',
  },
  overrides: [
    {
      files: ['**/*.{jsx,tsx}'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
}

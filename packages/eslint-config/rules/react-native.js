/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    'react-native/react-native': true,
  },
  plugins: ['react-native'],
  extends: ['plugin:import/react-native'],
  rules: {
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-raw-text': ['error', { skip: ['Text', 'Button'] }],
    'react-native/no-single-element-style-arrays': 'error',
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
  ],
}

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  plugins: ['prettier'],
  extends: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}

/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', './common'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
    'at-rule-no-deprecated': [true, { ignoreAtRules: ['apply'] }],
  },
}

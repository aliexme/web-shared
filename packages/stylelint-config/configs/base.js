/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', './common'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
  },
}

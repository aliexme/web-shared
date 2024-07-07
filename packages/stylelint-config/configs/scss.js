/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard-scss', './common'],
  rules: {
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
  },
}

/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
    'selector-class-pattern': ['^([a-z][a-zA-Z0-9]*)([-_][a-z0-9]+)*$'],
  },
}

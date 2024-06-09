/** @type {import('stylelint').Config} */
module.exports = {
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
    'selector-class-pattern': ['^([a-z][a-zA-Z0-9]*)([-_][a-z0-9]+)*$'],
  },
}

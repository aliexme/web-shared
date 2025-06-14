/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', './common'],
  rules: {
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
  },
}

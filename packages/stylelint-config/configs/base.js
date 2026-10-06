import { tailwindAtRules } from './tailwind.js'

/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', './common'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: tailwindAtRules }],
    'at-rule-prelude-no-invalid': [true, { ignoreAtRules: ['media', 'apply'] }],
  },
}

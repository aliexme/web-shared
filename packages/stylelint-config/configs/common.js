/** @type {import('stylelint').Config} */
export default {
  rules: {
    'selector-class-pattern': ['^([a-z][a-zA-Z0-9]*)([-_][a-z0-9]+)*$'],
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
  },
}

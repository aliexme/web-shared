/**
 * At-rules of Tailwind CSS that are not known to Stylelint's core rules.
 * Shared by the `base` (as `at-rule-no-unknown` exceptions) and `scss` (as
 * `scss/at-rule-no-unknown` exceptions) presets.
 */
export const tailwindAtRules = [
  'tailwind',
  'theme',
  'source',
  'utility',
  'variant',
  'custom-variant',
  'apply',
  'reference',
  'config',
  'plugin',
]

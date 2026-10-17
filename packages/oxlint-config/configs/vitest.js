import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['vitest'],
  rules: {
    /* correctness */
    'vitest/warn-todo': 'warn',
    'vitest/require-mock-type-parameters': 'off',

    /* style */
    'vitest/prefer-lowercase-title': ['error', { ignoreTopLevelDescribe: true }],
    'vitest/max-expects': 'off',
    'vitest/no-hooks': 'off',
    'vitest/no-importing-vitest-globals': 'off',
    'vitest/padding-around-after-all-blocks': 'off',
    'vitest/prefer-called-once': 'off',
    'vitest/prefer-describe-function-title': 'off',
    'vitest/prefer-expect-assertions': 'off',
  },
})

import { defineConfig } from 'vitest/config'

export default defineConfig({
  oxc: { jsx: { runtime: 'automatic' } },
  test: {
    include: ['**/*.test.ts', '**/*.test.tsx'],
    isolate: false,
    coverage: {
      provider: 'v8',
    },
  },
})

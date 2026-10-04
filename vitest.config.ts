import { defineConfig } from 'vitest/config'

export default defineConfig({
  oxc: { jsx: { runtime: 'automatic' } },
  test: {
    include: ['**/*.test.ts', '**/*.test.tsx'],
    globals: true,
    isolate: false,
    coverage: {
      provider: 'v8',
      exclude: ['**/dist/**'],
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  },
})

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/*.test.ts'],
    isolate: false,
    coverage: {
      provider: 'v8',
    },
  },
})

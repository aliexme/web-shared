import { defineLibConfig } from '../../vite-lib.config'

export default defineLibConfig({
  build: {
    lib: {
      name: '@aliexme/js-utils',
      entry: './src/index.ts',
    },
  },
})

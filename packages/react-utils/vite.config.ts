import { defineLibConfig } from '../../vite-lib.config'

export default defineLibConfig({
  build: {
    lib: {
      name: '@aliexme/react-utils',
      entry: './src/index.ts',
    },
  },
})
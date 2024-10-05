import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      name: '@aliexme/js-utils',
      entry: './src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: './src',
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [dts()],
})

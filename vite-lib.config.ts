import { defineConfig, mergeConfig, type UserConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { externalizeDeps } from 'vite-plugin-externalize-deps'

const defaultLibConfig = defineConfig({
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
  plugins: [
    dts({
      tsconfigPath: './tsconfig.build.json',
      entryRoot: './src',
      insertTypesEntry: true,
    }),
    externalizeDeps(),
  ],
})

export const defineLibConfig = (config: UserConfig = {}): UserConfig => {
  return mergeConfig(defaultLibConfig, config)
}

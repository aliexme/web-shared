/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  verbose: true,
  projects: [
    {
      preset: 'ts-jest',
      testEnvironment: 'node',
      displayName: 'js-utils',
      testMatch: ['<rootDir>/packages/js-utils/**/*.spec.ts'],
    },
  ],
}

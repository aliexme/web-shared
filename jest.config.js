/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
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

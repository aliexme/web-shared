module.exports = {
  '*.{js,jsx,.mjs,ts,tsx}': ['eslint', () => 'tsc -p tsconfig.json --noEmit'],
  '*.{css,.scss}': ['stylelint'],
}

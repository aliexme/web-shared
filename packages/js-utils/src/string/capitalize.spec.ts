import { capitalize } from './capitalize'

describe('capitalize', () => {
  it('should capitalize first letter', () => {
    const str = 'lower'
    const result = capitalize(str)

    expect(result).toBe('Lower')
  })

  it('should capitalize first letter in multiple words', () => {
    const str = 'word1 word2'
    const result = capitalize(str)

    expect(result).toBe('Word1 word2')
  })

  it('should return empty string', () => {
    const str = ''
    const result = capitalize(str)

    expect(result).toBe('')
  })
})

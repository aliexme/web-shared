import { secureString } from './secureString'

describe('secureString', () => {
  it('should secure string', () => {
    const str = '0123456789'
    const result = secureString(str)

    expect(result).toBe('****6789')
  })

  it('should secure string and maxInsecureChars = 2', () => {
    const str = '0123456789'
    const result = secureString(str, { maxInsecureChars: 2 })

    expect(result).toBe('****89')
  })

  it('should secure string and maxInsecureChars = 0', () => {
    const str = '0123456789'
    const result = secureString(str, { maxInsecureChars: 0 })

    expect(result).toBe('****')
  })

  it('should not secure empty string', () => {
    const str = ''
    const result = secureString(str)

    expect(result).toBe('')
  })

  it('should secure string consisting of one character', () => {
    const str = '0'
    const result = secureString(str)

    expect(result).toBe('****')
  })

  it('should secure string consisting of two characters', () => {
    const str = '01'
    const result = secureString(str)

    expect(result).toBe('****1')
  })

  it('should secure string consisting of three characters', () => {
    const str = '012'
    const result = secureString(str)

    expect(result).toBe('****2')
  })

  it('should secure string consisting of four characters', () => {
    const str = '0123'
    const result = secureString(str)

    expect(result).toBe('****23')
  })

  it('should secure string consisting of five characters', () => {
    const str = '01234'
    const result = secureString(str)

    expect(result).toBe('****34')
  })
})

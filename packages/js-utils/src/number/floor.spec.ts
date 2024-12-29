import { floor } from './floor'

describe('floor', () => {
  it('should return number without fractional part', () => {
    const value = 1.2645
    const result = floor(value)
    expect(result).toBe(1)
  })

  it('should return number with one decimal place', () => {
    const value = 1.2645
    const result = floor(value, 1)
    expect(result).toBe(1.2)
  })

  it('should return same number', () => {
    const value = 1.2645
    const result = floor(value, 10)
    expect(result).toBe(value)
  })
})

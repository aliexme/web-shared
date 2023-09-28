import { round } from './round'

describe('round', () => {
  it('should return number without fractional part', () => {
    const value = 1.2345
    const result = round(value)
    expect(result).toBe(1)
  })

  it('should return number with one decimal place', () => {
    const value = 1.2345
    const result = round(value, { precision: 1 })
    expect(result).toBe(1.2)
  })

  it('should return same number', () => {
    const value = 1.2345
    const result = round(value, { precision: 10 })
    expect(result).toBe(value)
  })
})

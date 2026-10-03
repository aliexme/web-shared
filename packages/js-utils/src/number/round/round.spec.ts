import { round } from './round'

describe('round', () => {
  it('should return number without fractional part', () => {
    const value = 1.2645
    const result = round(value)
    expect(result).toBe(1)
  })

  it('should return number with one decimal place', () => {
    const value = 1.2645
    const result = round(value, 1)
    expect(result).toBe(1.3)
  })

  it('should return same number', () => {
    const value = 1.2645
    const result = round(value, 10)
    expect(result).toBe(value)
  })
})

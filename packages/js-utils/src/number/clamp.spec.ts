import { clamp } from './clamp'

describe('clamp', () => {
  it('should return same number', () => {
    const value = 10
    const min = 0
    const max = 100
    const result = clamp(value, min, max)
    expect(result).toBe(value)
  })

  it('should return min', () => {
    const value = 10
    const min = 20
    const max = 100
    const result = clamp(value, min, max)
    expect(result).toBe(min)
  })

  it('should return max', () => {
    const value = 10
    const min = 0
    const max = 5
    const result = clamp(value, min, max)
    expect(result).toBe(max)
  })
})

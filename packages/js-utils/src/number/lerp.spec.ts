import { lerp } from './lerp'

describe('lerp', () => {
  it('should return interpolated value', () => {
    const result = lerp(100, 200, 0.1)
    expect(result).toBe(110)
  })

  it('should return start value if alpha is 0', () => {
    const result = lerp(100, 200, 0)
    expect(result).toBe(100)
  })

  it('should return end value if alpha is 1', () => {
    const result = lerp(100, 200, 1)
    expect(result).toBe(200)
  })
})

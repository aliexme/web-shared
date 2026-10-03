import { seededRandom } from './seededRandom'

describe('seededRandom', () => {
  it('should return identical sequences for the same seed', () => {
    const first = seededRandom(42)
    const second = seededRandom(42)

    const firstSequence = Array.from({ length: 10 }, () => first())
    const secondSequence = Array.from({ length: 10 }, () => second())

    expect(firstSequence).toEqual(secondSequence)
  })

  it('should return different sequences for different seeds', () => {
    const first = seededRandom(1)
    const second = seededRandom(2)

    const firstSequence = Array.from({ length: 10 }, () => first())
    const secondSequence = Array.from({ length: 10 }, () => second())

    expect(firstSequence).not.toEqual(secondSequence)
  })

  it('should use 0 as default seed', () => {
    const withDefault = seededRandom()
    const explicit = seededRandom(0)

    const defaultSequence = Array.from({ length: 10 }, () => withDefault())
    const explicitSequence = Array.from({ length: 10 }, () => explicit())

    expect(defaultSequence).toEqual(explicitSequence)
  })

  it('should return values in [0, 1) range', () => {
    const random = seededRandom(42)

    for (let i = 0; i < 100; i++) {
      const value = random()

      expect(value).toBeGreaterThanOrEqual(0)
      expect(value).toBeLessThan(1)
    }
  })

  it('should return different values on successive calls', () => {
    const random = seededRandom(42)
    const sequence = Array.from({ length: 10 }, () => random())

    expect(new Set(sequence).size).toBeGreaterThan(1)
  })
})

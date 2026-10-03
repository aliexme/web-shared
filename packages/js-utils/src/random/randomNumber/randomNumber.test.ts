import { afterEach, describe, expect, it, vi } from 'vitest'

import { randomNumber } from './randomNumber'

describe('randomNumber', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return random number', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5)

    const result = randomNumber()
    expect(result).toBe(499_999.5)
  })

  it('should return random number in [from,to] range', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5)

    const result = randomNumber(10, 20)
    expect(result).toBe(15)
  })

  it('should return random number with precision', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5)

    const result = randomNumber(10, 20, { precision: 0 })
    expect(result).toBe(15)
  })

  it('should include max for upper boundary random value', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.9999)

    const result = randomNumber(10, 20)
    expect(result).toBe(20)
  })

  it('should return min for lower boundary random value', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)

    const result = randomNumber(10, 20)
    expect(result).toBe(10)
  })
})

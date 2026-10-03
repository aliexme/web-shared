import { afterEach, describe, expect, it, vi } from 'vitest'

import { randomInt } from './randomInt'

describe('randomInt', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return random int', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5)

    const result = randomInt()
    expect(result).toBe(500000)
  })

  it('should return random int in [from,to] range', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5)

    const result = randomInt(10, 20)
    expect(result).toBe(15)
  })
})

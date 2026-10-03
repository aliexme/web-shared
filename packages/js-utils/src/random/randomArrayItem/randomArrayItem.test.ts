import { afterEach, describe, expect, it, vi } from 'vitest'

import { randomArrayItem } from './randomArrayItem'

describe('randomArrayItem', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return random item', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5)

    const result = randomArrayItem([1, 2, 3, 4])
    expect(result).toBe(3)
  })
})

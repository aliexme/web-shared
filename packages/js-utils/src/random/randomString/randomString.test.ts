import { afterEach, describe, expect, it, vi } from 'vitest'

import { seededRandom } from '../seededRandom'
import { randomString } from './randomString'

describe('randomString', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return random string', () => {
    vi.spyOn(Math, 'random').mockImplementation(seededRandom())

    const result = randomString()
    expect(result).toBe('AdO6Pc^6-1vC*4C,')
  })

  it('should return random string of given length', () => {
    vi.spyOn(Math, 'random').mockImplementation(seededRandom())

    const result = randomString({ length: 5 })
    expect(result).toBe('AdO6P')
  })
})

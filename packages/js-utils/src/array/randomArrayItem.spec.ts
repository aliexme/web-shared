import seedrandom from 'seedrandom'

import { randomArrayItem } from './randomArrayItem'

describe('randomArrayItem', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should return random item', () => {
    jest.spyOn(Math, 'random').mockImplementation(seedrandom(''))

    const result = randomArrayItem([1, 2, 3, 4])
    expect(result).toBe(1)
  })
})

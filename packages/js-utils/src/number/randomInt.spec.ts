import seedrandom from 'seedrandom'

import { randomInt } from './randomInt'

describe('randomInt', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should return random int', () => {
    jest.spyOn(Math, 'random').mockImplementation(seedrandom(''))

    const result = randomInt()
    expect(result).toBe(231440)
  })

  it('should return random int in [from,to] range', () => {
    jest.spyOn(Math, 'random').mockImplementation(seedrandom(''))

    const result = randomInt(10, 20)
    expect(result).toBe(12)
  })
})

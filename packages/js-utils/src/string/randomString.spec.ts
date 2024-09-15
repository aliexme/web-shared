import seedrandom from 'seedrandom'

import { randomString } from './randomString'

describe('randomString', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should return random string', () => {
    jest.spyOn(Math, 'random').mockImplementation(seedrandom(''))

    const result = randomString()
    expect(result).toBe('h^q@.s99Ruu$.0Ch')
  })

  it('should return random string of given length', () => {
    jest.spyOn(Math, 'random').mockImplementation(seedrandom(''))

    const result = randomString({ length: 5 })
    expect(result).toBe('h^q@.')
  })
})

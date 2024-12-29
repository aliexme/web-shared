import seedrandom from 'seedrandom'

import { randomNumber } from './randomNumber'

describe('randomNumber', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should return random number', () => {
    jest.spyOn(Math, 'random').mockImplementation(seedrandom(''))

    const result = randomNumber()
    expect(result).toBe(231440.08)
  })

  it('should return random number in [from,to] range', () => {
    jest.spyOn(Math, 'random').mockImplementation(seedrandom(''))

    const result = randomNumber(10, 20)
    expect(result).toBe(12.54)
  })

  it('should return random number with precision', () => {
    jest.spyOn(Math, 'random').mockImplementation(seedrandom(''))

    const result = randomNumber(10, 20, { precision: 0 })
    expect(result).toBe(12)
  })
})

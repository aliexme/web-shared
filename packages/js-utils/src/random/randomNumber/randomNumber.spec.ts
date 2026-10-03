import { randomNumber } from './randomNumber'

describe('randomNumber', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should return random number', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.5)

    const result = randomNumber()
    expect(result).toBe(499_999.5)
  })

  it('should return random number in [from,to] range', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.5)

    const result = randomNumber(10, 20)
    expect(result).toBe(15)
  })

  it('should return random number with precision', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.5)

    const result = randomNumber(10, 20, { precision: 0 })
    expect(result).toBe(15)
  })

  it('should include max for upper boundary random value', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.9999)

    const result = randomNumber(10, 20)
    expect(result).toBe(20)
  })

  it('should return min for lower boundary random value', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0)

    const result = randomNumber(10, 20)
    expect(result).toBe(10)
  })
})

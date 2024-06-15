import { randomInt } from './randomInt'

describe('randomInt', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should return random number', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.1)
    const result = randomInt()
    expect(result).toBe(100000)
  })

  it('should return random number in [from,to] range', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.1)
    const result = randomInt({ from: 10, to: 20 })
    expect(result).toBe(11)
  })
})

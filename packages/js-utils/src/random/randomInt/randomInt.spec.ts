import { randomInt } from './randomInt'

describe('randomInt', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should return random int', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.5)

    const result = randomInt()
    expect(result).toBe(500000)
  })

  it('should return random int in [from,to] range', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.5)

    const result = randomInt(10, 20)
    expect(result).toBe(15)
  })
})

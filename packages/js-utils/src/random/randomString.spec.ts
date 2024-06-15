import { randomString } from './randomString'

const mockMathRandom = (seed: number = 1) => {
  const mock = jest.spyOn(Math, 'random')

  for (let i = 0; i < 100; i++) {
    const value = ((i * seed) % 10) / 10
    mock.mockReturnValueOnce(value)
  }
}

describe('randomString', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should return random string', () => {
    mockMathRandom()

    const result = randomString()
    expect(result).toBe('chN7*chN7*chN7*c')
  })

  it('should return random string of given length', () => {
    mockMathRandom()

    const result = randomString({ length: 3 })
    expect(result).toBe('chN')
  })
})

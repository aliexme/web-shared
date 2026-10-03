import { randomString } from './randomString'
import { seededRandom } from './seededRandom'

describe('randomString', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should return random string', () => {
    jest.spyOn(Math, 'random').mockImplementation(seededRandom())

    const result = randomString()
    expect(result).toBe('AdO6Pc^6-1vC*4C,')
  })

  it('should return random string of given length', () => {
    jest.spyOn(Math, 'random').mockImplementation(seededRandom())

    const result = randomString({ length: 5 })
    expect(result).toBe('AdO6P')
  })
})

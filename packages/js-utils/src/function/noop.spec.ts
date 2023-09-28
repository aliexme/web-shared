import { noop } from './noop'

describe('noop', () => {
  it('should return void', () => {
    const result = noop()
    expect(result).toBeUndefined()
  })
})

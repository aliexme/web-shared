import { noop } from '../function'
import { asyncify } from './asyncify'

describe('asyncify', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('should make function async', async () => {
    jest.useFakeTimers()

    const func = jest.fn(noop)
    const asyncFunc = asyncify(func)

    asyncFunc()
    expect(func).toBeCalledTimes(0)

    jest.advanceTimersByTime(100)
    expect(func).toBeCalledTimes(1)
  })

  it('should make void function async', async () => {
    const func = jest.fn(noop)
    const asyncFunc = asyncify(func)

    await expect(asyncFunc()).resolves.toBeUndefined()
  })

  it('should make not void function async', async () => {
    const func = jest.fn((num: number) => num + 42)
    const asyncFunc = asyncify(func)

    await expect(asyncFunc(42)).resolves.toBe(84)
  })
})

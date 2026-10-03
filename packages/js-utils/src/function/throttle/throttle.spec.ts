import { noop } from '../noop'
import { throttle } from './throttle'

describe('throttle', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('should throttle function', () => {
    jest.useFakeTimers()

    const func = jest.fn(noop)
    const throttledFunc = throttle(func, 1000)

    throttledFunc()
    throttledFunc()
    throttledFunc()
    expect(func).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(600)
    throttledFunc()
    expect(func).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(1)
    throttledFunc()
    expect(func).toHaveBeenCalledTimes(2)

    jest.advanceTimersByTime(1200)
    expect(func).toHaveBeenCalledTimes(2)
  })

  it('should throttle function with trailing', () => {
    jest.useFakeTimers()

    const func = jest.fn(noop)
    const throttledFunc = throttle(func, 1000, { withTrailing: true })

    throttledFunc()
    throttledFunc()
    throttledFunc()
    expect(func).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(600)
    throttledFunc()
    expect(func).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(1200)
    expect(func).toHaveBeenCalledTimes(2)
  })

  it('should accept function with typed parameters', () => {
    jest.useFakeTimers()

    const func = jest.fn((name: string, count: number) => `${name}-${count}`)
    const throttledFunc = throttle(func, 1000)

    throttledFunc('test', 2)
    expect(func).toHaveBeenCalledTimes(1)
    expect(func).toHaveBeenCalledWith('test', 2)
  })

  it('should cancel throttled function', () => {
    jest.useFakeTimers()

    const func = jest.fn(noop)
    const throttledFunc = throttle(func, 1000, { withTrailing: true })

    throttledFunc()
    throttledFunc()
    throttledFunc()
    expect(func).toHaveBeenCalledTimes(1)

    throttledFunc.cancel()
    throttledFunc()
    expect(func).toHaveBeenCalledTimes(2)
  })
})

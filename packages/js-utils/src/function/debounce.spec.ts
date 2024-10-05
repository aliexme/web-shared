import { noop } from './noop'
import { debounce } from './debounce'

describe('debounce', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('should debounce function', () => {
    jest.useFakeTimers()

    const func = jest.fn(noop)
    const debouncedFunc = debounce(func, 1000)

    debouncedFunc()
    debouncedFunc()
    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(600)
    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(1)
  })

  it('should cancel debounced function', () => {
    jest.useFakeTimers()

    const func = jest.fn(noop)
    const debouncedFunc = debounce(func, 1000)

    debouncedFunc()
    debouncedFunc()
    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(0)

    debouncedFunc.cancel()
    jest.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(0)
  })

  it('should debounce function with max wait time', () => {
    jest.useFakeTimers()

    const func = jest.fn(noop)
    const debouncedFunc = debounce(func, 1000, { maxWait: 1500 })

    debouncedFunc()
    debouncedFunc()
    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(600)
    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(600)
    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(1)
  })

  it('should debounce function with leading', () => {
    jest.useFakeTimers()

    const func = jest.fn(noop)
    const debouncedFunc = debounce(func, 1000, { leading: true })

    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(1200)
    expect(func).toHaveBeenCalledTimes(1)

    debouncedFunc()
    debouncedFunc()
    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(2)

    jest.advanceTimersByTime(600)
    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(2)

    jest.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(2)

    jest.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(3)
  })
})

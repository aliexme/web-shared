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
})

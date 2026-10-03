import { afterEach, describe, expect, it, vi } from 'vitest'

import { noop } from '../noop'
import { throttle } from './throttle'

describe('throttle', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('should throttle function', () => {
    vi.useFakeTimers()

    const func = vi.fn(noop)
    const throttledFunc = throttle(func, 1000)

    throttledFunc()
    throttledFunc()
    throttledFunc()
    expect(func).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(600)
    throttledFunc()
    expect(func).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(1)
    throttledFunc()
    expect(func).toHaveBeenCalledTimes(2)

    vi.advanceTimersByTime(1200)
    expect(func).toHaveBeenCalledTimes(2)
  })

  it('should throttle function with trailing', () => {
    vi.useFakeTimers()

    const func = vi.fn(noop)
    const throttledFunc = throttle(func, 1000, { withTrailing: true })

    throttledFunc()
    throttledFunc()
    throttledFunc()
    expect(func).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(600)
    throttledFunc()
    expect(func).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(1200)
    expect(func).toHaveBeenCalledTimes(2)
  })

  it('should accept function with typed parameters', () => {
    vi.useFakeTimers()

    const func = vi.fn((name: string, count: number) => `${name}-${count}`)
    const throttledFunc = throttle(func, 1000)

    throttledFunc('test', 2)
    expect(func).toHaveBeenCalledTimes(1)
    expect(func).toHaveBeenCalledWith('test', 2)
  })

  it('should cancel throttled function before first call', () => {
    vi.useFakeTimers()

    const func = vi.fn(noop)
    const throttledFunc = throttle(func, 1000)

    throttledFunc.cancel()

    vi.advanceTimersByTime(2000)
    expect(func).toHaveBeenCalledTimes(0)
  })

  it('should cancel throttled function', () => {
    vi.useFakeTimers()

    const func = vi.fn(noop)
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

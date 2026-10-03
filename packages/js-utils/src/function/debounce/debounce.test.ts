import { afterEach, describe, expect, it, vi } from 'vitest'

import { noop } from '../noop'
import { debounce } from './debounce'

describe('debounce', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('should debounce function', () => {
    vi.useFakeTimers()

    const func = vi.fn(noop)
    const debouncedFunc = debounce(func, 1000)

    debouncedFunc()
    debouncedFunc()
    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(0)

    vi.advanceTimersByTime(600)
    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(0)

    vi.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(0)

    vi.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(1)
  })

  it('should debounce function with max wait time', () => {
    vi.useFakeTimers()

    const func = vi.fn(noop)
    const debouncedFunc = debounce(func, 1000, { maxWait: 1500 })

    debouncedFunc()

    vi.advanceTimersByTime(600)
    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(0)

    vi.advanceTimersByTime(600)
    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(0)

    vi.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(1)
  })

  it('should debounce function with leading', () => {
    vi.useFakeTimers()

    const func = vi.fn(noop)
    const debouncedFunc = debounce(func, 1000, { withLeading: true })

    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(1200)
    expect(func).toHaveBeenCalledTimes(1)

    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(2)

    vi.advanceTimersByTime(600)
    debouncedFunc()
    expect(func).toHaveBeenCalledTimes(2)

    vi.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(2)

    vi.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(3)
  })

  it('should accept function with typed parameters', () => {
    vi.useFakeTimers()

    const func = vi.fn((name: string, count: number) => `${name}-${count}`)
    const debouncedFunc = debounce(func, 1000)

    debouncedFunc('test', 2)
    expect(func).toHaveBeenCalledTimes(0)

    vi.advanceTimersByTime(1000)
    expect(func).toHaveBeenCalledTimes(1)
    expect(func).toHaveBeenCalledWith('test', 2)
  })

  it('should cancel debounced function', () => {
    vi.useFakeTimers()

    const func = vi.fn(noop)
    const debouncedFunc = debounce(func, 1000)

    debouncedFunc()

    vi.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(0)

    debouncedFunc.cancel()
    vi.advanceTimersByTime(600)
    expect(func).toHaveBeenCalledTimes(0)
  })
})

import { getEventListeners } from 'node:events'
import { setImmediate } from 'node:timers'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { noop } from '../../function/noop'
import { sleep } from './sleep'

describe('sleep', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('should wait "ms" millisecond', async () => {
    vi.useFakeTimers()

    const callback = vi.fn(noop)

    sleep(1000).then(callback)

    expect(callback).toHaveBeenCalledTimes(0)

    vi.advanceTimersByTime(600)
    await new Promise(setImmediate)
    expect(callback).toHaveBeenCalledTimes(0)

    vi.advanceTimersByTime(600)
    await new Promise(setImmediate)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should reject immediately if signal is already aborted', async () => {
    vi.useFakeTimers()

    const controller = new AbortController()
    controller.abort()

    const promise = sleep(1000, { signal: controller.signal })

    await expect(promise).rejects.toBe(controller.signal.reason)
    vi.advanceTimersByTime(1000)
  })

  it('should reject with abort reason if aborted during sleep', async () => {
    vi.useFakeTimers()

    const controller = new AbortController()
    const promise = sleep(1000, { signal: controller.signal })

    vi.advanceTimersByTime(500)
    controller.abort()

    await expect(promise).rejects.toBe(controller.signal.reason)
  })

  it('should resolve if not aborted during sleep', async () => {
    vi.useFakeTimers()

    const controller = new AbortController()
    const callback = vi.fn(noop)

    sleep(1000, { signal: controller.signal }).then(callback)

    vi.advanceTimersByTime(1000)
    await new Promise(setImmediate)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should remove abort listener after resolve', async () => {
    vi.useFakeTimers()

    const controller = new AbortController()
    const callback = vi.fn(noop)

    sleep(1000, { signal: controller.signal }).then(callback)

    vi.advanceTimersByTime(1000)
    await new Promise(setImmediate)
    expect(callback).toHaveBeenCalledTimes(1)
    expect(getEventListeners(controller.signal, 'abort')).toHaveLength(0)

    controller.abort()
  })
})

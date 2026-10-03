import { getEventListeners } from 'node:events'
import { setImmediate } from 'node:timers'

import { noop } from '../../function/noop'
import { sleep } from './sleep'

describe('sleep', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('should wait "ms" millisecond', async () => {
    jest.useFakeTimers()

    const callback = jest.fn(noop)

    sleep(1000).then(callback)

    expect(callback).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(600)
    await new Promise(setImmediate)
    expect(callback).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(600)
    await new Promise(setImmediate)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should reject immediately if signal is already aborted', async () => {
    jest.useFakeTimers()

    const controller = new AbortController()
    controller.abort()

    const promise = sleep(1000, { signal: controller.signal })

    await expect(promise).rejects.toBe(controller.signal.reason)
    jest.advanceTimersByTime(1000)
  })

  it('should reject with abort reason if aborted during sleep', async () => {
    jest.useFakeTimers()

    const controller = new AbortController()
    const promise = sleep(1000, { signal: controller.signal })

    jest.advanceTimersByTime(500)
    controller.abort()

    await expect(promise).rejects.toBe(controller.signal.reason)
  })

  it('should resolve if not aborted during sleep', async () => {
    jest.useFakeTimers()

    const controller = new AbortController()
    const callback = jest.fn(noop)

    sleep(1000, { signal: controller.signal }).then(callback)

    jest.advanceTimersByTime(1000)
    await new Promise(setImmediate)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should remove abort listener after resolve', async () => {
    jest.useFakeTimers()

    const controller = new AbortController()
    const callback = jest.fn(noop)

    sleep(1000, { signal: controller.signal }).then(callback)

    jest.advanceTimersByTime(1000)
    await new Promise(setImmediate)
    expect(callback).toHaveBeenCalledTimes(1)
    expect(getEventListeners(controller.signal, 'abort')).toHaveLength(0)

    controller.abort()
  })
})

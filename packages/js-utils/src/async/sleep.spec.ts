import { setImmediate } from 'node:timers'

import { noop } from '../function'
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
})

/** Options for the sleep function */
export interface SleepOptions {
  /** Signal that rejects the sleep promise early */
  signal?: AbortSignal
}

/**
 * Returns a promise that resolves after the given delay, or rejects
 * when the abort signal fires.
 *
 * @param ms - Delay in milliseconds
 * @param options - Sleep options
 * @returns Promise that resolves after the delay
 *
 * @example
 * await sleep(1000)
 */
export const sleep = (ms: number, options: SleepOptions = {}): Promise<void> => {
  const { signal } = options

  return new Promise((resolve, reject) => {
    if (!signal) {
      setTimeout(resolve, ms)
      return
    }

    if (signal.aborted) {
      reject(signal.reason)
      return
    }

    const onAbort = () => {
      clearTimeout(timerId)
      reject(signal.reason)
    }

    const timerId = setTimeout(() => {
      signal.removeEventListener('abort', onAbort)
      resolve()
    }, ms)

    signal.addEventListener('abort', onAbort, { once: true })
  })
}

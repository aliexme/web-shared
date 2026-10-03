export interface SleepOptions {
  signal?: AbortSignal
}

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

export interface SleepOptions {
  signal?: AbortSignal
}

export const sleep = (ms: number, options: SleepOptions = {}): Promise<void> => {
  const { signal } = options

  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(signal.reason)
      return
    }

    const timerId = setTimeout(resolve, ms)

    signal?.addEventListener(
      'abort',
      () => {
        clearTimeout(timerId)
        reject(signal.reason)
      },
      { once: true },
    )
  })
}

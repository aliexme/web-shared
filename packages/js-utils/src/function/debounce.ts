export interface DebouncedFunc<T extends (...args: unknown[]) => unknown> {
  (...args: Parameters<T>): void
  cancel(): void
}

export const debounce = <T extends (...args: unknown[]) => unknown>(func: T, wait: number): DebouncedFunc<T> => {
  let timeoutId: ReturnType<typeof setTimeout> | null

  const cancelTimeout = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  }

  const debouncedFunc: DebouncedFunc<T> = (...args) => {
    cancelTimeout()

    timeoutId = setTimeout(() => {
      func(...args)
    }, wait)
  }

  debouncedFunc.cancel = cancelTimeout

  return debouncedFunc
}

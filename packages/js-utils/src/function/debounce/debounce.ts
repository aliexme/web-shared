import { clamp } from '../../number/clamp'

/** Debounced function with a method to cancel pending invocation */
export interface DebouncedFunc<T extends (...args: never[]) => unknown> {
  (...args: Parameters<T>): void
  cancel(): void
}

/** Options for the debounce function */
export interface DebounceOptions {
  /** Maximum time in milliseconds the function is allowed to be delayed */
  maxWait?: number
  /** Invoke the function on the leading edge instead of the trailing edge */
  withLeading?: boolean
}

/**
 * Creates a debounced function that delays invoking `func` until `delay`
 * milliseconds have passed since the last call.
 *
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @param options - Debounce options
 * @returns Debounced function with a `cancel` method
 *
 * @example
 * const debounced = debounce(() => save(input), 300)
 */
export const debounce = <T extends (...args: never[]) => unknown>(
  func: T,
  delay: number,
  options: DebounceOptions = {},
): DebouncedFunc<T> => {
  const { maxWait, withLeading = false } = options

  let timerId: ReturnType<typeof setTimeout> | null = null
  let firstCallTime: number | null = null

  const resetTimer = () => {
    if (timerId !== null) {
      clearTimeout(timerId)
      timerId = null
    }
  }

  const resetFirstCall = () => {
    firstCallTime = null
  }

  const cancelFuncCall = () => {
    resetTimer()
    resetFirstCall()
  }

  const debouncedFunc: DebouncedFunc<T> = (...args) => {
    resetTimer()

    const now = Date.now()
    const timeSinceFirstCall = firstCallTime ? now - firstCallTime : 0
    const remainingWait = maxWait ? clamp(maxWait - timeSinceFirstCall, 0, delay) : delay

    if (!firstCallTime) {
      firstCallTime = now

      if (withLeading) {
        func(...args)
        timerId = setTimeout(resetFirstCall, remainingWait)
        return
      }
    }

    timerId = setTimeout(() => {
      func(...args)
      resetFirstCall()
    }, remainingWait)
  }

  debouncedFunc.cancel = cancelFuncCall

  return debouncedFunc
}

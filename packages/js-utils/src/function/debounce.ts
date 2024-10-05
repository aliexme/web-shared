import { clamp } from '../number/clamp'

export interface DebouncedFunc<T extends (...args: unknown[]) => unknown> {
  (...args: Parameters<T>): void
  cancel(): void
}

export interface DebounceOptions {
  maxWait?: number
  withLeading?: boolean
}

export const debounce = <T extends (...args: unknown[]) => unknown>(
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

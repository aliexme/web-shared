/** Throttled function with a method to cancel pending invocation */
export interface ThrottledFunc<T extends (...args: never[]) => unknown> {
  (...args: Parameters<T>): void
  cancel(): void
}

/** Options for the throttle function */
export interface ThrottleOptions {
  /** Invoke the function with the last received args after the cooldown ends */
  withTrailing?: boolean
}

/**
 * Creates a throttled function that invokes `func` at most once per `delay`
 * milliseconds.
 *
 * @param func - Function to throttle
 * @param delay - Cooldown in milliseconds
 * @param options - Throttle options
 * @returns Throttled function with a `cancel` method
 *
 * @example
 * const throttled = throttle(() => onScroll(event), 100)
 */
export const throttle = <T extends (...args: never[]) => unknown>(
  func: T,
  delay: number,
  options: ThrottleOptions = {},
): ThrottledFunc<T> => {
  const { withTrailing = false } = options

  let funcTimerId: ReturnType<typeof setTimeout> | null = null
  let cooldownTimerId: ReturnType<typeof setTimeout> | null = null
  let isCooldown = false

  const resetFuncTimer = () => {
    if (funcTimerId !== null) {
      clearTimeout(funcTimerId)
      funcTimerId = null
    }
  }

  const resetCooldownTimer = () => {
    if (cooldownTimerId !== null) {
      clearTimeout(cooldownTimerId)
      cooldownTimerId = null
    }
  }

  const resetCooldown = () => {
    isCooldown = false
  }

  const cancelFuncCall = () => {
    resetFuncTimer()
    resetCooldownTimer()
    resetCooldown()
  }

  const throttledFunc: ThrottledFunc<T> = (...args) => {
    if (isCooldown) {
      if (withTrailing) {
        resetFuncTimer()
        funcTimerId = setTimeout(() => func(...args), delay)
      }

      return
    }

    resetFuncTimer()
    func(...args)
    isCooldown = true
    cooldownTimerId = setTimeout(resetCooldown, delay)
  }

  throttledFunc.cancel = cancelFuncCall

  return throttledFunc
}

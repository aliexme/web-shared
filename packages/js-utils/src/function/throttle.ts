export interface ThrottledFunc<T extends (...args: unknown[]) => unknown> {
  (...args: Parameters<T>): void
  cancel(): void
}

export interface ThrottleOptions {
  withTrailing?: boolean
}

export const throttle = <T extends (...args: unknown[]) => unknown>(
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

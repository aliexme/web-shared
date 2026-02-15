import { useEffect } from 'react'

export interface UseEventListenerOptions extends AddEventListenerOptions {
  enabled?: boolean
}

export const useEventListener = (
  target: EventTarget,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options: UseEventListenerOptions = {},
) => {
  const { enabled = true, ...listenerOptions } = options

  // biome-ignore lint/correctness/useExhaustiveDependencies: ignore
  useEffect(() => {
    if (!enabled) {
      return
    }

    target.addEventListener(type, listener, listenerOptions)

    return () => {
      target.removeEventListener(type, listener, listenerOptions)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, type, listener, enabled])
}

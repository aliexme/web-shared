import { useEffect } from 'react'

import { useValueRef } from './useValueRef'

export interface UseEventListenerOptions extends AddEventListenerOptions {
  enabled?: boolean
}

export const useEventListener = (
  target: EventTarget,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options: UseEventListenerOptions = {},
) => {
  const { enabled = true, capture, passive, once, signal } = options
  const listenerRef = useValueRef(listener)

  useEffect(() => {
    if (!enabled) {
      return
    }

    const stableListener: EventListener = (event) => {
      const currentListener = listenerRef.current

      if (typeof currentListener === 'function') {
        currentListener(event)
      } else {
        currentListener.handleEvent(event)
      }
    }

    target.addEventListener(type, stableListener, { capture, passive, once, signal })

    return () => {
      target.removeEventListener(type, stableListener, { capture })
    }
  }, [target, type, enabled, capture, passive, once, signal, listenerRef])
}

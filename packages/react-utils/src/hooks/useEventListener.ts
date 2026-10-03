import { useEffect } from 'react'

import { useValueRef } from './useValueRef'

/** Options for the useEventListener hook; extends AddEventListenerOptions */
export interface UseEventListenerOptions extends AddEventListenerOptions {
  /** Subscribe only when true (default true) */
  enabled?: boolean
}

/**
 * Subscribes to an event on an arbitrary EventTarget and unsubscribes on
 * cleanup.
 *
 * The listener is held in a ref: inline listeners do not cause
 * re-subscription on every render, and the latest listener is always
 * invoked. Changing `target`, `type`, `enabled` or any of the listener
 * options (`capture`, `passive`, `once`, `signal`) re-subscribes with the
 * new settings.
 *
 * @param target - EventTarget to subscribe to (e.g. window, document, element)
 * @param type - Event type to listen for
 * @param listener - Listener function or an object with handleEvent
 * @param options - Subscription options
 *
 * @example
 * useEventListener(window, 'resize', () => recalculateLayout())
 */
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

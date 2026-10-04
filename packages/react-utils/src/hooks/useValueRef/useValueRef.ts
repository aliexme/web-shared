import { type RefObject, useEffect, useRef } from 'react'

/**
 * Keeps a ref to the latest committed value.
 *
 * The ref is updated in an effect after every commit, so callbacks and
 * event handlers read the latest value without causing re-renders or
 * re-subscriptions. Unlike `useEffectEvent` the ref can be read from
 * anywhere, not only from inside effects.
 *
 * @param value - Value to track
 * @returns Ref object whose `current` always holds the latest committed value
 *
 * @example
 * const handlerRef = useValueRef(handler)
 * useEventListener(window, 'resize', () => handlerRef.current())
 */
export const useValueRef = <T>(value: T): RefObject<T> => {
  const ref = useRef<T>(value)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref
}

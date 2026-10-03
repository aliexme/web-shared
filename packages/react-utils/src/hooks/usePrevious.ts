/* eslint-disable react-hooks/refs */
import { useEffect, useRef } from 'react'

/**
 * Returns the value from the previous render.
 *
 * On the first render returns the current value. Tracking happens in an
 * effect, so the result always reflects the previous committed render —
 * compatible with React Compiler and concurrent rendering.
 *
 * @param value - Value to track
 * @returns Value from the previous render (the current value on the first render)
 *
 * @example
 * const previousCount = usePrevious(count)
 * const direction = count > previousCount ? 'up' : 'down'
 */
export const usePrevious = <T>(value: T): T => {
  const valueRef = useRef(value)
  const previous = valueRef.current

  useEffect(() => {
    valueRef.current = value
  }, [value])

  return previous
}

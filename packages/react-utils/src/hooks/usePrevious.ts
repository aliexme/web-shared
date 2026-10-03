/* eslint-disable react-hooks/refs */
import { useEffect, useRef } from 'react'

export const usePrevious = <T>(value: T): T => {
  const valueRef = useRef(value)
  const previous = valueRef.current

  useEffect(() => {
    valueRef.current = value
  }, [value])

  return previous
}

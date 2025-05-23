import { useRef } from 'react'

export const usePrevious = <T>(value: T): T => {
  const currentRef = useRef<T>(value)
  const prevRef = useRef<T>(value)

  if (currentRef.current !== value) {
    prevRef.current = currentRef.current
    currentRef.current = value
  }

  return prevRef.current
}

import { type RefObject, useEffect, useRef } from 'react'

export const useValueRef = <T>(value: T): RefObject<T> => {
  const ref = useRef<T>(value)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref
}

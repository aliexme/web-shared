import { useRef, type MutableRefObject, useEffect } from 'react'

export const useValueRef = <T>(value: T): MutableRefObject<T> => {
  const ref = useRef<T>(value)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref
}

import { useValueRef } from './useValueRef'

export const usePrevious = <T>(value: T): T => {
  const valueRef = useValueRef(value)

  return valueRef.current
}

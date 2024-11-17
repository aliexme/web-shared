import { useCallback, useState } from 'react'

import { useValueRef } from './useValueRef'

export interface UseDerivedStateParams<T> {
  value: T | undefined
  initialValue: T
  onChange?(value: T): void
}

export const useDerivedState = <T>(params: UseDerivedStateParams<T>) => {
  const { value: propValue, initialValue, onChange: propOnChange } = params

  const [stateValue, setStateValue] = useState(propValue ?? initialValue)
  const propOnChangeRef = useValueRef(propOnChange)
  const value = propValue !== undefined ? propValue : stateValue

  const onChange = useCallback((newValue: T) => {
    propOnChangeRef.current?.(newValue)
    setStateValue(newValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [value, onChange] as const
}

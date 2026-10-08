import { useCallback, useState } from 'react'

import { useValueRef } from '../useValueRef'

/** Params for the useDerivedState hook */
export interface UseDerivedStateParams<T> {
  /** Controlled value; `undefined` means the state is uncontrolled */
  value: T | undefined
  /** Initial value used while uncontrolled */
  initialValue: T
  /** Called with the new value whenever the returned change handler is invoked */
  onChange?: (value: T) => void
}

/**
 * State that follows a controlled prop while it is defined and falls back
 * to internal state otherwise — the controlled/uncontrolled pattern behind
 * native inputs (`value` with `defaultValue`).
 *
 * When `value` is `undefined`, the internal state is used: it starts at
 * `initialValue` and changes through the returned change handler. When
 * `value` is defined, it always wins. The change handler is stable and
 * always calls the latest `onChange` prop.
 *
 * @param params - Controlled state params
 * @returns Tuple of the current value and its stable change handler
 *
 * @example
 * const [value, setValue] = useDerivedState({
 *   value: props.value,
 *   initialValue: 'initial',
 *   onChange: props.onChange,
 * })
 */
export const useDerivedState = <T>(params: UseDerivedStateParams<T>) => {
  const { value: propValue, initialValue, onChange: propOnChange } = params

  const [stateValue, setStateValue] = useState(propValue ?? initialValue)
  const propOnChangeRef = useValueRef(propOnChange)
  const value = propValue !== undefined ? propValue : stateValue

  // biome-ignore lint/correctness/useExhaustiveDependencies: ignore
  const onChange = useCallback((newValue: T) => {
    propOnChangeRef.current?.(newValue)
    setStateValue(newValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [value, onChange] as const
}

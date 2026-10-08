// @vitest-environment happy-dom
import { act, render } from '@testing-library/react'
import { useEffect } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { useDerivedState } from './useDerivedState'

interface ProbeProps {
  value?: string
  onChange?: (value: string) => void
}

const capturedHandler: { current: ((value: string) => void) | null } = { current: null }

const Probe = ({ value, onChange }: ProbeProps) => {
  const [derivedValue, handleValueChange] = useDerivedState({ value, initialValue: 'initial', onChange })

  useEffect(() => {
    capturedHandler.current = handleValueChange
  })

  return <div data-testid="value">{derivedValue}</div>
}

const getValue = () => document.querySelector('[data-testid="value"]')?.textContent

const changeValue = (value: string) => {
  act(() => {
    capturedHandler.current?.(value)
  })
}

describe('useDerivedState', () => {
  it('should use the initial value when uncontrolled', () => {
    render(<Probe />)

    expect(getValue()).toBe('initial')
  })

  it('should update internal state on change when uncontrolled', () => {
    render(<Probe />)

    changeValue('updated')

    expect(getValue()).toBe('updated')
  })

  it('should prefer the controlled value over internal state', () => {
    render(<Probe value="controlled" />)

    changeValue('ignored')

    expect(getValue()).toBe('controlled')
  })

  it('should fall back to internal state when the value becomes undefined', () => {
    const { rerender } = render(<Probe />)

    changeValue('updated')
    rerender(<Probe value="controlled" />)

    expect(getValue()).toBe('controlled')

    rerender(<Probe />)

    expect(getValue()).toBe('updated')
  })

  it('should call the latest onChange prop', () => {
    const firstOnChange = vi.fn()
    const secondOnChange = vi.fn()

    const { rerender } = render(<Probe onChange={firstOnChange} />)

    rerender(<Probe onChange={secondOnChange} />)

    changeValue('updated')

    expect(firstOnChange).not.toHaveBeenCalled()
    expect(secondOnChange).toHaveBeenCalledWith('updated')
  })

  it('should keep the change handler stable across re-renders', () => {
    const { rerender } = render(<Probe />)

    const firstHandler = capturedHandler.current

    rerender(<Probe />)

    expect(capturedHandler.current).toBe(firstHandler)
  })
})

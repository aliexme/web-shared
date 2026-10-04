// @vitest-environment happy-dom
import { render } from '@testing-library/react'
import { type RefObject, useEffect } from 'react'
import { describe, expect, it } from 'vitest'

import { useValueRef } from './useValueRef'

const capturedRef: { current: RefObject<number | undefined> | null } = { current: null }

const Probe = ({ value }: { value: number | undefined }) => {
  const valueRef = useValueRef(value)

  useEffect(() => {
    capturedRef.current = valueRef
  })

  return null
}

describe('useValueRef', () => {
  it('should expose the initial value', () => {
    render(<Probe value={1} />)

    expect(capturedRef.current?.current).toBe(1)
  })

  it('should expose the latest committed value', () => {
    const { rerender } = render(<Probe value={1} />)

    rerender(<Probe value={2} />)

    expect(capturedRef.current?.current).toBe(2)

    rerender(<Probe value={3} />)

    expect(capturedRef.current?.current).toBe(3)
  })
})

// @vitest-environment happy-dom
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { usePrevious } from './usePrevious'

const Probe = ({ value }: { value: number }) => {
  const previous = usePrevious(value)

  return <div data-testid="previous">{previous}</div>
}

const getPrevious = () => document.querySelector('[data-testid="previous"]')?.textContent

describe('usePrevious', () => {
  it('should return the initial value on first render', () => {
    render(<Probe value={0} />)

    expect(getPrevious()).toBe('0')
  })

  it('should return the previous value on every change', () => {
    const { rerender } = render(<Probe value={0} />)

    rerender(<Probe value={1} />)

    expect(getPrevious()).toBe('0')

    rerender(<Probe value={2} />)

    expect(getPrevious()).toBe('1')

    rerender(<Probe value={3} />)

    expect(getPrevious()).toBe('2')
  })

  it('should return the current value when a re-render does not change it', () => {
    const { rerender } = render(<Probe value={0} />)

    rerender(<Probe value={1} />)
    rerender(<Probe value={1} />)

    expect(getPrevious()).toBe('1')
  })
})

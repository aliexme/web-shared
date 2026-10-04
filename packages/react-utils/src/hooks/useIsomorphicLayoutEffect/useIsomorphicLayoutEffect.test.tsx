// @vitest-environment happy-dom
import { render } from '@testing-library/react'
import { useEffect } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

describe('useIsomorphicLayoutEffect', () => {
  it('should run before passive effects on the client', () => {
    const order: string[] = []

    const Probe = () => {
      useIsomorphicLayoutEffect(() => {
        order.push('layout')
      })
      useEffect(() => {
        order.push('effect')
      })

      return null
    }

    render(<Probe />)

    expect(order).toEqual(['layout', 'effect'])
  })

  it('should run cleanup on unmount', () => {
    const cleanup = vi.fn()

    const Probe = () => {
      useIsomorphicLayoutEffect(() => cleanup)

      return null
    }

    const { unmount } = render(<Probe />)

    expect(cleanup).not.toHaveBeenCalled()

    unmount()

    expect(cleanup).toHaveBeenCalledTimes(1)
  })
})

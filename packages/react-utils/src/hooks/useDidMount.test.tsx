// @vitest-environment happy-dom
import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useDidMount } from './useDidMount'

describe('useDidMount', () => {
  it('should call effect once after mount', () => {
    const effect = vi.fn()

    const Probe = () => {
      useDidMount(effect)
      return null
    }

    const { unmount } = render(<Probe />)

    expect(effect).toHaveBeenCalledTimes(1)

    unmount()

    expect(effect).toHaveBeenCalledTimes(1)
  })
})

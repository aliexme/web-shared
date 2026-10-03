// @vitest-environment happy-dom
import { act, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { useWindowSize } from './useWindowSize'

const Probe = ({ throttleDelay }: { throttleDelay?: number }) => {
  const { width, height } = useWindowSize({ throttleDelay })

  return (
    <div>
      <span data-testid="width">{width}</span>
      <span data-testid="height">{height}</span>
    </div>
  )
}

const getSize = () => ({
  width: document.querySelector('[data-testid="width"]')?.textContent,
  height: document.querySelector('[data-testid="height"]')?.textContent,
})

const setWindowSize = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', { value: width, configurable: true })
  Object.defineProperty(window, 'innerHeight', { value: height, configurable: true })
}

const fireResize = () => {
  act(() => {
    window.dispatchEvent(new Event('resize'))
  })
}

describe('useWindowSize', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('should return the current window size on mount', () => {
    render(<Probe />)

    expect(getSize()).toEqual({
      width: String(window.innerWidth),
      height: String(window.innerHeight),
    })
  })

  it('should update window size on resize', () => {
    vi.useFakeTimers()
    render(<Probe />)

    setWindowSize(1200, 800)
    fireResize()

    expect(getSize()).toEqual({ width: '1200', height: '800' })
  })

  it('should throttle rapid resizes with trailing update', () => {
    vi.useFakeTimers()
    render(<Probe throttleDelay={100} />)

    setWindowSize(1200, 800)
    fireResize()

    expect(getSize()).toEqual({ width: '1200', height: '800' })

    setWindowSize(1300, 900)
    fireResize()

    expect(getSize()).toEqual({ width: '1200', height: '800' })

    act(() => {
      vi.advanceTimersByTime(100)
    })

    expect(getSize()).toEqual({ width: '1300', height: '900' })
  })

  it('should cancel the pending trailing update on unmount', () => {
    vi.useFakeTimers()
    const removeSpy = vi.spyOn(window, 'removeEventListener')

    const { unmount } = render(<Probe throttleDelay={100} />)

    setWindowSize(1200, 800)
    fireResize()

    setWindowSize(1300, 900)
    fireResize()

    unmount()

    expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function))

    act(() => {
      vi.advanceTimersByTime(200)
    })
  })

  it('should re-subscribe when throttleDelay changes', () => {
    vi.useFakeTimers()
    const addSpy = vi.spyOn(window, 'addEventListener')
    const removeSpy = vi.spyOn(window, 'removeEventListener')

    const { rerender } = render(<Probe throttleDelay={100} />)

    rerender(<Probe throttleDelay={200} />)

    expect(removeSpy).toHaveBeenCalledTimes(1)
    expect(addSpy).toHaveBeenCalledTimes(2)
  })
})

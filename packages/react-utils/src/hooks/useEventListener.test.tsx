// @vitest-environment happy-dom
import { act, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useEventListener } from './useEventListener'

interface ProbeProps {
  target: EventTarget
  listener: EventListenerOrEventListenerObject
  enabled?: boolean
  capture?: boolean
}

const Probe = ({ target, listener, enabled, capture }: ProbeProps) => {
  const options = { enabled, capture }

  useEventListener(target, 'click', listener, options)

  return null
}

const createTarget = () => {
  const target = new EventTarget()
  const addSpy = vi.spyOn(target, 'addEventListener')
  const removeSpy = vi.spyOn(target, 'removeEventListener')

  return { target, addSpy, removeSpy }
}

describe('useEventListener', () => {
  it('should subscribe on mount and unsubscribe on unmount', () => {
    const { target, addSpy, removeSpy } = createTarget()

    const { unmount } = render(<Probe target={target} listener={vi.fn<EventListener>()} />)

    expect(addSpy).toHaveBeenCalledTimes(1)
    expect(addSpy.mock.calls[0][0]).toBe('click')

    unmount()

    expect(removeSpy).toHaveBeenCalledTimes(1)
  })

  it('should keep the latest listener without re-subscribing', () => {
    const { target, addSpy } = createTarget()

    const firstListener = vi.fn<EventListener>()
    const secondListener = vi.fn<EventListener>()

    const { rerender } = render(<Probe target={target} listener={firstListener} />)

    rerender(<Probe target={target} listener={secondListener} />)

    expect(addSpy).toHaveBeenCalledTimes(1)

    act(() => {
      target.dispatchEvent(new Event('click'))
    })

    expect(firstListener).not.toHaveBeenCalled()
    expect(secondListener).toHaveBeenCalledTimes(1)
  })

  it('should not subscribe when disabled', () => {
    const { target, addSpy, removeSpy } = createTarget()

    const { rerender } = render(<Probe target={target} listener={vi.fn<EventListener>()} enabled={false} />)

    expect(addSpy).not.toHaveBeenCalled()

    rerender(<Probe target={target} listener={vi.fn<EventListener>()} enabled={true} />)

    expect(addSpy).toHaveBeenCalledTimes(1)

    rerender(<Probe target={target} listener={vi.fn<EventListener>()} enabled={false} />)

    expect(removeSpy).toHaveBeenCalledTimes(1)
  })

  it('should re-subscribe with new options', () => {
    const { target, addSpy } = createTarget()
    const listener = vi.fn<EventListener>()

    const { rerender } = render(<Probe target={target} listener={listener} capture={false} />)

    rerender(<Probe target={target} listener={listener} capture={true} />)

    expect(addSpy).toHaveBeenCalledTimes(2)
    expect(addSpy.mock.calls[1][2]).toMatchObject({ capture: true })
  })

  it('should support object listeners', () => {
    const { target } = createTarget()

    const listener = { handleEvent: vi.fn() }

    render(<Probe target={target} listener={listener} />)

    act(() => {
      target.dispatchEvent(new Event('click'))
    })

    expect(listener.handleEvent).toHaveBeenCalledTimes(1)
  })
})

import { type RefObject, useCallback, useEffect, useRef, useState } from 'react'

import { useValueRef } from './useValueRef'

export interface ComponentSize {
  width: number
  height: number
}

export interface UseComponentSizeOptions<T extends HTMLElement = HTMLElement> {
  ref?: RefObject<T | null>
  enabled?: boolean
  manual?: boolean
  onResize?(size: ComponentSize, entry: ResizeObserverEntry): void
}

const getComponentSize = (target: HTMLElement | null): ComponentSize => {
  return {
    width: target?.offsetWidth ?? 0,
    height: target?.offsetHeight ?? 0,
  }
}

export const useComponentSize = <T extends HTMLElement = HTMLElement>(options: UseComponentSizeOptions = {}) => {
  const { ref: propTargetRef, enabled = true, manual = false, onResize } = options

  const innerTargetRef = useRef<T>(null)
  const targetRef = propTargetRef ?? innerTargetRef
  const onResizeRef = useValueRef(onResize)

  const [size, setSize] = useState(() => getComponentSize(targetRef.current))

  const handleResize = useCallback(
    (entries: ResizeObserverEntry[]) => {
      const entry = entries[0]
      const entrySize = getComponentSize(targetRef.current)

      if (!manual) {
        setSize(entrySize)
      }

      onResizeRef.current?.(entrySize, entry)
    },
    [targetRef, manual, onResizeRef],
  )

  useEffect(() => {
    if (typeof window === 'undefined' || !enabled || !targetRef.current) {
      return
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(targetRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [enabled, targetRef, handleResize])

  return {
    ref: targetRef,
    width: size.width,
    height: size.height,
  }
}

import { useCallback, useSyncExternalStore } from 'react'
import { throttle } from '@aliexme/js-utils'

/** Window width and height in pixels */
export interface WindowSize {
  /** Window inner width in pixels */
  width: number
  /** Window inner height in pixels */
  height: number
}

/** Options for the useWindowSize hook */
export interface UseWindowSizeOptions {
  /** Delay in milliseconds used to throttle resize events (default 100) */
  throttleDelay?: number
}

let snapshot: WindowSize | undefined

const getSnapshot = (): WindowSize => {
  const width = window.innerWidth
  const height = window.innerHeight

  if (!snapshot || snapshot.width !== width || snapshot.height !== height) {
    snapshot = { width, height }
  }

  return snapshot
}

const getServerSnapshot = (): WindowSize => ({ width: 0, height: 0 })

/**
 * Tracks the browser window size through `useSyncExternalStore`.
 *
 * The server snapshot is `{ width: 0, height: 0 }`, so server-rendered
 * markup hydrates without mismatches and switches to the real size on
 * the client.
 *
 * @param options - Window size options
 * @returns Current window size
 *
 * @example
 * const { width, height } = useWindowSize({ throttleDelay: 200 })
 */
export const useWindowSize = (options: UseWindowSizeOptions = {}) => {
  const { throttleDelay = 100 } = options

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const handleWindowResize = throttle(onStoreChange, throttleDelay, { withTrailing: true })

      window.addEventListener('resize', handleWindowResize)

      return () => {
        handleWindowResize.cancel()
        window.removeEventListener('resize', handleWindowResize)
      }
    },
    [throttleDelay],
  )

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

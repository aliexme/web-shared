import { useCallback, useSyncExternalStore } from 'react'
import { throttle } from '@aliexme/js-utils'

export interface WindowSize {
  width: number
  height: number
}

export interface UseWindowSizeOptions {
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

import { useEffect, useState } from 'react'
import { throttle } from '@aliexme/js-utils'

export interface WindowSize {
  width: number
  height: number
}

export interface UseWindowSizeOptions {
  throttleDelay?: number
}

export const useWindowSize = (options: UseWindowSizeOptions = {}) => {
  const { throttleDelay = 100 } = options

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleWindowResize = throttle(
      () => {
        setWindowSize((prevWindowSize) =>
          prevWindowSize.width === window.innerWidth && prevWindowSize.height === window.innerHeight
            ? prevWindowSize
            : {
                width: window.innerWidth,
                height: window.innerHeight,
              },
        )
      },
      throttleDelay,
      { withTrailing: true },
    )

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [throttleDelay])

  return windowSize
}

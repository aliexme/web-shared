import { useEffect, useState } from 'react'
import debounce from 'lodash/debounce'

interface WindowSize {
  width: number
  height: number
}

export const useWindowSize = (
  options: {
    debounceWait?: number
    debounceMaxWait?: number
  } = {},
) => {
  const { debounceWait = 0, debounceMaxWait = 1000 } = options

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleWindowResize = debounce(
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
      debounceWait,
      { maxWait: debounceMaxWait },
    )

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [debounceWait, debounceMaxWait])

  return windowSize
}

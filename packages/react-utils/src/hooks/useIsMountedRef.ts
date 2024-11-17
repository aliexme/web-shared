import { useRef } from 'react'

import { useDidMount } from './useDidMount'

export const useIsMountedRef = () => {
  const isMountedRef = useRef(false)

  useDidMount(() => {
    isMountedRef.current = true
  })

  return isMountedRef
}

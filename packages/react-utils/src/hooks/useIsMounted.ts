import { useState } from 'react'

import { useDidMount } from './useDidMount'

export const useIsMounted = () => {
  const [isMounted, setMounted] = useState(false)

  useDidMount(() => {
    setMounted(true)
  })

  return isMounted
}

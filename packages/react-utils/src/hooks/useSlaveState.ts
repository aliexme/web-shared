import { useEffect, useState } from 'react'

export const useSlaveState = <T>(masterState: T) => {
  const [slaveState, setSlaveState] = useState(masterState)

  useEffect(() => {
    setSlaveState(masterState)
  }, [masterState])

  return [slaveState, setSlaveState] as const
}

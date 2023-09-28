import { type EffectCallback, useEffect } from 'react'

export const useDidMount = (effect: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, [])
}

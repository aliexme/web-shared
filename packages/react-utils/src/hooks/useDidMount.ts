import { type EffectCallback, useEffect } from 'react'

export const useDidMount = (effect: EffectCallback) => {
  // biome-ignore-start lint/correctness/useExhaustiveDependencies: ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, [])
  // biome-ignore-end lint/correctness/useExhaustiveDependencies: ignore
}

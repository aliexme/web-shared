import { type EffectCallback, useEffect } from 'react'

/**
 * Runs an effect once after the component mounts — a mount-only wrapper
 * around `useEffect` with an empty dependency list.
 *
 * @param effect - Effect callback; may return a cleanup function that
 * runs on unmount
 *
 * @example
 * useDidMount(() => {
 *   Analytics.sendPageView()
 * })
 */
export const useDidMount = (effect: EffectCallback) => {
  // biome-ignore-start lint/correctness/useExhaustiveDependencies: ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, [])
  // biome-ignore-end lint/correctness/useExhaustiveDependencies: ignore
}

import { useEffect, useLayoutEffect } from 'react'

/**
 * `useLayoutEffect` on the client and `useEffect` on the server — avoids
 * the `useLayoutEffect does nothing on the server` warning in SSR.
 *
 * @example
 * useIsomorphicLayoutEffect(() => {
 *   position = element.getBoundingClientRect()
 * })
 */
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

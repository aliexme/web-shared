/**
 * Linearly interpolates between `start` and `end` by `alpha`.
 *
 * @param start - Start value
 * @param end - End value
 * @param alpha - Interpolation factor in the [0, 1] range
 * @returns Interpolated value
 *
 * @example
 * lerp(0, 10, 0.5) // 5
 */
export const lerp = (start: number, end: number, alpha: number): number => {
  return (1 - alpha) * start + alpha * end
}

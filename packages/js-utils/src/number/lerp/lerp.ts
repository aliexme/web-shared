/**
 * Linearly interpolates between `start` and `end` by `alpha`.
 *
 * @example
 *   lerp(0, 10, 0.5) // 5
 *
 * @param start - Start value
 * @param end - End value
 * @param alpha - Interpolation factor in the [0, 1] range
 * @returns Interpolated value
 */
export const lerp = (start: number, end: number, alpha: number): number => {
  return (1 - alpha) * start + alpha * end
}

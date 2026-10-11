/**
 * Clamps a value to the inclusive range between `min` and `max`.
 *
 * @example
 *   clamp(5, 0, 3) // 3
 *
 * @param value - Value to clamp
 * @param min - Lower bound
 * @param max - Upper bound
 * @returns Clamped value
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max)
}

/**
 * Returns a pseudo-random number generator seeded with the given value.
 * Useful when deterministic randomness is needed, e.g. in tests.
 *
 * @param seed - Seed value (default 0)
 * @returns Function producing deterministic pseudo-random numbers in the [0, 1) range
 *
 * @example
 * const random = seededRandom(42)
 * random() // always the same number for the same seed
 */
export const seededRandom = (seed = 0): (() => number) => {
  let state = seed

  return () => {
    state |= 0
    state = (state + 0x6d2b79f5) | 0
    let mix = Math.imul(state ^ (state >>> 15), 1 | state)
    mix = (mix + Math.imul(mix ^ (mix >>> 7), 61 | mix)) ^ mix
    return ((mix ^ (mix >>> 14)) >>> 0) / 4294967296
  }
}

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

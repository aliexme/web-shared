export const randomInt = (from = 0, to = 999_999): number => {
  return Math.floor(Math.random() * (to - from + 1)) + from
}

export const randomInt = (
  options: {
    from?: number
    to?: number
  } = {},
): number => {
  const { from = 0, to = 999_999 } = options
  return Math.floor(Math.random() * (to - from + 1)) + from
}

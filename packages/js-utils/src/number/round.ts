export const round = (
  value: number,
  options: {
    precision?: number
  } = {},
): number => {
  const { precision = 0 } = options

  return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision)
}

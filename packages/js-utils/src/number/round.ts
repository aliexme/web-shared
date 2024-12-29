export const round = (value: number, precision = 0): number => {
  return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision)
}

export const floor = (value: number, precision = 0): number => {
  return Math.floor(value * Math.pow(10, precision)) / Math.pow(10, precision)
}

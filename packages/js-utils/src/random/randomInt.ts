import { randomNumber } from './randomNumber'

export const randomInt = (min = 0, max = 999_999): number => {
  return randomNumber(min, max, { precision: 0 })
}

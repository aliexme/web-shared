import { floor } from '../../number/floor'

export interface RandomNumberOptions {
  precision?: number
}

export const randomNumber = (min = 0, max = 999_999, options: RandomNumberOptions = {}): number => {
  const { precision = 2 } = options

  // 10 ** -precision widens the span so that max is inclusive
  // (for precision 0 it is the classic +1 of the integer formula)
  return floor(Math.random() * (max - min + 10 ** -precision), precision) + min
}

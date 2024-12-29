import { floor } from './floor'

export interface RandomNumberOptions {
  precision?: number
}

export const randomNumber = (min = 0, max = 999_999, options: RandomNumberOptions = {}): number => {
  const { precision = 2 } = options

  return floor(Math.random() * (max - min + 1), precision) + min
}

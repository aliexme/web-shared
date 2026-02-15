import { randomArrayItem } from '../array/randomArrayItem'
import { randomInt } from '../number/randomInt'

// prettier-ignore
// biome-ignore format: ignore
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// prettier-ignore
// biome-ignore format: ignore
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// prettier-ignore
// biome-ignore format: ignore
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// prettier-ignore
// biome-ignore format: ignore
const symbols = ['!', '#', '@', '~', '$', '^', '.', ',', '-', '+', '%', '?', '*', '=']

const charGroupsMap = {
  1: lowercase,
  2: uppercase,
  3: digits,
  4: symbols,
}

export const randomString = (options: { length?: number } = {}): string => {
  const { length = 16 } = options
  let result = ''

  for (let i = 0; i < length; i++) {
    const charGroupIndex = randomInt(1, 4)
    const charGroup = charGroupsMap[charGroupIndex as keyof typeof charGroupsMap]
    const char = randomArrayItem(charGroup)

    result += char
  }

  return result
}

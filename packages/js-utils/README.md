# @aliexme/js-utils

Tree-shakable JavaScript utilities

## Installation

```sh
npm i @aliexme/js-utils
```

## Usage

All utilities are named ESM exports:

```ts
import { capitalize, sleep } from '@aliexme/js-utils'
```

## API

### Array

#### difference

```ts
difference<T>(mainArray: T[], arrayToSubtract: T[], ...restArraysToSubtract: T[][]): T[]
```

Returns the values from the main array that are not present in any of the subtracted arrays.

```ts
difference([1, 2, 3, 4], [3, 4, 5]) // [1, 2]
```

#### intersection

```ts
intersection<T>(array1: T[], array2: T[], ...restArrays: T[][]): T[]
```

Returns the unique values present in every given array, in the order of the first array.

```ts
intersection([1, 2, 3, 4], [3, 4, 5]) // [3, 4]
```

#### uniquify

```ts
uniquify<T>(array: T[]): T[]
```

Returns an array of unique values from the given array.

```ts
uniquify([1, 2, 2, 3]) // [1, 2, 3]
```

### Async

#### sleep

```ts
sleep(ms: number, options?: SleepOptions): Promise<void>
```

Returns a promise that resolves after the given delay, or rejects when the abort signal fires.

```ts
interface SleepOptions {
  /** Signal that rejects the sleep promise early */
  signal?: AbortSignal
}
```

```ts
await sleep(1000)
```

### Function

#### debounce

```ts
debounce<T>(func: T, delay: number, options?: DebounceOptions): DebouncedFunc<T>
```

Creates a debounced function that delays invoking `func` until `delay` milliseconds have passed since the last call.

```ts
interface DebounceOptions {
  /** Maximum time in milliseconds the function is allowed to be delayed */
  maxWait?: number
  /** Invoke the function on the leading edge instead of the trailing edge */
  withLeading?: boolean
}
```

The returned function has a `cancel()` method that cancels the pending invocation.

```ts
const debounced = debounce(() => save(input), 300)
```

#### throttle

```ts
throttle<T>(func: T, delay: number, options?: ThrottleOptions): ThrottledFunc<T>
```

Creates a throttled function that invokes `func` at most once per `delay` milliseconds.

```ts
interface ThrottleOptions {
  /** Invoke the function with the last received args after the cooldown ends */
  withTrailing?: boolean
}
```

The returned function has a `cancel()` method that cancels the pending invocation.

```ts
const throttled = throttle(() => onScroll(event), 100)
```

#### noop

```ts
noop(): void
```

A no-operation function that does nothing.

```ts
const handler = enabled ? onClick : noop
```

### Number

#### clamp

```ts
clamp(value: number, min: number, max: number): number
```

Clamps a value to the inclusive range between `min` and `max`.

```ts
clamp(5, 0, 3) // 3
```

#### floor

```ts
floor(value: number, precision?: number): number
```

Rounds a value down to the given precision (number of decimal places, default 0).

```ts
floor(1.239, 2) // 1.23
```

#### lerp

```ts
lerp(start: number, end: number, alpha: number): number
```

Linearly interpolates between `start` and `end` by `alpha` (interpolation factor in the [0, 1] range).

```ts
lerp(0, 10, 0.5) // 5
```

#### round

```ts
round(value: number, precision?: number): number
```

Rounds a value to the given precision (number of decimal places, default 0).

```ts
round(1.236, 2) // 1.24
```

### Object

#### findKey

```ts
findKey<T, K extends keyof T>(obj: T, predicate: (value: T[K]) => boolean): K | undefined
```

Returns the key of the first object value that satisfies the predicate, or `undefined` if none matches.

```ts
findKey({ a: 1, b: 2, c: 3 }, (value) => value > 1) // 'b'
```

#### getKey

```ts
getKey<T, K extends keyof T>(obj: T, value: T[K]): K
```

Returns the key of the first object value equal to the given value.

```ts
getKey({ a: 1, b: 2, c: 3 }, 2) // 'b'
```

#### omit

```ts
omit<T, K extends keyof T>(obj: T, keys: K | K[]): Omit<T, K>
```

Returns a new object without the specified properties.

```ts
omit({ a: 1, b: 2, c: 3 }, 'b') // { a: 1, c: 3 }
omit({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { b: 2 }
```

#### omitUndefined

```ts
omitUndefined<T extends Record<string, unknown>>(obj: T): T
```

Returns a new object without properties whose values are `undefined`.

```ts
omitUndefined({ a: 1, b: undefined, c: 3 }) // { a: 1, c: 3 }
```

### Random

#### randomArrayItem

```ts
randomArrayItem<T>(array: T[]): T
```

Returns a random item from the given array.

```ts
randomArrayItem([1, 2, 3]) // 1, 2 or 3
```

#### randomInt

```ts
randomInt(min?: number, max?: number): number
```

Returns a random integer in the inclusive range from `min` (default 0) to `max` (default 999999).

```ts
randomInt(1, 6) // 1, 2, 3, 4, 5 or 6
```

#### randomNumber

```ts
randomNumber(min?: number, max?: number, options?: RandomNumberOptions): number
```

Returns a random number in the inclusive range from `min` (default 0) to `max` (default 999999).

```ts
interface RandomNumberOptions {
  /** Number of decimal places in the result (default 2) */
  precision?: number
}
```

```ts
randomNumber(0, 1) // e.g. 0.42
```

#### randomString

```ts
randomString(options?: { length?: number }): string
```

Returns a random string of the given length (default 16) composed of lowercase letters, uppercase letters, digits and symbols.

```ts
randomString({ length: 8 }) // e.g. 'aB3$xY9!'
```

#### seededRandom

```ts
seededRandom(seed?: number): () => number
```

Returns a pseudo-random number generator seeded with the given value (default 0). Useful when deterministic randomness is needed, e.g. in tests.

```ts
const random = seededRandom(42)
random() // always the same number for the same seed
```

### String

#### capitalize

```ts
capitalize<T extends string>(str: T): Capitalize<T>
```

Capitalizes the first character of a string.

```ts
capitalize('hello') // 'Hello'
```

#### secureString

```ts
secureString(str: string, options?: { maxInsecureChars?: number }): string
```

Masks a string, keeping only its last few characters visible (`maxInsecureChars`, default 4).

```ts
secureString('secret-token') // '****oken'
```

## License

MIT

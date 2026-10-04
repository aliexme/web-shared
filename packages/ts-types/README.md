# @aliexme/ts-types

Common TypeScript utility types

## Installation

```sh
npm i @aliexme/ts-types
```

Requires `typescript@^6.0.0` as a peer dependency.

## Usage

All types are named exports:

```ts
import type { OmitStrict, ValueOf } from '@aliexme/ts-types'
```

## Types

### OmitStrict

```ts
OmitStrict<T, K extends keyof T>
```

Same as `Omit`, but `K` must be extended from `keyof T`.

### PartialProp

```ts
PartialProp<T, K extends keyof T>
```

Makes specific properties in `T` optional.

### RequiredProp

```ts
RequiredProp<T, K extends keyof T>
```

Makes specific properties in `T` required.

### Override

```ts
Override<T, U>
```

Combines `T` and `U` and overwrites properties from `T` with properties from `U`.

### ValueOf

```ts
ValueOf<T>
```

Extracts values from `T`.

### Tuple

```ts
Tuple<T, N>
```

Creates a tuple of `T` of a given length.

### Intersect

```ts
Intersect<T>
```

Converts a union type into an intersection type.

### UnionTuple

```ts
UnionTuple<T>
```

Converts a union type into a tuple.

## License

MIT

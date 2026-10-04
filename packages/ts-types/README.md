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

### Intersect

```ts
Intersect<T>
```

Converts a union type into an intersection of its members.

### OmitStrict

```ts
OmitStrict<T, K extends keyof T>
```

Same as `Omit`, but `K` must be a key of `T` — a typo in the key fails at compile time.

### Override

```ts
Override<T, U>
```

Combines `T` and `U`, overwriting matching properties of `T` with the ones from `U`. The result is a flat object type.

### PartialProp

```ts
PartialProp<T, K extends keyof T>
```

Makes specific properties in `T` optional, leaving the rest untouched. The result is a flat object type.

### RequiredProp

```ts
RequiredProp<T, K extends keyof T>
```

Makes specific properties in `T` required, leaving the rest untouched. The result is a flat object type.

### Simplify

```ts
Simplify<T>
```

Flattens an intersection into a single object type. Preserves `readonly` and optional modifiers.

### Tuple

```ts
Tuple<T, N extends number>
```

Creates a tuple of `T` of a given length, fixed at compile time. A non-literal `number` length falls back to `T[]`.

### ValueOf

```ts
ValueOf<T>
```

Union of value types of an object type.

## License

MIT

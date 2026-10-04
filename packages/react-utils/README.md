# @aliexme/react-utils

React hooks and utilities

## Installation

```sh
npm i @aliexme/react-utils
```

Requires `react` as a peer dependency.

## Usage

All hooks and types are named ESM exports:

```ts
import { useDidMount, useWindowSize } from '@aliexme/react-utils'
```

## Hooks

### useDidMount

```ts
useDidMount(effect: EffectCallback): void
```

Runs an effect once after the component mounts.

### useValueRef

```ts
useValueRef<T>(value: T): RefObject<T>
```

Keeps a ref to the latest committed value. Useful for reading fresh values inside stable callbacks without re-subscribing.

### usePrevious

```ts
usePrevious<T>(value: T): T
```

Returns the value from the previous render (the current value on the first render). Tracked in an effect — compatible with React Compiler and concurrent rendering.

### useDerivedState

```ts
useDerivedState<T>(params: {
  value: T | undefined
  initialValue: T
  onChange?(value: T): void
}): readonly [value: T, onChange: (value: T) => void]
```

Controlled/uncontrolled state: follows `value` while it is defined, falls back to internal state (starting at `initialValue`) while it is `undefined`. The change handler is stable and always calls the latest `onChange`.

### useEventListener

```ts
useEventListener(
  target: EventTarget,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: UseEventListenerOptions, // extends AddEventListenerOptions
): void
```

Subscribes to an event on any EventTarget. Inline listeners do not cause re-subscriptions; changing the target, type, `enabled` or listener options re-subscribes with the new settings.

### useIsomorphicLayoutEffect

```ts
useIsomorphicLayoutEffect: typeof useLayoutEffect
```

`useLayoutEffect` on the client, `useEffect` on the server — avoids the SSR warning.

### useWindowSize

```ts
useWindowSize(options?: { throttleDelay?: number }): WindowSize
```

Tracks the window size through `useSyncExternalStore` — hydrates without mismatches (server snapshot is `{ width: 0, height: 0 }`).

## Types

- `OverridableComponent<P, D>` — component type with an `as` prop override
- `OverrideProps<C, P>` — props of the element rendered through `as`
- `PropsWithOverride<P, C>` — component props extended with an optional `as`

## License

MIT

import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react'

/**
 * Component type whose rendered element can be overridden through the
 * `as` prop.
 *
 * @example
 * const Button: OverridableComponent<ButtonProps, 'button'> = (props) => {
 *   return <button {...props} />
 * }
 * // <Button as="a" href="/docs">Docs</Button> renders an anchor with button props
 */
export interface OverridableComponent<P, D extends ElementType> {
  <C extends ElementType = D>(props: { as: C } & OverrideProps<C, P>): ReactNode
  (props: OverrideProps<D, P>): ReactNode
}

/** Props of the element rendered through `as`, merged with the component's own props */
export type OverrideProps<C extends ElementType, P> = P & Omit<ComponentPropsWithRef<C>, keyof P>

/** Component props extended with an optional `as` element override */
export type PropsWithOverride<P = unknown, C extends ElementType = ElementType> = P & {
  as?: C
}

import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react'

export interface OverridableComponent<P, D extends ElementType> {
  <C extends ElementType = D>(props: { as: C } & OverrideProps<C, P>): ReactNode
  (props: OverrideProps<D, P>): ReactNode
}

export type OverrideProps<C extends ElementType, P> = P & Omit<ComponentPropsWithRef<C>, keyof P>

export type PropsWithOverride<P = unknown, C extends ElementType = ElementType> = P & {
  as?: C
}

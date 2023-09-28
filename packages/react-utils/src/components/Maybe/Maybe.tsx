import { type PropsWithChildren, type FC, type ReactElement, Fragment, cloneElement } from 'react'

export type MaybeProps = PropsWithChildren<{
  when: boolean
  component: ReactElement
  orElse?: ReactElement
}>

export const Maybe: FC<MaybeProps> = (props) => {
  const { when, component, orElse = <Fragment />, children } = props

  if (when) {
    return cloneElement(component, { children })
  }

  return cloneElement(orElse, { children })
}

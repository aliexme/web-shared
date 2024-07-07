import { cloneElement, type FC, Fragment, type PropsWithChildren, type ReactElement } from 'react'

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

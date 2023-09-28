import { useDidMount } from './useDidMount'

export const useWillUnmount = (destructor: () => void) => {
  useDidMount(() => {
    return destructor
  })
}

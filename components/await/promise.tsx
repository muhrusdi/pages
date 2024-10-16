import { use } from "react"
import { Props } from "./await"
import { setTimeout } from "timers/promises"

const Promise = <T,>({ children, data, sleep }: Props<T>) => {
  if (sleep) {
    use(setTimeout(sleep))
  }

  const result = use(data)

  return children(result)
}

export default Promise

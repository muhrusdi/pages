import { pending } from "@/utils"
import { Props } from "./await"
import { setTimeout } from "timers/promises"

const Promise = async <T,>({ children, data, sleep }: Props<T>) => {
  if (sleep) {
    await pending(sleep)
  }

  const result = await data

  return children(result)
}

export default Promise

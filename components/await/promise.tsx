import { pending } from "@/utils"
import { Props } from "./await"

const Promise = async <T,>({ children, data, sleep }: Props<T>) => {
  if (sleep) {
    await pending(sleep)
  }

  const result = await data

  return children(result)
}

export default Promise

import { Suspense } from "react"
import { wait } from "@/utils"

type Props<T> = {
  data: Promise<T>
  children: (result: T) => JSX.Element
  sleep?: number
  fallback?: string | React.ReactNode
}

const Promise = async <T,>({ children, data, sleep }: Props<T>) => {
  if (sleep) {
    await wait(sleep)
  }

  let result = await data

  return children(result)
}

const Await = async <T,>({ fallback = "Loading...", ...props }: Props<T>) => {
  return (
    <Suspense fallback={fallback}>
      <Promise {...props} />
    </Suspense>
  )
}

export default Await

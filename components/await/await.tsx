import { Suspense as ReactSuspense } from "react"
import { wait } from "@/utils"

type Props<T> = {
  promise: Promise<T>
  children: (result: T) => JSX.Element
  sleep?: number
}

export const Suspense = ({ children }: { children: React.ReactNode }) => {
  return <ReactSuspense fallback="Loading...">{children}</ReactSuspense>
}

const Await = async <T,>({ children, promise, sleep }: Props<T>) => {
  if (sleep) {
    await wait(sleep)
  }

  let result = await promise

  return children(result)
}

export default Await

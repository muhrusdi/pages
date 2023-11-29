import { Fragment, Suspense } from "react"
import { wait } from "@/utils"
import ErrorComponent from "../errors/error"
import {
  ErrorBoundary as NextErrorBoundary,
  ErrorComponent as ErrorComponentType,
} from "next/dist/client/components/error-boundary"

type Props<T> = {
  data: Promise<T>
  children: (result: T) => JSX.Element
  sleep?: number
  fallback?: string | React.ReactNode
  id?: string | number
  errorComponent?: ErrorComponentType
}

const Promise = async <T,>({ children, data, sleep }: Props<T>) => {
  if (sleep) {
    await wait(sleep)
  }

  let result = await data

  return children(result)
}

const Await = async <T,>({
  fallback = "Loading...",
  id,
  errorComponent = ErrorComponent,
  ...props
}: Props<T>) => {
  const ErrorBoundary = errorComponent ? NextErrorBoundary : Fragment

  return (
    <ErrorBoundary errorComponent={errorComponent}>
      <Suspense key={id} fallback={fallback}>
        <Promise {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default Await

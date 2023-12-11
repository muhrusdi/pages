import { Fragment, Suspense, use } from "react"
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
  tags?: string[]
  errorComponent?: ErrorComponentType
}

const Promise = <T,>({ children, data, sleep }: Props<T>) => {
  if (sleep) {
    use(wait(sleep))
  }

  let result = use(data)

  return children(result)
}

const Await = <T,>({
  fallback = "Loading...",
  tags,
  errorComponent = ErrorComponent,
  ...props
}: Props<T>) => {
  const ErrorBoundary = errorComponent ? NextErrorBoundary : Fragment

  return (
    <ErrorBoundary errorComponent={errorComponent}>
      <Suspense key={tags?.join(",")} fallback={fallback}>
        <Promise {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default Await

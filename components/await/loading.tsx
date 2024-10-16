"use client"

import { LoadingContext } from "@/app/providers"
import clsx from "clsx"
import { useSearchParams } from "next/navigation"
import { Suspense, use, useContext, useDeferredValue, useMemo } from "react"

type Props = {
  children: React.ReactNode
  tags?: Record<string, any>
  fallback?: string | React.ReactNode
  name?: string
}

const Loading = ({ children, name = "" }: Props) => {
  const { isPending, pending } = use(LoadingContext)
  const isLoading = pending === name && isPending

  return isLoading ? <div>Loading</div> : <div>{children}</div>
}

export default Loading

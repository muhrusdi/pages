"use client"

import { LoadingContext } from "@/app/providers"
import { use } from "react"

type Props = {
  children: React.ReactNode
  fallback?: string | React.ReactNode
  name?: string
}

const Loading = ({ children, name, fallback }: Props) => {
  const { isPending, pending } = use(LoadingContext)
  const isLoading = pending === name && isPending

  return isLoading ? fallback : children
}

export default Loading

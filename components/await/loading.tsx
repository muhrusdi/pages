"use client"

import { LoadingContext } from "@/app/providers"
import { use } from "react"

type Props = {
  children: React.ReactNode
  name?: string
}

const Loading = ({ children, name }: Props) => {
  const { isPending, pending } = use(LoadingContext)
  const isLoading = pending === name && isPending

  if (isLoading) {
    throw new Promise(() => {})
  }

  return children
}

export default Loading

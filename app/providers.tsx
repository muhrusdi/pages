"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { revalidatePath, revalidateTag } from "next/cache"
import { createContext, startTransition, useState } from "react"

type Props = {
  children: React.ReactNode
}

type ProviderContextType = {
  data: Record<string, any>
  onChange: (val: string | number | Record<string, any>) => void
} | null

const ProviderContext = createContext<ProviderContextType>(null)

const queryClient = new QueryClient()

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export const StateContext = ProviderContext

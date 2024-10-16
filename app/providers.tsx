"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
  TransitionFunction,
  TransitionStartFunction,
  createContext,
  useRef,
  useState,
  useTransition,
} from "react"

type Props = {
  children: React.ReactNode
}

type LoadingContextType = {
  isPending: boolean
  pending?: string | null
  startTransition: (cb: TransitionFunction, name?: string) => void
}

export const LoadingContext = createContext<LoadingContextType>({
  isPending: false,
  pending: null,
  startTransition: () => {},
})

function queryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        experimental_prefetchInRender: true,
      },
    },
  })
}

export const Providers: React.FC<Props> = ({ children }) => {
  const [isPending, startTransition] = useTransition()
  const pending = useRef<string | null>(null)

  const handleTransition = (cb: TransitionFunction, name?: string) => {
    if (name) {
      pending.current = name
    }
    startTransition(() => {
      cb()
    })
  }

  return (
    <QueryClientProvider client={queryClient()}>
      <LoadingContext
        value={{
          isPending,
          pending: pending.current,
          startTransition: handleTransition,
        }}
      >
        {children}
      </LoadingContext>
    </QueryClientProvider>
  )
}

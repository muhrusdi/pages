"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TransitionStartFunction, createContext, useTransition } from "react"

type Props = {
  children: React.ReactNode
}

type ProviderContextType = {
  isPending: boolean
  startTransition: TransitionStartFunction
  data?: Record<string, any>
  onChange?: (val: string | number | Record<string, any>) => void
}

const ProviderContext = createContext<ProviderContextType>({
  isPending: false,
  startTransition: () => {},
})

const queryClient = new QueryClient()

export const Providers: React.FC<Props> = ({ children }) => {
  const [isPending, startTransition] = useTransition()

  return (
    <QueryClientProvider client={queryClient}>
      <ProviderContext.Provider value={{ isPending, startTransition }}>
        {children}
      </ProviderContext.Provider>
    </QueryClientProvider>
  )
}

export const StoreContext = ProviderContext

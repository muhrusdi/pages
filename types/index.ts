import React from "react"

export type RootLayoutType = {
  children: React.ReactNode
}

export type ErrorPageType = {
  error: Error
  reset: () => void
}

export type RecordType = {
  [key: string]: string
}

export type ParamsType = {
  options?: object
  variables?: Record<string, any>
}

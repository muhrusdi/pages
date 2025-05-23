import React, { SyntheticEvent } from "react"
import { z } from "zod"

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

export type UseFormHook<FormState> = {
  formState: FormState
  isPending: boolean
  formAction: (payload: FormData) => void
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => void
}

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  remember: z.boolean().optional(),
})
export type ProjectItemType = {
  title: string
  description?: string
  stacks?: string[]
}

export type MetadataType = {
  title: string
  description: string
  date?: string
  tags?: string[] | string
  readingTime?: string
  author?: string
  slug: string
}

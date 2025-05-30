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
  id?: string | number
  title: string
  description?: string
  stacks?: string[]
  link?: string
  status?: "online" | "offline"
}

export type MetadataType = {
  title: string
  description: string
  date?: string
  tags?: string[]
  file?: string
  readingTime?: string
  author?: string
  slug?: string
  status: "draft" | "published"
}

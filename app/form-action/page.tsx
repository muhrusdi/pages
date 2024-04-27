"use client"

import { useFormStatus, useFormState } from "react-dom"
import { actionForm, ResSchema } from "./actions"
import z from "zod"
import { schema } from "./actions"
import { useForm } from "@/hooks"
import { Input } from "@/components/forms/input"

type ResSchemaType = z.infer<typeof ResSchema>

const Button = () => {
  const { pending, data } = useFormStatus()
  const message = data?.get("message") as string
  console.log(message)
  return <button type="submit">{pending ? "Loading..." : "Submit"}</button>
}

const FormAction = () => {
  const initialState: ResSchemaType = {
    message: "",
    errors: {},
  }

  const { isLoading, formAction, formState, onSubmit } = useForm<ResSchemaType>(
    actionForm,
    initialState
  )

  return (
    <div>
      <form action={formAction} onSubmit={onSubmit} noValidate>
        <div className="flex flex-col max-w-lg gap-3 p-4">
          <input
            name="email"
            aria-label="email"
            required
            type="text"
            className="border-gray-700 border"
          />
          <Input name="select" />
          <pre>{formState?.errors?.email}</pre>
          <input
            name="date"
            aria-label="date"
            type="text"
            className="border-gray-700 border"
          />
          <input
            name="name"
            aria-label="name"
            type="text"
            className="border-gray-700 border"
          />
          <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
        </div>
      </form>
    </div>
  )
}

export default FormAction

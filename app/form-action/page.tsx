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

  const { isPending, formAction, formState, onSubmit } = useForm<ResSchemaType>(
    actionForm,
    initialState,
  )

  return (
    <div>
      <form action={formAction} onSubmit={onSubmit} noValidate>
        <div className="flex max-w-lg flex-col gap-3">
          <input
            name="email"
            aria-label="email"
            required
            type="text"
            className="border border-gray-700"
          />
          <Input name="select" />
          <pre>{formState?.errors?.email}</pre>
          <input
            name="date"
            aria-label="date"
            type="text"
            className="border border-gray-700"
          />
          <input
            name="name"
            aria-label="name"
            type="text"
            className="border border-gray-700"
          />
          <button type="submit">{isPending ? "Loading..." : "Submit"}</button>
        </div>
      </form>
    </div>
  )
}

export default FormAction

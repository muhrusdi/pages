"use client"

import { useFormStatus, useFormState } from "react-dom"
import { actionForm, ResSchema } from "./actions"
import z from "zod"

const Button = () => {
  const { pending, data } = useFormStatus()
  const message = data?.get("message") as string
  console.log(message)
  return <button type="submit">{pending ? "Loading..." : "Submit"}</button>
}

const FormAction = () => {
  const initialState: z.infer<typeof ResSchema> = {
    message: null,
  }

  const [state, formAction] = useFormState(actionForm, initialState)

  return (
    <div>
      <form action={formAction}>
        <div className="flex flex-col max-w-lg gap-3 p-4">
          <input
            name="email"
            required
            type="text"
            className="border-gray-700 border"
          />
          <input name="date" type="text" className="border-gray-700 border" />
          <input name="name" type="text" className="border-gray-700 border" />
          <Button />
        </div>
      </form>
    </div>
  )
}

export default FormAction

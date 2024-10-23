"use client"
import Input from "@/components/forms/input"
import { startTransition, use, useActionState, useTransition } from "react"
import { createUser } from "./actions"
import { LoadingContext } from "@/app/providers"
import Form from "next/form"
import { useFormStatus } from "react-dom"

const Button = () => {
  const { pending } = useFormStatus()
  return <button>{pending ? "Loading..." : "Submit"}</button>
}

const FormPage = () => {
  const [data, createUserAction, isPending] = useActionState(createUser, null)

  const handleCreateUser = async (formData: FormData) => {
    createUserAction(formData)
  }
  return (
    <Form action={handleCreateUser}>
      <div>
        <Input name="name" placeholder="Full name" error={data?.error} />
      </div>
      <div>
        <Input name="email" placeholder="Email" error={data?.error} />
      </div>
      <div>
        <Input name="password" placeholder="Password" error={data?.error} />
      </div>
      <div>
        <select name="role" title="Role">
          <option value="">None</option>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <p className="text-red-500">{data?.error?.role}</p>
      </div>
      <div>
        <Button />
      </div>
    </Form>
  )
}

export default FormPage

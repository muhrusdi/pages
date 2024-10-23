"use client"
import Input from "@/components/forms/input"
import { startTransition, use, useActionState, useTransition } from "react"
import { createUser } from "./actions"
import { LoadingContext } from "@/app/providers"
import Form from "next/form"
import { useFormStatus } from "react-dom"
import { z } from "zod"
import { ActionState, schema } from "./zod"

const FormPage = () => {
  const [data, createUserAction, isPending] = useActionState<
    ActionState | null,
    FormData
  >(createUser, null)

  return (
    <form>
      <div>
        <Input
          name="name"
          placeholder="Full name"
          defaultValue={data?.data?.name}
          error={data?.error}
        />
      </div>
      <div>
        <Input
          name="email"
          placeholder="Email"
          defaultValue={data?.data?.email}
          error={data?.error}
        />
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
        <button type="submit" formAction={createUserAction}>
          {isPending ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  )
}

export default FormPage

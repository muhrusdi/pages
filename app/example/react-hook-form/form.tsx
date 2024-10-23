"use client"
import { Input } from "@/components/forms/input"
import { startTransition, useActionState } from "react"
import { createUserForm } from "./actions"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "./zod"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { Select } from "@/components/forms/select"

const FormPage = () => {
  const [, createUser, isPending] = useActionState(createUserForm, null)
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  const onCreateUser: SubmitHandler<z.infer<typeof schema>> = async data => {
    startTransition(async () => {
      createUser(data)
    })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onCreateUser)}>
        <div>
          <Input name="name" placeholder="Full name" defaultValue="" />
        </div>
        <div>
          <Input name="email" placeholder="Email" defaultValue="" />
        </div>
        <div>
          <Input name="password" placeholder="Password" defaultValue="" />
        </div>
        <div>
          <Select name="role" defaultValue="" />
        </div>
        <div>
          <button type="submit">{isPending ? "Loading..." : "Submit"}</button>
        </div>
      </form>
    </FormProvider>
  )
}

export default FormPage

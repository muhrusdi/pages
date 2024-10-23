"use client"
import { InputHTMLAttributes } from "react"
import { Controller, useFormContext } from "react-hook-form"
import Input from "."

type Props = {
  name: string
  errors?: Record<string, any>
} & InputHTMLAttributes<HTMLInputElement>

export const FormInput: React.FC<Props> = ({ errors, ...props }) => {
  const form = useFormContext()
  const error = (form.formState.errors || errors)[props.name]
  const errorMessage = error?.message as string

  return (
    <>
      <Controller
        render={({ field }) => {
          return <Input {...field} />
        }}
        control={form.control}
        {...props}
      />

      <div>{errorMessage}</div>
    </>
  )
}

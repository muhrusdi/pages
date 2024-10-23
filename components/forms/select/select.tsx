"use client"
import { SelectHTMLAttributes } from "react"
import { Controller, useFormContext } from "react-hook-form"
import Select from "."

type Props = {
  name: string
  errors?: Record<string, any>
} & SelectHTMLAttributes<HTMLSelectElement>

export const FormSelect: React.FC<Props> = ({ required, errors, ...props }) => {
  const form = useFormContext()
  const error = (form.formState.errors || errors)[props.name]
  const errorMessage = error?.message as string

  return (
    <>
      <Controller
        render={({ field }) => {
          return <Select {...field} />
        }}
        rules={{ required }}
        control={form.control}
        {...props}
      />

      <div>{errorMessage}</div>
    </>
  )
}

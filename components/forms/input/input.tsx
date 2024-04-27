import { InputHTMLAttributes } from "react"
import { Controller, useFormContext } from "react-hook-form"

type Props = {
  name: string
  errors?: Record<string, any>
} & InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = ({ errors, ...props }) => {
  const form = useFormContext()
  const error = (form.formState.errors || errors)[props.name]
  const errorMessage = error?.message

  return (
    <>
      {form?.control ? (
        <Controller
          render={({ field }) => {
            return <input {...field} />
          }}
          control={form.control}
          {...props}
        />
      ) : (
        <input {...props} />
      )}
      <div>{error?.message as string}</div>
    </>
  )
}

export default Input

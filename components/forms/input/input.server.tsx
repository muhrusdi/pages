import { InputHTMLAttributes } from "react"

type Props = {
  error?: Record<string, any> | null | string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ error, ...props }: Props) => {
  const errorMessage =
    typeof error === "string" ? error : error?.[props.name || ""]

  return (
    <>
      <input {...props} />
      {errorMessage ? (
        <div aria-live="polite" className="text-red-500">
          {errorMessage}
        </div>
      ) : null}
    </>
  )
}

import { SelectHTMLAttributes } from "react"

type Props = {
  error?: Record<string, any> | null | string
} & SelectHTMLAttributes<HTMLSelectElement>

export const Select = (props: Props) => {
  return (
    <select {...props}>
      <option value="">None</option>
      <option value="customer">Customer</option>
      <option value="admin">Admin</option>
    </select>
  )
}

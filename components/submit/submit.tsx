"use client"
import { FormStatus, useFormStatus } from "react-dom"

const Submit: React.FC<{
  children: (status: FormStatus) => React.ReactNode
}> = ({ children }) => {
  const status = useFormStatus()
  return children(status)
}

export default Submit

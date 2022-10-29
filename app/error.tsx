"use client"

import { ErrorPageType } from "@/types"
import { useEffect } from "react"

const Error: React.FC<ErrorPageType> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  )
}

export default Error

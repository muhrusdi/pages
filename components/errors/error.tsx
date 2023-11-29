"use client"

import { ErrorPageType } from "@/types"
import { useEffect } from "react"

const Error: React.FC<ErrorPageType> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h4 className="font-bold text-lg">Something went wrong!</h4>
      <div className="mt-2">
        <p className="code text-pink-600 bg-pink-100 inline-block">
          {error.message}
        </p>
      </div>
      <button
        className="bg-blue-200 mt-4 px-4 py-2 text-sm rounded-lg"
        onClick={() => reset()}
      >
        Refresh
      </button>
    </div>
  )
}

export default Error

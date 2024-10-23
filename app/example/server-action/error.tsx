"use client" // Error boundaries must be Client Components

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: (Error & { digest?: string }) | any
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("---sfs", error.message)
  }, [error])

  return (
    <div>
      <h2>
        {error.message} code: {error.code}
      </h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

import { useMemo } from "react"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className="text-gray-400">
      <span>© {year}</span>
    </div>
  )
}

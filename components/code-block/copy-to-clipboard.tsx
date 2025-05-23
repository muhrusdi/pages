"use client"

import { Check, Copy } from "lucide-react"
import { useRef, useState } from "react"

const CopyToClipboard = ({ code }: { code: string }) => {
  const copyRef = useRef<NodeJS.Timeout>(null)
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setIsCopied(true)
    copyRef.current = setTimeout(() => {
      setIsCopied(false)
      if (copyRef.current) {
        clearTimeout(copyRef.current)
      }
      copyRef.current = null
    }, 1000)
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-1 right-1 z-50 cursor-pointer rounded-sm p-2 hover:bg-gray-800"
    >
      {isCopied ? (
        <Check className="text-green-500" size={14} />
      ) : (
        <Copy size={14} />
      )}
    </button>
  )
}

export default CopyToClipboard

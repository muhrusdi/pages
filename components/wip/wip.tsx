"use client"

import { usePathname } from "next/navigation"

const WIP = () => {
  const pathname = usePathname()

  const isPhotos = pathname.startsWith("/photos")
  return isPhotos ? (
    <div className="bg-linear-65 from-purple-500 to-pink-500 py-1 text-center text-sm text-white uppercase">
      <span>Work in progress</span>
    </div>
  ) : null
}

export default WIP

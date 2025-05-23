"use client"

import { BackArrow2 } from "@/assets/icons"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { menuItemAnimate } from "@/utils"
import { HouseIcon } from "lucide-react"

const navData = [
  {
    id: 1,
    title: "Work",
    link: "/work",
  },
  {
    id: 2,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 3,
    title: "About",
    link: "/me",
  },
]

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()

  const firstPath = pathname.split("/").filter(Boolean).splice(0, 1)

  const handleHover = (bool: boolean) => {
    setIsHovered(bool)
  }

  return (
    <nav className="flex items-center justify-between py-6 text-sm text-white uppercase">
      <div>
        <motion.ul className="flex items-center gap-3">
          {/* <li>
            <Link
              href="/"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <BackArrow2 height={20} className="[&>path]:fill-amber-500" />
            </Link>
          </li> */}
          <li>
            <Link
              href="/"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <HouseIcon size={18} />
            </Link>
          </li>
          <li>
            <ul className="relative flex items-center space-x-2">
              <AnimatePresence initial={false} mode="popLayout">
                {isHovered ? (
                  <motion.li
                    key="back"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={menuItemAnimate}
                  >
                    <span>Home</span>
                  </motion.li>
                ) : (
                  <motion.li
                    key="work"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={menuItemAnimate}
                  >
                    <Link
                      href={"/" + firstPath}
                      className="flex items-center gap-1"
                    >
                      <span>{firstPath}</span>
                    </Link>
                  </motion.li>
                )}
              </AnimatePresence>
            </ul>
          </li>
        </motion.ul>
      </div>
      <ul className="flex space-x-6 text-gray-400">
        {navData.map(item =>
          !pathname.startsWith(item.link) ? (
            <li key={item.id}>
              <Link href={item.link} key={item.id} className="hover:text-white">
                {item.title}
              </Link>
            </li>
          ) : null,
        )}
      </ul>
    </nav>
  )
}

export default Navigation

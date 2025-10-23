"use client"

import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { useId, useState } from "react"
import { usePathname } from "next/navigation"
import { menuItemAnimate } from "@/utils"
import clsx from "clsx"

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
  // {
  //   id: 2,
  //   title: "Photos",
  //   link: "/photos",
  // },
  {
    id: 3,
    title: "About",
    link: "/me",
  },
]

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()
  const id = useId()

  const firstPath = pathname.split("/").filter(Boolean).splice(0, 1)
  const isHome = pathname === "/"

  const handleHover = (bool: boolean) => {
    setIsHovered(bool)
  }

  return (
    <nav className="flex items-center justify-between py-6 text-white uppercase">
      <div>
        <motion.ul className="flex items-center gap-4">
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 745 745"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M103 103L255.036 255.036L273.364 273.364L372.5 372.5L471.636 273.364V283.777V471.636L489.964 489.964L642 642V103L489.964 255.036L471.636 273.364L372.5 372.5L430.5 430.5L273.364 300.022V471.636L255.036 489.964L103 642V103Z"
                  fill="white"
                />
              </svg>
            </Link>
          </li>
          <li className={clsx({ hidden: isHome })}>
            <ul className="relative flex items-center space-x-2 text-sm">
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
      <ul className="flex space-x-6 text-sm text-gray-400">
        {navData.map((item, i) =>
          !pathname.startsWith(item.link) ? (
            <li key={i}>
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

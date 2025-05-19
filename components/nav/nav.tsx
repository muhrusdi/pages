"use client"

import { BackArrow } from "@/assets/icons"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false)

  const backItemAnimate = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
    },
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
    exit: {
      opacity: 0,
      y: -10,
    },
  }

  const menuItemAnimate = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
    },
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
    exit: {
      opacity: 0,
      y: -10,
    },
  }

  const handleHover = (bool: boolean) => {
    setIsHovered(bool)
  }

  return (
    <nav className="flex items-center justify-between py-6 text-sm text-white uppercase">
      <div>
        <AnimatePresence>
          <motion.ul className="flex items-center space-x-2">
            <li>
              <Link
                href="/"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                <BackArrow height={20} className="[&>path]:fill-amber-500" />
              </Link>
            </li>
            {isHovered ? (
              <motion.li
                key="back"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={backItemAnimate}
              >
                <span>Back</span>
              </motion.li>
            ) : (
              <motion.li
                key="work"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={menuItemAnimate}
              >
                <span>Work</span>
              </motion.li>
            )}
          </motion.ul>
        </AnimatePresence>
      </div>
      <ul className="flex space-x-6 text-gray-400">
        <li>
          <a href="/work" className="hover:text-white">
            Work
          </a>
        </li>
        <li>
          <a href="/blog" className="hover:text-white">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

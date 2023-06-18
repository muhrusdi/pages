"use client"
import clsx from "clsx"
import styles from "./navigation.module.scss"
import { useState, useTransition } from "react"
import Link from "next/link"
import { menus } from "@/utils/menus"
import {
  AnimatePresence,
  motion,
  useIsPresent,
  useMotionValue,
  useMotionValueEvent,
  usePresence,
  useTransform,
} from "framer-motion"
import { usePathname } from "next/navigation"
import { FiAlertCircle } from "react-icons/fi"

export const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()

  const y = useMotionValue(0)

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseOut = () => {
    setIsHovered(false)
  }

  return (
    <>
      <div className="bg-white text-gray-600">
        <div className="container">
          <div className="flex items-center h-[36px] uppercase text-sm">
            <span className="block pr-2">
              <FiAlertCircle size={20} />
            </span>
            <span>
              <span className="hidden sm:inline-block mr-1">
                This site still
              </span>
              under construction. Visit{" "}
              <a href="https://2022-rus.pages.dev">
                <b>old site</b>
              </a>
            </span>
          </div>
        </div>
      </div>
      <nav className={clsx("uppercase", styles.navigation, { isHovered })}>
        <div className="container">
          <div className="flex justify-between h-[80px] items-center">
            <div>
              <div className="flex items-center space-x-2">
                <div>
                  <Link
                    href="/"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    MR
                  </Link>
                </div>
                <div>
                  <span className="block text-xs border border-gray-600 text-gray-400 px-2 py-1 rounded-lg uppercase">
                    dev
                  </span>
                </div>
              </div>
            </div>
            <div className={clsx("flex", styles.menus)}>
              {menus.map((item, i) => {
                return (
                  <div key={item.id} className="py-[22px] relative">
                    <Link
                      href={item.path}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      <span>{item.label}</span>
                    </Link>
                    <AnimatePresence>
                      {pathname === item.path ? (
                        <motion.div
                          layoutId="underline"
                          initial={y.get() !== 0 ? { y: -10 } : false}
                          animate={false}
                          exit={{ y: -10 }}
                          className={clsx(
                            "h-1 absolute w-full left-0 top-0 rounded-b-lg",
                            styles.underline
                          )}
                        />
                      ) : null}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
            <div>
              <button
                className="uppercase"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

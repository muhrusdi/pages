"use client"
import { ArrowRight } from "@/assets/icons"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { menuItemAnimate } from "@/utils"

type Props = {
  children: React.ReactNode
  title: string
  actionLink?: string
}

const Section: React.FC<Props> = ({ children, title, actionLink }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="py-8">
      <div className="flex h-7 items-center justify-between">
        <div>
          <AnimatePresence initial={false} mode="popLayout">
            {isHovered ? (
              <motion.h2
                key="back"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={menuItemAnimate}
                className="text-xl font-semibold"
              >
                More
              </motion.h2>
            ) : (
              <motion.h2
                key="work"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={menuItemAnimate}
                className="text-xl font-semibold"
              >
                {title}
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
        {actionLink ? (
          <div>
            <div>
              <Link
                href={actionLink}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <ArrowRight
                  className="[&>path]:fill-amber-500"
                  height={12}
                  fontSize={13}
                />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export default Section

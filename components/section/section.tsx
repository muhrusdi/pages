"use client"
import { ArrowRight } from "@/assets/icons"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { menuItemAnimate } from "@/utils"
import { ArrowRightIcon } from "lucide-react"

type Props = {
  children: React.ReactNode
  title: string
  actionLink?: string
}

const Section: React.FC<Props> = ({ children, title, actionLink }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="group/item py-8">
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
          <div className="invisible group-hover/item:visible">
            <div>
              <Link
                href={actionLink}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <ArrowRightIcon size={18} />
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

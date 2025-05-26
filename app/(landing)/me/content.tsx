"use client"

import { cn } from "@/utils"
import { useState } from "react"
import { dataStack } from "./data"
import { StackItem } from "@/components/cards/stack-item"
import { motion } from "motion/react"

const filterList = [
  { id: "all", title: "All" },
  { id: "library", title: "Library" },
  { id: "ui", title: "UI" },
]

type FilterType = "all" | "library" | "ui" | ""

const Content = () => {
  const [filter, setFilter] = useState<FilterType>("")

  let filtered = []

  switch (filter) {
    case "all":
      filtered = [...dataStack.library, ...dataStack.ui]
      break
    case "library":
      filtered = dataStack.library
      break
    case "ui":
      filtered = dataStack.ui
      break
    default:
      filtered = [...dataStack.library, ...dataStack.ui].splice(0, 8)
      break
  }

  const itemAnimate = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
    },
  }

  const handleFilterChange = (item: { id: string; title: string }) => {
    if (filter === item.id) {
      setFilter("")
      return
    }
    setFilter(item.id as FilterType)
  }

  return (
    <div className="mt-11">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Stack</h2>
        </div>
        <div>
          <ul className="flex items-center overflow-hidden rounded-md border border-gray-800 bg-gray-950 text-sm [&>li>button]:px-3 [&>li>button]:py-1 [&>li>button]:hover:bg-gray-900">
            {filterList.map(item => (
              <li key={item.id}>
                <button
                  className={cn(
                    filter === item.id ? "bg-gray-900" : "",
                    "cursor-pointer",
                  )}
                  onClick={() => handleFilterChange(item)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-3">
        <div className="relative">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 [&_svg]:h-[60px] [&_svg]:fill-white">
            {filtered.map((item, i) => (
              <motion.li
                key={filter + i}
                variants={itemAnimate}
                initial="initial"
                animate="animate"
                transition={{
                  delay: i * 0.05,
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
                exit="exit"
              >
                <StackItem title={item.title}>{item.svg}</StackItem>
              </motion.li>
            ))}
          </ul>
          {filter === "" ? (
            <div className="absolute bottom-0 flex h-[200px] w-full items-end justify-center bg-linear-to-t from-black to-transparent">
              <div>
                <button
                  onClick={() => setFilter("all")}
                  className="cursor-pointer rounded-full border-yellow-400 bg-yellow-500 px-4 py-1 transition-colors hover:bg-yellow-600"
                >
                  Show All
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Content

"use client"

import { cn } from "@/utils"
import { useState } from "react"
import { CustomHandle, dataStack } from "./data"
import { StackItem } from "@/components/cards/stack-item"
import { motion } from "motion/react"
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider"
import { CodeIcon, FrameIcon, ImageIcon } from "lucide-react"

const filterList = [
  { id: "all", title: "All" },
  { id: "library", title: "Library" },
  { id: "ui", title: "UI" },
]

const desainList = [
  { id: "image", title: "Image", icon: <ImageIcon size={14} /> },
  { id: "design", title: "Design", icon: <FrameIcon size={14} /> },
  { id: "code", title: "Code", icon: <CodeIcon size={14} /> },
]

type FilterType = "all" | "library" | "ui" | ""
type DesingFilterType = "image" | "design" | "code" | ""

type Props = {
  renderServer?: React.ReactNode
}

const Content = ({ renderServer }: Props) => {
  const [filter, setFilter] = useState<FilterType>("")
  const [desainFilter, setDesainFilter] = useState<DesingFilterType>("")

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

  const handleDesignChange = (item: { id: string; title: string }) => {
    if (desainFilter === item.id) {
      setDesainFilter("")
      return
    }
    setDesainFilter(item.id as DesingFilterType)
  }

  return (
    <div className="mt-11">
      <div>
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
      <div className="mt-20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Ability</h2>
          </div>
          <div>
            <ul className="flex h-[28px] items-center overflow-hidden rounded-md border border-gray-800 bg-gray-950 text-sm [&>li>button]:px-3 [&>li>button]:py-1 [&>li>button]:hover:bg-gray-900">
              {desainList.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => handleDesignChange(item)}
                    className={cn(
                      "h-[28px] cursor-pointer",
                      desainFilter === item.id ? "bg-gray-900" : "",
                    )}
                  >
                    {item.icon}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="h-[400px] rounded-md bg-[url('https://res.cloudinary.com/muhrusdi/image/upload/v1748257640/bg-males-view_vu3rxi.png')] bg-size-[auto_400px] bg-center bg-no-repeat">
          {desainFilter === "" ? (
            <ReactCompareSlider
              className="h-[400px] rounded-md"
              handle={<CustomHandle />}
              itemOne={
                <ReactCompareSliderImage
                  src="https://res.cloudinary.com/muhrusdi/image/upload/v1748258697/bg-males-view-frame_wovdnf.png"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://res.cloudinary.com/muhrusdi/image/upload/v1748258697/bg-males-view_xwqgel.png"
                  alt="Image two"
                />
              }
            />
          ) : null}
          {desainFilter === "image" ? (
            <ReactCompareSliderImage
              src="https://res.cloudinary.com/muhrusdi/image/upload/v1748252628/males-view_vmly3h.png"
              alt="Image one"
            />
          ) : null}
          {desainFilter === "design" ? (
            <ReactCompareSlider
              className="h-[400px] rounded-md"
              itemOne={
                <ReactCompareSliderImage
                  src="https://res.cloudinary.com/muhrusdi/image/upload/v1748252628/males-view_vmly3h.png"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://res.cloudinary.com/muhrusdi/image/upload/v1748252626/maless-frame_utni8t.png"
                  alt="Image two"
                />
              }
            />
          ) : null}
          {desainFilter === "code" ? (
            <ReactCompareSlider
              className="h-[400px] rounded-md"
              onlyHandleDraggable
              itemOne={
                <ReactCompareSliderImage
                  src="https://res.cloudinary.com/muhrusdi/image/upload/v1748252628/males-view_vmly3h.png"
                  alt="Image one"
                />
              }
              itemTwo={renderServer}
            />
          ) : null}
        </div>
        <div className="mt-8 flex justify-center text-xs font-light uppercase">
          <div className="flex items-center gap-2">
            <span>Designed with </span>
            <span>
              <svg
                width="14"
                height="21"
                viewBox="0 0 14 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17.4778C0 15.5326 1.58194 13.9557 3.53333 13.9557H7.06667V17.4778C7.06667 19.4231 5.48472 21 3.53333 21C1.58194 21 0 19.4231 0 17.4778Z"
                  fill="#24CB71"
                />
                <path
                  d="M7.06667 0V7.0443H10.5333C12.4479 7.0443 14 5.46737 14 3.52215C14 1.57694 12.4479 0 10.5333 0H7.06667Z"
                  fill="#FF7237"
                />
                <path
                  d="M10.4667 13.9557C12.4181 13.9557 14 12.4085 14 10.5C14 8.59148 12.4181 7.04431 10.4667 7.04431C8.51526 7.04431 6.93333 8.59148 6.93333 10.5C6.93333 12.4085 8.51526 13.9557 10.4667 13.9557Z"
                  fill="#00B6FF"
                />
                <path
                  d="M0 3.52215C0 5.46737 1.58194 7.0443 3.53333 7.0443H7.06667V0H3.53333C1.58194 0 0 1.57694 0 3.52215Z"
                  fill="#FF3737"
                />
                <path
                  d="M0 10.5C0 12.4085 1.58194 13.9557 3.53333 13.9557H7.06667V7.04431H3.53333C1.58194 7.04431 0 8.5915 0 10.5Z"
                  fill="#874FFF"
                />
              </svg>
            </span>
            <span>Built with</span>
            <span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height={21}
                fill="white"
              >
                <title>Next.js</title>
                <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content

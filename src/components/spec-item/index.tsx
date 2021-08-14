import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PropsType } from "./props-type"
import { SpecsGroup, IconStyled } from "./styled"
import { 
  HiOutlineBookOpen,
  HiOutlineCode,
  HiOutlineCollection,
  HiOutlineOfficeBuilding,
  HiOutlineUserCircle,
  HiOutlineViewGrid
} from "react-icons/hi"

const SpecItem: React.FC<PropsType> = ({data: {title, description}}) => {
  const [toggle, setToggle] = useState(false);
  const specs: any = {
    "Profile": {
      icon: (
        <IconStyled className="flex items-center justify-center rounded-2xl sm:rounded-4xl bg-gradient-to-br from-pink-400 to-pink-600">
          <HiOutlineUserCircle className="h-6 w-6"/>
        </IconStyled>
      )
    },
    "Career": {
      icon: (
        <IconStyled className="flex items-center justify-center rounded-2xl sm:rounded-4xl bg-gradient-to-br from-purple-400 to-purple-600">
          <HiOutlineOfficeBuilding className="h-6 w-6"/>
        </IconStyled>
      ),
    },
    "Education": {
      icon: (
        <IconStyled className="flex items-center justify-center rounded-2xl sm:rounded-4xl bg-gradient-to-br from-yellow-400 to-yellow-600">
          <HiOutlineBookOpen className="h-6 w-6"/>
        </IconStyled>
      )
    },
    "Stack": {
      icon: (
        <IconStyled className="flex items-center justify-center rounded-2xl sm:rounded-4xl bg-gradient-to-br from-blue-400 to-blue-600">
          <HiOutlineCollection className="h-6 w-6"/>
        </IconStyled>
      )
    },
    "Skill": {
      icon: (
        <IconStyled className="flex items-center justify-center rounded-2xl sm:rounded-4xl bg-gradient-to-br from-indigo-400 to-indigo-600">
          <HiOutlineCode className="h-6 w-6"/>
        </IconStyled>
      )
    },
    "Work": {
      icon: (
        <IconStyled className="flex items-center justify-center rounded-2xl sm:rounded-4xl bg-gradient-to-br from-green-400 to-green-600">
          <HiOutlineViewGrid className="h-6 w-6"/>
        </IconStyled>
      )
    }
  }

  const buttonVariants = {
    open: {rotate: 45},
    closed: {rotate: 0}
  }

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <SpecsGroup className="relative border-gray-600">
      <div className="flex py-6 sm:py-12 justify-between items-center">
        <div className="flex items-center">
          <div className="icon-wrapper">
            <div>
              {specs[title].icon}
            </div>
          </div>
          <div className="select-none">
            <h3 className="text-2xl sm:text-5xl font-black">{title}</h3>
          </div>
        </div>
        <motion.button
          animate={toggle ? "open" : "closed"}
          variants={buttonVariants}
          className="close focus:outline-none" onClick={handleClick} >
          <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 0.5V53.5" stroke="white"/>
          <path d="M0.25 27L53.25 27" stroke="white"/>
          </svg>
        </motion.button>
      </div>
      <div className="content">
        <AnimatePresence initial={false}>
          {
            toggle && (
              <motion.div
                variants={{
                  open: { height: "auto" },
                  collapsed: { height: 0, transition: {delay: .1} }
                }}
                animate="open"
                initial="collapsed"
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                exit="collapsed">
                <motion.div
                  variants={{
                    open: { top: 0, opacity: 1 },
                    collapsed: { top: -40, opacity: 0, transition: {duration: .5} }
                  }}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  className="pt-10 pb-16 text-xl text-gray-300 leading-loose relative">
                  {description}
                </motion.div>
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </SpecsGroup>
  )
}

export default SpecItem
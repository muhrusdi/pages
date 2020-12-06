import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PropsType } from "./props-type"

const SpecItem: React.FC<PropsType> = ({data: {title}}) => {
  const [toggle, setToggle] = useState(false);
  const specs = {
    "General Information": {
      icon: (
        <svg width="135" height="135" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="135" height="135" rx="29" fill="url(#paint0_linear-316408)"/>
        <path d="M95.1817 89.6231C91.5874 83.8316 83.6747 77.625 67.5 77.625C51.3253 77.625 43.4177 83.8266 39.8182 89.6231C43.1346 93.7807 47.3458 97.1369 52.1384 99.442C56.931 101.747 62.1818 102.942 67.5 102.938C72.8182 102.942 78.0689 101.747 82.8616 99.442C87.6542 97.1369 91.8654 93.7807 95.1817 89.6231V89.6231Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M67.5 72.5625C71.528 72.5625 75.391 70.9624 78.2392 68.1142C81.0874 65.266 82.6875 61.403 82.6875 57.375C82.6875 53.347 81.0874 49.484 78.2392 46.6358C75.391 43.7876 71.528 42.1875 67.5 42.1875C63.472 42.1875 59.609 43.7876 56.7608 46.6358C53.9126 49.484 52.3125 53.347 52.3125 57.375C52.3125 61.403 53.9126 65.266 56.7608 68.1142C59.609 70.9624 63.472 72.5625 67.5 72.5625V72.5625Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M67.5 32.0625C58.1014 32.0625 49.0877 35.7961 42.4419 42.4419C35.7961 49.0877 32.0625 58.1014 32.0625 67.5C32.0625 76.8986 35.7961 85.9123 42.4419 92.5581C49.0877 99.2039 58.1014 102.937 67.5 102.938C76.8986 102.938 85.9123 99.2039 92.5581 92.5581C99.2039 85.9123 102.938 76.8986 102.938 67.5C102.938 58.1014 99.2039 49.0877 92.5581 42.4419C85.9123 35.7961 76.8986 32.0625 67.5 32.0625V32.0625ZM27 67.5C27 56.7587 31.267 46.4574 38.8622 38.8622C46.4574 31.267 56.7587 27 67.5 27C78.2413 27 88.5426 31.267 96.1378 38.8622C103.733 46.4574 108 56.7587 108 67.5C108 78.2413 103.733 88.5426 96.1378 96.1378C88.5426 103.733 78.2413 108 67.5 108C56.7587 108 46.4574 103.733 38.8622 96.1378C31.267 88.5426 27 78.2413 27 67.5V67.5Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear-316408" x1="67.5" y1="0" x2="67.5" y2="135" gradientUnits="userSpaceOnUse">
        <stop stop-color="#D13DBA"/>
        <stop offset="1" stop-color="#D2206B"/>
        </linearGradient>
        </defs>
        </svg>
      )
    },
    "Experiences": {
      icon: (
        <svg width="135" height="135" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="135" height="135" rx="29" fill="url(#paint0_linear-227869)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.9375 119.375C40.9375 119.375 35.625 119.375 35.625 114.062C35.625 108.75 40.9375 92.8125 67.5 92.8125C94.0625 92.8125 99.375 108.75 99.375 114.062C99.375 119.375 94.0625 119.375 94.0625 119.375H40.9375ZM67.5 87.5C71.7269 87.5 75.7807 85.8209 78.7695 82.832C81.7584 79.8432 83.4375 75.7894 83.4375 71.5625C83.4375 67.3356 81.7584 63.2818 78.7695 60.293C75.7807 57.3041 71.7269 55.625 67.5 55.625C63.2731 55.625 59.2193 57.3041 56.2305 60.293C53.2416 63.2818 51.5625 67.3356 51.5625 71.5625C51.5625 75.7894 53.2416 79.8432 56.2305 82.832C59.2193 85.8209 63.2731 87.5 67.5 87.5V87.5Z" fill="white"/>
        <path d="M68 15L72.0413 27.4377H85.119L74.5389 35.1246L78.5801 47.5623L68 39.8754L57.4199 47.5623L61.4611 35.1246L50.881 27.4377H63.9587L68 15Z" fill="white"/>
        <path d="M35.5 36L37.4084 41.8734L43.584 41.8734L38.5878 45.5033L40.4962 51.3766L35.5 47.7467L30.5038 51.3766L32.4122 45.5033L27.416 41.8734L33.5916 41.8734L35.5 36Z" fill="white"/>
        <path d="M99.5 36L101.408 41.8734L107.584 41.8734L102.588 45.5033L104.496 51.3766L99.5 47.7467L94.5038 51.3766L96.4122 45.5033L91.416 41.8734L97.5916 41.8734L99.5 36Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear-227869" x1="53" y1="123" x2="53" y2="0" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F7971E"/>
        <stop offset="1" stop-color="#FFD200"/>
        </linearGradient>
        </defs>
        </svg>
      ),
    },
    "Education": {
      icon: (
        <svg width="135" height="135" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="135" height="135" rx="29" fill="url(#paint0_linear-551114)"/>
        <g clip-path="url(#clip0-495358)">
        <path d="M103.397 95.6218C105.079 96.3043 107 95.1099 107 93.2964V41.1875C107.007 40.7395 106.883 40.2993 106.643 39.9208C106.403 39.5424 106.058 39.2422 105.65 39.0572C100.16 36.605 79.2272 28.3809 68.0001 39.686C56.7681 28.3907 35.8397 36.605 30.3504 39.0572C29.9408 39.2429 29.5946 39.5446 29.3546 39.9249C29.1146 40.3053 28.9914 40.7476 29.0001 41.1973V93.3013C29.0001 95.1148 30.9208 96.314 32.6027 95.6267C42.3478 91.6535 58.8594 88.0509 68.0001 97.25C77.1407 88.0509 93.6523 91.6535 103.397 95.6218Z" fill="white"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear-551114" x1="68" y1="0" x2="68" y2="135" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FE8C00"/>
        <stop offset="1" stop-color="#F83600"/>
        </linearGradient>
        <clipPath id="clip0-495358">
        <rect width="78" height="78" fill="white" transform="translate(29 29)"/>
        </clipPath>
        </defs>
        </svg>
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
    <div className="flex relative py-12 border-gray-600">
      <div className="pr-8">
        <div>
          {specs[title].icon}
        </div>
      </div>
      <div>
        <div className="select-none">
          <h3 className="text-5xl font-black py-11">{title}</h3>
        </div>
        <motion.button
          animate={toggle ? "open" : "closed"}
          variants={buttonVariants}
          className="absolute focus:outline-none" style={{right: 0, top: 95}} onClick={handleClick} >
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 0.5V53.5" stroke="white"/>
          <path d="M0.25 27L53.25 27" stroke="white"/>
          </svg>
        </motion.button>
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
                  className="pt-10 pb-16 text-lg leading-loose relative">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, consectetur.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere nobis quia corrupti deleniti perspiciatis aliquid repellendus saepe, in optio repellat, nisi animi fugit reiciendis voluptatibus mollitia distinctio itaque officiis.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere nobis quia corrupti deleniti perspiciatis aliquid repellendus saepe, in optio repellat, nisi animi fugit reiciendis voluptatibus mollitia distinctio itaque officiis.</p>
                </motion.div>
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </div>
  )
}

export default SpecItem
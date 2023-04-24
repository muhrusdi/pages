"use client"
import clsx from "clsx"
import styles from "./navigation.module.scss"
import { useState } from "react"

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseOut = () => {
    setIsHovered(false)
  }

  return (
    <nav className={clsx("uppercase", styles.navigation, { isHovered })}>
      <div className="container">
        <div className="flex justify-between h-[74px] items-center">
          <div>
            <a
              href="#"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              MR
            </a>
          </div>
          <div className={clsx("flex", styles.menus)}>
            <div>
              <a
                href="#"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <span>Blog</span>
              </a>
            </div>
            <div>
              <a
                href="#"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <span>Work</span>
              </a>
            </div>
            <div>
              <a
                href="#"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <span>Story</span>
              </a>
            </div>
            <div>
              <a
                href="#"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <span>Profile</span>
              </a>
            </div>
          </div>
          <div>
            <a
              href="#"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <span>Menu</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

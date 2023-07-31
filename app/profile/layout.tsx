import type { NextPage } from "next"
import Image from "next/image"
import styles from "@/styles/global.module.scss"
import clsx from "clsx"
import Link from "next/link"

type Props = {
  children: React.ReactNode
} & NextPage

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div
        className={clsx(
          "border-t border-b border-gray-900/70  backdrop-blur",
          styles["gradient-nav"]
        )}
      >
        <div className="container">
          <div className="flex justify-center h-[40px] text-gray-400 text-sm items-center space-x-6 uppercase">
            <div>
              <Link href="/profile">
                <span>Summary</span>
              </Link>
            </div>
            <div>
              <Link href="/profile/education">
                <span>Education</span>
              </Link>
            </div>
            <div>
              <Link href="/profile/career">
                <span>Career</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[467px]">
        <div className="mt-14">{children}</div>
      </div>
    </div>
  )
}

export default Layout

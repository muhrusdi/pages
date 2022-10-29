import { RootLayoutType } from "@/types"
import { Inter } from "@next/font/google"
import clsx from "clsx"
import "../styles/globals.css"

const inter = Inter()

const RootLayout: React.FC<RootLayoutType> = ({ children }) => {
  return (
    <html lang="en" className={clsx(inter.className, "dark")}>
      <head>
        <title>Sen.js</title>
      </head>
      <body className="dark:bg-slate-900 dark:text-white">{children}</body>
    </html>
  )
}

export default RootLayout

import { RootLayoutType } from "@/types"
import { Inter } from "next/font/google"
import clsx from "clsx"
import "../styles/globals.css"
import { Navigation } from "@/components/naviagation"
import styles from "../styles/global.module.scss"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
})

const RootLayout: React.FC<RootLayoutType> = ({ children }) => {
  return (
    <html lang="en" className={clsx(inter.className, "dark")}>
      <head>
        <title>Muhammad Rusdi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={clsx("dark:bg-black dark:text-white", styles.bg)}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout

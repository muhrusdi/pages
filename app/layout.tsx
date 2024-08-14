import { RootLayoutType } from "@/types"
import { Inter } from "next/font/google"
import clsx from "clsx"
import "../styles/globals.css"
import { Providers } from "./providers"

const inter = Inter({
  subsets: ["latin"],
})

export const fetchCache = "default-no-store"

const RootLayout: React.FC<RootLayoutType> = ({ children }) => {
  return (
    <html lang="en" className={clsx(inter.className, "dark font-normal")}>
      <head>
        <title>Sen.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout

import { RootLayoutType } from "@/types"
import { Inter } from "next/font/google"
import clsx from "clsx"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({
  subsets: ["latin"],
})

const RootLayout: React.FC<RootLayoutType> = ({ children }) => {
  return (
    <html lang="en" className={clsx(inter.className, "font-normal")}>
      <head>
        <title>Sen.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-white dark:bg-black dark:text-white">
        <Providers>
          <div className="container max-w-2xl">{children}</div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

import { RootLayoutType } from "@/types"
import { Inter } from "next/font/google"
import clsx from "clsx"
import "./globals.css"
import { Providers } from "./providers"
import { Footer } from "@/components/footer"
import { Nav } from "@/components/nav"

const inter = Inter({
  subsets: ["latin"],
})

const RootLayout: React.FC<RootLayoutType> = ({ children }) => {
  return (
    <html lang="en" className={clsx(inter.className, "dark font-normal")}>
      <head>
        <title>Muhammad Rusdi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-white dark:bg-black dark:text-white">
        <Providers>
          <Nav />
          <div className="bg-linear-65 from-purple-500 to-pink-500 py-1 text-center text-sm text-white uppercase">
            <span>Work in progress</span>
          </div>
          <div className="container max-w-2xl">
            {children}
            {/* <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
              <Dock>
                <DockIcons />
              </Dock>
            </div> */}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

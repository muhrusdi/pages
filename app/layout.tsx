import { RootLayoutType } from "@/types"
import "../styles/globals.css"

const RootLayout: React.FC<RootLayoutType> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout

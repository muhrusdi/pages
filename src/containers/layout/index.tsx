import React from "react"
import SEO from "components/seo"
import { LayoutType } from "types"
import Nav from "components/navigation"

const Layout: React.FC<LayoutType> = ({children}) => {
  const date = new Date()
  return (
    <>
      <SEO/>
      <Nav/>
      <div className="container max-w-screen-lg">
        {children}
        <div className="text-center py-16">
          <span>© {date.getFullYear()} Made with <span className="text-red-500">♥</span> - Muhammad Rusdi</span>
        </div>
      </div>
    </>
  )
}

export default Layout
import React from "react"
import SEO from "components/seo"
import { LayoutType } from "types"
import Nav from "components/navigation"
import Footer from "components/footer"

const Layout: React.FC<LayoutType> = ({children}) => {
  return (
    <>
      <SEO/>
      <Nav/>
      <div className="container max-w-screen-lg">
        {children}
        <Footer/>
      </div>
    </>
  )
}

export default Layout
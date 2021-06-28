import React from "react"
import SEO from "components/seo"
import { LayoutType } from "types"
import Nav from "components/navigation"
import Footer from "components/footer"
// import MurottalPlayer from "components/murottal/player"
// import { Context } from "contexts"

const Layout: React.FC<LayoutType> = ({children}) => {

  return (
    <div>
      <SEO/>
      <Nav/>
      <div className="container max-w-screen-lg">
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
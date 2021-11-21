import React from "react"
import SEO from "@/components/seo"
import { LayoutType } from "@/types"
import Nav from "@/components/navigation"
import Footer from "@/components/footer"
// import MurottalPlayer from "components/murottal/player"
// import { Context } from "contexts"

export const Layout: React.FC<LayoutType> = ({ children, type }) => {
  return (
    <div>
      <SEO />
      <Nav type={type} />
      <div
        className={`container ${
          type === "fluid" ? "max-w-full" : "max-w-screen-lg"
        }`}
      >
        {children}
        <Footer />
      </div>
    </div>
  )
}

import React from "react"
import SEO from "@/components/seo"
import { LayoutType } from "@/types"
import { LayoutStyled } from "./styled"
import { theme } from "@/styled"

export const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <LayoutStyled className={theme}>
      <SEO />
      <div className="container">{children}</div>
    </LayoutStyled>
  )
}

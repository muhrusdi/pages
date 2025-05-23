import { PropsWithChildren } from "react"

const Layout = ({ children }: PropsWithChildren) => {
  return <div className="blog-layout">{children}</div>
}

export default Layout

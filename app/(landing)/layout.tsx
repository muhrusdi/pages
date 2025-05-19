import { Nav } from "@/components/nav"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}
export default Layout

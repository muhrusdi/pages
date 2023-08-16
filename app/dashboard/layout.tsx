import { Sidebar } from "@/containers/dahboard/sidebar"

type LayoutType = {
  children: React.ReactNode
  todos: React.ReactNode
  blogs: React.ReactNode
}

export const dynamic = "force-dynamic"

const Layout: React.FC<LayoutType> = ({ children, todos, blogs }) => {
  return (
    <div>
      <Sidebar />
      <div className="left-[280px] relative">
        {todos}
        {blogs}
      </div>
    </div>
  )
}

export default Layout

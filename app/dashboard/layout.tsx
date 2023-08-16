import { Sidebar } from "@/containers/dahboard/sidebar"
import styles from "./styles.module.scss"
import { Suspense } from "react"
import Loading from "./loading"

type LayoutType = {
  children: React.ReactNode
  todos: React.ReactNode
  blogs: React.ReactNode
}

const Layout: React.FC<LayoutType> = ({ children, todos, blogs }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className="left-[280px] relative">
        {todos}
        {blogs}
      </div>
    </div>
  )
}

export default Layout

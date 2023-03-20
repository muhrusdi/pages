import { Sidebar } from "@/containers/dahboard/sidebar"
import styles from "./styles.module.scss"
import { Suspense } from "react"
import Loading from "./loading"

type LayoutType = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Suspense fallback={<Loading />}>
        <div className="left-[280px] relative">{children}</div>
      </Suspense>
    </div>
  )
}

export default Layout

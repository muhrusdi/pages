"use client"
import { useState } from "react"
import styles from "./styles.module.scss"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { FiHome, FiBook } from "react-icons/fi"

const Sidebar = () => {
  const [selected, setSelected] = useState("dashboard")
  const router = useRouter()
  const pathname = usePathname()

  const list = [
    {
      id: "dashboard",
      title: "Dashboard",
      path: "/dashboard",
      icon: FiHome,
    },
    {
      id: "blog",
      title: "Blog",
      path: "/dashboard/blog",
      icon: FiBook,
    },
  ]

  return (
    <nav className={styles.nav}>
      <div className="p-6 font-black text-lg">
        <h3>NEXT</h3>
      </div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>
            <div>
              <Link href={item.path}>
                <div className="flex items-center space-x-4">
                  <div>
                    <item.icon />
                  </div>
                  <div>{item.title}</div>
                </div>
              </Link>
            </div>
            {item.path === pathname ? (
              <motion.div className={styles.underline} layoutId="underline" />
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar

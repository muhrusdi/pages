import { BackArrow } from "@/assets/icons"
import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between py-6 text-base text-white uppercase">
      <div>
        <ul className="flex items-center space-x-2">
          <li>
            <Link href="/">
              <BackArrow height={24} className="[&>path]:fill-amber-500" />
            </Link>
          </li>
          <li>
            <span>Work</span>
          </li>
        </ul>
      </div>
      <ul className="flex space-x-6 text-gray-400">
        <li>
          <a href="/work" className="hover:text-white">
            Work
          </a>
        </li>
        <li>
          <a href="/blog" className="hover:text-white">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

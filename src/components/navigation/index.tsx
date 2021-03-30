import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <div className="container max-w-screen-lg">
        <div className="flex py-6 justify-between items-center">
          <div>
            <Link to="/">
              <img style={{height: 40}} alt="mhmmr" src="https://res.cloudinary.com/muhrusdi/image/upload/v1611123004/mhmmr-black-transparent.png"/>
            </Link>
          </div>
          <div>
            <ul className="flex justify-center uppercase font-light text-sm">
              <li className="px-2">
                <Link to="/blogs" className="text-gray-400 hover:text-white transition-all">Blogs</Link>
              </li>
              <li className="px-2">
                <span className="text-gray-400">/</span>
              </li>
              <li className="px-2">
                <a href="#" className="text-gray-400 hover:text-white transition-all">Works</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
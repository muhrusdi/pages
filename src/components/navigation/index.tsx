import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav className="top-0 left-0 right-0 absolute z-50">
      <div className="container max-w-screen-lg">
        <div className="flex py-6 justify-between items-center">
          <div>
            <Link to="/">
              <img style={{height: 40}} alt="mhmmr" src="https://res.cloudinary.com/muhrusdi/image/upload/v1611123004/mhmmr-black-transparent.png"/>
            </Link>
          </div>
          <div>
            <ul className="flex justify-center -mx-2 uppercase text-sm">
              <li className="px-2">
                <Link to="/blogs" className="text-gray-200 hover:text-white transition-all">Blogs</Link>
              </li>
              <li className="px-2">
                <span className="text-gray-400">/</span>
              </li>
              <li className="px-2">
                <a href="#" className="text-gray-200 hover:text-white transition-all">Works</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
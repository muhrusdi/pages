import React from "react"
import { Link } from "gatsby"
import { SiGithub } from "react-icons/si"
import { BsList } from "react-icons/bs"
import {CenterMenus } from "./styled"

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
          <CenterMenus>
            <ul className="sm:flex justify-center -mx-2 uppercase text-sm items-center">
              <li className="px-2">
                <Link to="/blogs" className="text-gray-200 hover:text-white transition-all">Blogs</Link>
              </li>
              <li className="px-2">
                <a href="#" className="text-gray-200 hover:text-white transition-all">Works</a>
              </li>
              <li className="px-2">
                <a href="#" className="text-gray-200 hover:text-white transition-all">Stories</a>
              </li>
              <li className="px-2">
                <span className="text-gray-400">/</span>
              </li>
              <li className="px-2">
                <Link to="/profile" className="text-gray-200 hover:text-white transition-all">Profile</Link>
              </li>
              <li className="px-2 ml-2">
                <a href="https://github.com/muhrusdi" target="_blank" rel="noreferrer" className="block">
                  <SiGithub size={22}/>
                </a>
              </li>
            </ul>
          </CenterMenus>
          <div>
            <BsList/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
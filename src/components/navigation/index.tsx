/* eslint-disable quotes */
import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { SiGithub } from "react-icons/si"
import { BsList } from "react-icons/bs"
import { CenterMenus, GithubItem } from "./styled"

const Nav: React.FC = () => {
  const [toggle, setToggle] = useState(false)
  const menusRef = useRef(null)
  const handleClick = () => {
    setToggle(t => !t)
  }

  const handleClickOutside = (e) => {
    if (menusRef.current && !menusRef.current.contains(e.target)) {
      if (toggle) {
          console.log("test", toggle)
        setToggle(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [toggle])

  return (
    <>
      <nav className="top-0 left-0 right-0 absolute z-50">
        <div className="container max-w-screen-lg">
          <div className="flex py-7 sm:py-6 justify-between items-center">
            <div className="relative z-50">
              <Link to="/">
                <img className="transition-all" style={{height: toggle ? 20 : 40}} alt="mhmmr" src="https://res.cloudinary.com/muhrusdi/image/upload/v1611123004/mhmmr-black-transparent.png"/>
              </Link>
            </div>
            <CenterMenus ref={menusRef}>
              <ul className={`sm:flex justify-center -mx-2 uppercase text-sm border border-gray-700 sm:border-none rounded-lg bg-black items-center ${toggle ? "" : "hidden"}`}>
                <li className="px-2">
                  <Link to="/blog" className="text-gray-200 hover:text-white transition-all">Blogs</Link>
                </li>
                <li className="px-2">
                  <Link to="/work" className="text-gray-200 hover:text-white transition-all">Works</Link>
                </li>
                <li className="px-2">
                  <a href="#" className="text-gray-200 hover:text-white transition-all">Stories</a>
                </li>
                <li className="px-2">
                  <Link to="/profile" className="text-gray-200 hover:text-white transition-all">Profile</Link>
                </li>
                <GithubItem className="sm:px-2 sm:ml-2 py-2 px-1 rounded-md mt-2 sm:mt-0 flex justify-center bg-gray-900 sm:bg-transparent sm:p-0 sm:block">
                  <a href="https://github.com/muhrusdi" target="_blank" rel="noreferrer" className="block">
                    <SiGithub size={22}/>
                  </a>
                </GithubItem>
              </ul>
            </CenterMenus>
            <div className="relative block sm:hidden">
              <button onClick={handleClick} className="align-middle">
                <BsList/>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div style={{height: 122}}></div>
    </>
  )
}

export default Nav
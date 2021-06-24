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
                <svg style={{height: toggle ? 24 : 44}} className="transition-all" viewBox="0 0 745 745" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M103 103L255.036 255.036L273.364 273.364L372.5 372.5L471.636 273.364V283.777V471.636L489.964 489.964L642 642V103L489.964 255.036L471.636 273.364L372.5 372.5L430.5 430.5L273.364 300.022V471.636L255.036 489.964L103 642V103Z" fill="white"/>
                </svg>

                {/* <img className="transition-all" style={{height: toggle ? 20 : 40}} alt="mhmmr" src="https://res.cloudinary.com/muhrusdi/image/upload/v1611123004/mhmmr-black-transparent.png"/> */}
              </Link>
            </div>
            <CenterMenus ref={menusRef}>
              <ul className={`sm:flex justify-center -mx-2 uppercase text-sm border border-gray-700 sm:border-none rounded-lg bg-black items-center ${toggle ? "" : "hidden"}`}>
                <li className="px-2">
                  <div className="flex items-center">
                    <div className="mr-3 sm:hidden rounded-md bg-gradient-to-br from-green-400 to-green-600">
                      <svg className="h-8 w-8" viewBox="0 0 24 24"><path d="M8 9a1 1 0 011-1h8a1 1 0 011 1v7.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 018 16.5V9z" fill="#6EE7B7"></path><path d="M15 7a1 1 0 00-1-1H7a1 1 0 00-1 1v9.5A1.5 1.5 0 007.5 18H16v-.085a1.5 1.5 0 01-1-1.415V7z" fill="#ECFDF5"></path><path fill="#A7F3D0" d="M8 8h5v4H8zM8 14h5v2H8z"></path></svg>
                    </div>
                    <Link to="/blog" className="text-gray-200 hover:text-white transition-all">Blog</Link>
                  </div>
                </li>
                <li className="px-2">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-md bg-gradient-to-br from-yellow-400 to-yellow-600">
                      <svg className="h-8 w-8" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M13.196 6.02a1 1 0 01.785 1.176l-2 10a1 1 0 01-1.961-.392l2-10a1 1 0 011.176-.784z" fill="#FDE68A"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.293 9.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L16.586 12l-1.293-1.293a1 1 0 010-1.414zM8.707 9.293a1 1 0 010 1.414L7.414 12l1.293 1.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z" fill="#FDF4FF"></path></svg>
                    </div>
                    <Link to="/work" className="text-gray-200 hover:text-white transition-all">Work</Link>
                  </div>
                </li>
                <li className="px-2">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-md bg-gradient-to-br from-pink-400 to-purple-600">
                      <svg className="h-8 w-8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" fill="#F3E8FF"></circle><path d="M14.52 11.136a1 1 0 010 1.728l-3.016 1.759A1 1 0 0110 13.759v-3.518a1 1 0 011.504-.864l3.015 1.76z" fill="#C084FC"></path></svg>
                    </div>
                    <a href="#" className="text-gray-200 hover:text-white transition-all">Story</a>
                  </div>
                </li>
                <li className="px-2">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-md bg-gradient-to-br from-purple-500 to-indigo-500">
                      <svg className="h-8 w-8" viewBox="0 0 24 24"><path d="M6 9l6-3 6 3v6l-6 3-6-3V9z" fill="#F5F3FF"></path><path d="M6 9l6 3v6l-6-3V9z" fill="#DDD6FE"></path><path d="M18 9l-6 3v6l6-3V9z" fill="#C4B5FD"></path></svg>
                    </div>
                    <Link to="/profile" className="text-gray-200 hover:text-white transition-all">Profile</Link>
                  </div>
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
/* eslint-disable quotes */
import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { BsPersonFill, BsArrowRightShort } from "react-icons/bs"
import { HiOutlineSpeakerphone } from "react-icons/hi"
import { CenterMenus, BGAnimated, SlickStyled, SlickItem } from "./styled"
import cv from "../../utils/cv-muhrusdi-2022.pdf"
import { SiGithub } from "react-icons/si"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import thisrtBanner from "@/images/tshirt-banner.png"
import { StaticImage } from "gatsby-plugin-image"

type Props = {
  type?: string
}

const Nav: React.FC<Props> = ({ type }) => {
  const [toggle, setToggle] = useState(false)
  const menusRef = useRef(null)
  const handleClick = () => {
    setToggle(t => !t)
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    autoplay: true,
  }

  const handleClickOutside = e => {
    if (menusRef.current && !menusRef.current.contains(e.target)) {
      if (toggle) {
        setToggle(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [toggle])

  const miniMenus = [
    {
      title: "3D",
      path: "/3d",
      className: "border-t border-gray-700 mt-4",
    },
    {
      title: "Murottal",
      path: "/murottal",
    },
    {
      title: "Cheatsheet",
      path: "/cheatsheet",
    },
    {
      title: "Twitter",
      path: "/twitter",
    },
  ]

  return (
    <>
      <nav className="w-full relative z-50">
        <BGAnimated>
          <div
            className={`container ${
              type === "fluid" ? "max-w-full" : "max-w-screen-lg"
            }`}
          >
            <div
              className="flex justify-between items-center text-gray-200"
              style={{ height: 40 }}
            >
              <div className="w-4/5 sm:w-1/2">
                <div className="flex items-center">
                  <div>
                    <div className="mr-3 h-7 w-7 flex items-center justify-center rounded-md bg-purple-900">
                      <HiOutlineSpeakerphone size={18} />
                    </div>
                  </div>
                  <div className="w-full">
                    <SlickStyled {...settings}>
                      <SlickItem>
                        <div className="flex space-x-2">
                          <div className="flex-none">
                            <img
                              className="h-[40px]"
                              src={thisrtBanner}
                              alt=""
                            />
                          </div>
                          <div>
                            <span className="flex">
                              <span className="hidden sm:block mr-2 whitespace-nowrap">
                                Get your Tshirt.
                              </span>
                              <Link
                                to="/profile"
                                className="text-white flex items-center font-semibold"
                              >
                                <span className="hidden sm:block">Here</span>
                                <span className="sm:hidden">Tshirt</span>
                                <BsArrowRightShort size={20} />
                              </Link>
                            </span>
                          </div>
                        </div>
                      </SlickItem>
                      <SlickItem>
                        <div>
                          <span className="flex">
                            <span className="mr-2">My Profile.</span>
                            <Link
                              to="/profile"
                              className="text-white flex items-center font-semibold"
                            >
                              <span>Here</span>
                              <BsArrowRightShort size={20} />
                            </Link>
                          </span>
                        </div>
                      </SlickItem>
                      <SlickItem>
                        <div>
                          <span className="flex items-center">
                            <span className="mr-2">Resume.</span>
                            <a
                              href={cv}
                              rel="noreferrer"
                              target="_blank"
                              className="text-white flex items-center font-semibold"
                            >
                              <span>Here</span>
                              <BsArrowRightShort size={20} />
                            </a>
                          </span>
                        </div>
                      </SlickItem>
                    </SlickStyled>
                    {/* <span className="sm:hidden flex">
                      <span className="mr-2">My Profile.</span>
                      <Link
                        to="/profile"
                        className="text-white flex items-center font-semibold"
                      >
                        <span>Here</span>
                        <BsArrowRightShort size={20} />
                      </Link>
                    </span>
                    <span className="hidden sm:flex items-center">
                      <span className="mr-2">Resume.</span>
                      <a
                        href={cv}
                        rel="noreferrer"
                        target="_blank"
                        className="text-white flex items-center font-semibold"
                      >
                        <span>Here</span>
                        <BsArrowRightShort size={20} />
                      </a>
                    </span> */}
                  </div>
                </div>
              </div>
              <div>
                <ul className="flex -mx-2">
                  {miniMenus.map((item, i) => (
                    <li key={i} className="px-2 hidden sm:block">
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  ))}
                  <li className="px-2 hidden sm:block">
                    <a
                      href="https://github.com/muhrusdi/pages"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li className="px-2 sm:hidden">
                    <a
                      href="https://github.com/muhrusdi/pages"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SiGithub size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </BGAnimated>
        <div
          className={`container ${
            type === "fluid" ? "max-w-full" : "max-w-screen-lg"
          }`}
        >
          <div className="flex py-7 sm:py-6 justify-between items-center">
            <div className="relative z-50">
              <Link to="/">
                <svg
                  style={{ height: 44 }}
                  className="transition-all"
                  viewBox="0 0 745 745"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M103 103L255.036 255.036L273.364 273.364L372.5 372.5L471.636 273.364V283.777V471.636L489.964 489.964L642 642V103L489.964 255.036L471.636 273.364L372.5 372.5L430.5 430.5L273.364 300.022V471.636L255.036 489.964L103 642V103Z"
                    fill="white"
                  />
                </svg>

                {/* <img className="transition-all" style={{height: toggle ? 20 : 40}} alt="mhmmr" src="https://res.cloudinary.com/muhrusdi/image/upload/v1611123004/mhmmr-black-transparent.png"/> */}
              </Link>
            </div>
            <CenterMenus ref={menusRef}>
              <ul
                className={`sm:flex justify-center -mx-2 uppercase text-sm border border-gray-700 sm:border-none rounded-lg bg-black items-center ${
                  toggle ? "" : "hidden"
                }`}
              >
                <li className="px-2">
                  <Link
                    to="/blog"
                    className="flex items-center text-gray-200 hover:text-white transition-all"
                  >
                    <div className="mr-3 rounded-md bg-gradient-to-br from-green-400 to-green-600">
                      <svg className="h-8 w-8" viewBox="0 0 24 24">
                        <path
                          d="M8 9a1 1 0 011-1h8a1 1 0 011 1v7.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 018 16.5V9z"
                          fill="#6EE7B7"
                        >
                        </path>
                        <path
                          d="M15 7a1 1 0 00-1-1H7a1 1 0 00-1 1v9.5A1.5 1.5 0 007.5 18H16v-.085a1.5 1.5 0 01-1-1.415V7z"
                          fill="#ECFDF5"
                        >
                        </path>
                        <path fill="#A7F3D0" d="M8 8h5v4H8zM8 14h5v2H8z"></path>
                      </svg>
                    </div>
                    <div>Blog</div>
                  </Link>
                </li>
                <li className="px-2">
                  <Link
                    to="/work"
                    className="flex items-center text-gray-200 hover:text-white transition-all"
                  >
                    <div className="mr-3 rounded-md bg-gradient-to-br from-yellow-400 to-yellow-600">
                      <svg className="h-8 w-8" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.196 6.02a1 1 0 01.785 1.176l-2 10a1 1 0 01-1.961-.392l2-10a1 1 0 011.176-.784z"
                          fill="#FDE68A"
                        >
                        </path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.293 9.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L16.586 12l-1.293-1.293a1 1 0 010-1.414zM8.707 9.293a1 1 0 010 1.414L7.414 12l1.293 1.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z"
                          fill="#FDF4FF"
                        >
                        </path>
                      </svg>
                    </div>
                    <div>Work</div>
                  </Link>
                </li>
                <li className="px-2">
                  <a
                    href="#"
                    className="flex items-center text-gray-200 hover:text-white transition-all"
                  >
                    <div className="mr-3 rounded-md bg-gradient-to-br from-pink-400 to-purple-600">
                      <svg className="h-8 w-8" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="7" fill="#F3E8FF"></circle>
                        <path
                          d="M14.52 11.136a1 1 0 010 1.728l-3.016 1.759A1 1 0 0110 13.759v-3.518a1 1 0 011.504-.864l3.015 1.76z"
                          fill="#C084FC"
                        >
                        </path>
                      </svg>
                    </div>
                    <div>Story</div>
                  </a>
                </li>
                <li className="px-2">
                  <Link
                    to="/profile"
                    className="flex items-center text-gray-200 hover:text-white transition-all"
                  >
                    <div className="mr-3 rounded-md bg-gradient-to-br from-purple-500 to-indigo-500">
                      <div className="h-8 w-8 flex items-center justify-center">
                        <BsPersonFill size={20} />
                      </div>
                      {/* <svg className="h-8 w-8" viewBox="0 0 24 24"><path d="M6 9l6-3 6 3v6l-6 3-6-3V9z" fill="#F5F3FF"></path><path d="M6 9l6 3v6l-6-3V9z" fill="#DDD6FE"></path><path d="M18 9l-6 3v6l6-3V9z" fill="#C4B5FD"></path></svg> */}
                    </div>
                    <div>Profile</div>
                  </Link>
                </li>
                {miniMenus.map((item, i) => (
                  <li
                    key={i}
                    className={`px-2 sm:hidden ${item?.className || null}`}
                  >
                    <Link
                      to="/3d"
                      className={`block text-gray-200 hover:text-white transition-all ${
                        item?.className ? "mt-3" : null
                      }`}
                    >
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
                <li className="px-2 sm:hidden">
                  <a
                    href="https://github.com/muhrusdi/pages"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-gray-200 hover:text-white transition-all"
                  >
                    <div>Github</div>
                  </a>
                </li>
                {/* <GithubItem className="sm:px-2 sm:ml-2 py-2 px-1 rounded-md mt-2 sm:mt-0 flex justify-center bg-gray-900 sm:bg-transparent sm:p-0 sm:block">
                  <a href="https://github.com/muhrusdi" target="_blank" rel="noreferrer" className="block">
                    <SiGithub size={22}/>
                  </a>
                </GithubItem> */}
              </ul>
            </CenterMenus>
            <div className="relative block sm:hidden">
              <button
                onClick={handleClick}
                className="align-middle bg-blueGray-900 w-10 h-10 rounded-md focus:outline-none flex items-center justify-center"
              >
                {/* <BsList/> */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="4"
                    height="4"
                    rx="1.2"
                    fill="url(#paint0_linear-768704)"
                  />
                  <rect
                    x="4"
                    y="10"
                    width="4"
                    height="4"
                    rx="1.2"
                    fill="url(#paint1_linear-742839)"
                  />
                  <rect
                    x="4"
                    y="16"
                    width="4"
                    height="4"
                    rx="1.2"
                    fill="url(#paint2_linear-868777)"
                  />
                  <rect
                    x="10"
                    y="5"
                    width="9"
                    height="2"
                    rx="1"
                    fill="#DCDCDC"
                  />
                  <rect
                    x="10"
                    y="11"
                    width="9"
                    height="2"
                    rx="1"
                    fill="#DCDCDC"
                  />
                  <rect
                    x="10"
                    y="17"
                    width="9"
                    height="2"
                    rx="1"
                    fill="#DCDCDC"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear-768704"
                      x1="3.5"
                      y1="4"
                      x2="8"
                      y2="8.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#34D399" />
                      <stop offset="1" stopColor="#059669" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear-742839"
                      x1="3.5"
                      y1="10"
                      x2="8"
                      y2="14.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FBBF24" />
                      <stop offset="1" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear-868777"
                      x1="3.5"
                      y1="16"
                      x2="8"
                      y2="20.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F472B6" />
                      <stop offset="1" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* <div style={{height: 122}}></div> */}
    </>
  )
}

export default Nav

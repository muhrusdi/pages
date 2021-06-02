// import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { SiNextDotJs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"
import { FiChevronRight } from "react-icons/fi"

const FeaturedWork: React.FC = () => {
  return (
    <div>
      <div className="sm:flex items-center">
        <div className="sm:w-1/2">
          <div>
            <div className="bg-blueGray-700 rounded-full inline-flex items-center text-xs uppercase pr-4">
              <span className="bg-indigo-600 rounded-l-full px-3 text-xs font-medium py-1 mr-2">Featured</span>
              Senja
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl leading-tight sm:leading-12 font-black mt-6">The modern Next.js and GraphQL boilerplate</h2>
            </div>
            <ul className="mt-12 flex -mx-2 items-center">
              <li className="px-2">
                <a href="https://github.com/jamastek/senja" target="_blank" rel="noreferrer" className="text-lg flex items-center mr-2 sm:mr-4">
                  <span className="mr-2">Github</span>
                  <FiChevronRight/>
                </a>
              </li>
              <li className="px-2">
                <SiTypescript size={20}/>
              </li>
              <li className="px-2">
                <SiReact size={20}/>
              </li>
              <li className="px-2">
                <SiNextDotJs size={20}/>
              </li>
              <li className="px-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 106 128" height="20"><path fill="#d1d5db" fillRule="evenodd" d="M105.306 97.519L61.284 4.037v-.002A7.062 7.062 0 0055.265.013c-2.679-.156-5.079 1.136-6.433 3.335L1.088 80.678a7.233 7.233 0 00.084 7.763l23.338 36.152c1.391 2.158 3.801 3.407 6.306 3.407.71 0 1.424-.1 2.126-.308l67.744-20.036a7.424 7.424 0 004.66-4.028 7.264 7.264 0 00-.04-6.11zm-9.857 4.01l-57.479 17c-1.756.52-3.439-.999-3.07-2.77l20.534-98.34c.384-1.838 2.926-2.13 3.728-.427l38.02 80.736c.717 1.523-.1 3.319-1.733 3.801z" clipRule="evenodd"></path></svg>
              </li>
              <li className="px-2">
                <SiTailwindcss size={20}/>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:w-1/2 hidden sm:block">
          <div>
            <img style={{height: 260}} className="w-full object-contain" src="https://res.cloudinary.com/muhrusdi/image/upload/v1622428743/linearmr.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedWork
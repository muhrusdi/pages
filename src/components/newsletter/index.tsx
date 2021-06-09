import React, { useState } from "react"
import { Link } from "gatsby"

const Newsletter: React.FC = () => {
  const [isHover, setHover] = useState(false)
  const handleMouseEnter = () => {
    setHover(true)
  }
  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <div>
      <div className="bg-gray-900 rounded-lg overflow-hidden sm:px-32 relative">
        <div className="absolute flex justify-center z-50 items-center top-0 bottom-0 left-0 right-0">
          <div>
            <div>
              <h4 className="font-black text-4xl text-center">Get in Touch</h4>
            </div>
            <div className="mt-6 flex items-center -mx-4">
              <div className="px-4">
                <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="py-2 rounded-md px-4 hover:bg-indigo-700 transition-all bg-indigo-600">
                  <a href="mailto:mhmrofficial@gmail.com">Contact me</a>
                </button>  
              </div>
              <div className="px-4">
                <Link to="/profile">About Us</Link>
              </div>
            </div>
          </div>
        </div>
        <img className={`object-cover w-full transform ${isHover ? "translate-x-6" : "translate-x-0"} transition-all duration-1000`} style={{height: 200}} src="https://tailwindui.com/img/beams-bottom.jpg" alt=""/>
      </div>
    </div>
  )
}

export default Newsletter
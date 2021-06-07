import React from "react"

const ProfileItem: React.FC = () => (
  <div>
    <p>I’m Front End Engineer with 5+ years of experience in web development. I like to code things from scratch and enjoy bringing ideas to life in the browser.</p>
    <ul className="mt-8 whitespace-nowrap">
      <li>
        <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
          <div className="w-2/5 text-gray-500 sm:text-white">
            <span>Email</span>
          </div>
          <div className="w-3/5">
            <span>mhmrofficial@gmail.com</span>
          </div>
        </div>
      </li>
      <li>
        <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
          <div className="w-2/5 text-gray-500 sm:text-white">
            <span>Date of birth</span>
          </div>
          <div className="w-3/5">
            <span>14 September 1992</span>
          </div>
        </div>
      </li>
      <li>
        <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
          <div className="w-2/5 text-gray-500 sm:text-white">
            <span>Telephone</span>
          </div>
          <div className="w-3/5">
            <span>+62 8874 3650 3668</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
)

export default ProfileItem
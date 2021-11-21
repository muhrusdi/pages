import React from "react"
import { Link } from "gatsby"
import { BiChevronRight } from "react-icons/bi"

const SectionHeader: React.FC = ({ tag, title, description, link }) => (
  <div className="mb-4 sm:w-1/2">
    <h2 className="uppercase font-bold text-indigo-500">{tag}</h2>
    <h3 className="font-black mt-3 text-4xl">{title}</h3>
    <p className="text-lg mt-4 text-gray-400">{description}</p>
    <Link to={link} className="mt-8 inline-block text-lg">
      <div className="flex items-center">
        <span>Read more</span> <BiChevronRight size={24} />
      </div>
    </Link>
  </div>
)

export default SectionHeader

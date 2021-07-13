import React from "react"
import { Link } from "gatsby"

const CheatsheetItem: React.FC = ({data, selected}) => {
  return (
    <li className="mb-4">
      <Link to={`/cheatsheet/${data.fields.slug}`} className={`p-4 block bg-blueGray-900 rounded-md ${selected ? "ring-purple-600 ring-2" : null}`}>
        <div className="flex items-center">
          <span className="bg-yellow-500 w-6 h-6 flex items-center justify-center mr-3 rounded text-sm">JS</span>
          <h2 className="font-bold line-clamp-1">{data.frontmatter.title}</h2>
        </div>
        <div className="mt-2">
          <p className="text-blueGray-500 text-sm line-clamp-2">{data.frontmatter.abstract}</p>
        </div>
      </Link>
    </li>
  )
}

export default CheatsheetItem
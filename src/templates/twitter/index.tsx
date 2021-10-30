import React, { useState } from "react"
import { useNavigate } from "@reach/router"
import { HiArrowCircleRight } from "react-icons/hi"

const Twitter: React.FC = () => {
  const navigate = useNavigate()
  const [path, setPath] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/twitter/${path}`, { replace: true })
  }

  const handleChange = (e) => {
    setPath(e.target.value)
  }

  return (
    <div>
      <div className="container max-w-screen-lg">
        <div className="text-center">
          <h2 className="text-6xl font-black">Twitter</h2>
          <div className="mt-7 relative">
            <form onSubmit={handleSubmit}>
              <input onChange={handleChange} value={path} type="text" placeholder="Type your twitter account" className="py-4 text-lg px-6 ring ring-indigo-500 rounded-xl w-full bg-gray-900"/>
              <button type="button" className="absolute text-indigo-600 right-3 top-4">
                <HiArrowCircleRight size={24}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Twitter
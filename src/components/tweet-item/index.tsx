import React from "react"
import { BiHeart, BiMessage } from "react-icons/bi"

const TweetItem: React.FC = () => (
  <div className="border border-gray-700 rounded-lg p-4">
    <div className="flex space-x-2">
      <div>
        <span className="font-bold">Muhammad Rusdi</span>
      </div>
      <div>
        <span className="text-gray-400">@mhmrus</span>
      </div>
    </div>
    <p className="mt-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
      assumenda mollitia eaque velit sapiente?
    </p>
    <div className="flex mt-3 space-x-4">
      <div>
        <div className="flex items-center text-yellow-500 space-x-2">
          <div>
            <BiMessage />
          </div>
          <div>3</div>
        </div>
      </div>
      <div>
        <div className="flex items-center text-pink-500 space-x-2">
          <div>
            <BiHeart />
          </div>
          <div>3</div>
        </div>
      </div>
    </div>
  </div>
)

export default TweetItem

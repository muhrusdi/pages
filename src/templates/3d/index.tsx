import React from "react"
import { Link } from "gatsby"

const ThreeDPage: React.FC = () => {
  return (
    <div>
      <div className="grid gird-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <Link to="/3d/shoes" className="block">
            <img
              className="object-cover rounded-lg h-44 w-full"
              src="https://res.cloudinary.com/muhrusdi/image/upload/v1625136846/sepatuh.jpg"
              alt=""
            />
            <div className="mt-2">
              <h3 className="font-semibold text-lg">Shoes</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThreeDPage

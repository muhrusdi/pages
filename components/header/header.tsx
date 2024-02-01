import { GlobeAltIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const Header = () => {
  return (
    <header className="py-6">
      <div className="flex justify-between items-center">
        <div className="w-2/3">
          <div>
            <h1 className="font-bold text-xl">Muhammad Rusdi</h1>
            <p className="mt-2">
              Frontend Engineer focused on building user interface with extra
              attention to detail.
            </p>
            <ul className="mt-2">
              <li>
                <a className="flex items-center space-x-2" href="#">
                  <div>
                    <GlobeAltIcon className="w-4" />
                  </div>
                  <div>
                    <p>Yogyakarta, Indonesia</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/muhrusdi/image/upload/v1706784855/muhrusdev.jpg"
            alt=""
            className="w-28 h-28 rounded-xl"
            width={100}
            height={100}
          />
        </div>
      </div>
    </header>
  )
}

export default Header

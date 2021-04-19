import React from "react"

const EducationsItem = () => (
  <div>
    <ul>
      <li>
        <div className="flex">
          <div className="pr-4 flex-none py-4 text-right hidden sm:block" style={{width: 150}}>
            <span>2012 - 2016</span>
          </div>
          <div className="border-yellow-500 border-l-4 pl-4 py-4">
            <div>
              <span className="text-sm text-blue-600 pb-6 block sm:hidden">2012-2016</span>
              <h3 className="text-2xl font-bold">State Polytechnic of Ujung Pandang</h3>
              <p className="text-gray-500">Computer and Network Engineering</p>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="flex">
          <div className="pr-4 flex-none py-4 text-right hidden sm:block" style={{width: 150}}>
            <span>2009 - 2012</span>
          </div>
          <div className="border-green-500 border-l-4 pl-4 py-4">
            <div>
              <span className="text-sm text-blue-600 pb-6 block sm:hidden">2009-2012</span>
              <h3 className="text-2xl font-bold">SMK YPKK Limbung</h3>
              <p className="text-gray-500">Computer and Network Engineering</p>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="flex">
          <div className="pr-4 flex-none py-4 text-right hidden sm:block" style={{width: 150}}>
            <span>2006 - 2009</span>
          </div>
          <div className="border-blue-500 border-l-4 pl-4 py-4">
            <div>
              <span className="text-sm text-blue-600 pb-6 block sm:hidden">2006-2009</span>
              <h3 className="text-2xl font-bold">MTs. Muahammadiyah Lempangan</h3>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="flex">
          <div className="pr-4 flex-none py-4 text-right hidden sm:block" style={{width: 150}}>
            <span>2001 - 2006</span>
          </div>
          <div className="border-pink-500 border-l-4 pl-4 py-4">
            <div>
              <span className="text-sm text-blue-600 pb-6 block sm:hidden">2001-2006</span>
              <h3 className="text-2xl font-bold">SD MIN Bontosunggu</h3>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
)

export default EducationsItem
import React from "react"
import { BsFillPlayFill } from "react-icons/bs"
import MurottalPlayer from "components/murottal/player"
import { GridItem } from "components/murottal/player/styled"

const MurottalPage: React.FC = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-4 gap-8">
          <GridItem>
            <div className="image relative h-44 rounded-md flex justify-center items-center">
              <div className="relative z-10 play transition-all">
                <BsFillPlayFill size={60}/>
              </div>
              <img className="absolute object-cover h-full w-full" src="https://2.bp.blogspot.com/-qSLgfecTQ3c/XESBVkoA4aI/AAAAAAAANNM/GKWwhBOTgU4BWarXyxhX2vUmd5N018g0ACLcBGAs/w320-h180/%25D8%25BA%25D8%25A7%25D9%2581%25D8%25B1.jpg" alt="" />
            </div>
            <div className="mt-2">
              <h2>سورة غافر بمسجد الراشد 1425 ه</h2>
              <p className="mt-2 text-blueGray-400">مشاري راشد العفاسي</p>
            </div>
          </GridItem>
          <div>
            <div className="relative h-44 rounded-md">
              <img className="absolute object-cover h-full w-full" src="https://2.bp.blogspot.com/-qSLgfecTQ3c/XESBVkoA4aI/AAAAAAAANNM/GKWwhBOTgU4BWarXyxhX2vUmd5N018g0ACLcBGAs/w320-h180/%25D8%25BA%25D8%25A7%25D9%2581%25D8%25B1.jpg" alt="" />
            </div>
            <div className="mt-2">
              <h2>سورة غافر بمسجد الراشد 1425 ه</h2>
              <p className="mt-2 text-blueGray-400">مشاري راشد العفاسي</p>
            </div>
          </div>
          <div>
            <div className="relative h-44 rounded-md">
              <img className="absolute object-cover h-full w-full" src="https://2.bp.blogspot.com/-qSLgfecTQ3c/XESBVkoA4aI/AAAAAAAANNM/GKWwhBOTgU4BWarXyxhX2vUmd5N018g0ACLcBGAs/w320-h180/%25D8%25BA%25D8%25A7%25D9%2581%25D8%25B1.jpg" alt="" />
            </div>
            <div className="mt-2">
              <h2>سورة غافر بمسجد الراشد 1425 ه</h2>
              <p className="mt-2 text-blueGray-400">مشاري راشد العفاسي</p>
            </div>
          </div>
          <div>
            <div className="relative h-44 rounded-md">
              <img className="absolute object-cover h-full w-full" src="https://2.bp.blogspot.com/-qSLgfecTQ3c/XESBVkoA4aI/AAAAAAAANNM/GKWwhBOTgU4BWarXyxhX2vUmd5N018g0ACLcBGAs/w320-h180/%25D8%25BA%25D8%25A7%25D9%2581%25D8%25B1.jpg" alt="" />
            </div>
            <div className="mt-2">
              <h2>سورة غافر بمسجد الراشد 1425 ه</h2>
              <p className="mt-2 text-blueGray-400">مشاري راشد العفاسي</p>
            </div>
          </div>
        </div>
      </div>
      <MurottalPlayer/>
    </div>
  )
}

export default MurottalPage
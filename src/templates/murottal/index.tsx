import React, { useContext, useState } from "react"
import { BsFillPlayFill } from "react-icons/bs"
import { GridItem } from "components/murottal/player/styled"
import { Context } from "contexts"

const MurottalPage: React.FC = () => {
  const [dataMurottal] = useState([
    {
      "name": "سورة غافر بمسجد الراشد 1425 هـ",
      "artist": "مشاري راشد العفاسي",
      "album": "1425 ه",
      "url": "https://archive.org/download/ghafer-1425/ghafer-1425.mp3",
      "cover_art_url": "https://2.bp.blogspot.com/-qSLgfecTQ3c/XESBVkoA4aI/AAAAAAAANNM/GKWwhBOTgU4BWarXyxhX2vUmd5N018g0ACLcBGAs/w320-h180/%25D8%25BA%25D8%25A7%25D9%2581%25D8%25B1.jpg"
    }
  ])
  const { handleSetMurottal } = useContext(Context)

  const handlePlay = (song) => {
    handleSetMurottal([song])
  }
  return (
    <div>
      <div>
        <div>
          <h1 className="font-black text-5xl">Murottal</h1>
          <p className="text-gray-400 text-2xl mt-4">Lantunan indah Al Qur&apos;an</p>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-12">
          {
            dataMurottal.map((item, i) => (
              <GridItem key={i}>
                <div className="image relative h-44 rounded-md flex justify-center items-center" onClick={() => handlePlay(item)}>
                  <div className="relative z-10 play transition-all">
                    <BsFillPlayFill size={60}/>
                  </div>
                  <img className="absolute object-cover h-full w-full" src={item.cover_art_url} alt="" />
                </div>
                <div className="mt-2">
                  <h2>{item.name}</h2>
                  <p className="mt-2 text-blueGray-400">{item.artist}</p>
                </div>
              </GridItem>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MurottalPage
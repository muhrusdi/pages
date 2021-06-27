import React, { useEffect, useState, useRef } from "react"
import { 
  BsFillSkipStartFill, 
  BsFillSkipEndFill, 
  BsArrowRepeat,
  BsMusicNoteList,
  BsFillPauseFill,
  BsFillVolumeUpFill,
  BsX,
  BsFillPlayFill } from "react-icons/bs"
import Amplitude from "amplitudejs"
import { PlayerStyled, TimeContainer, LeftControl, RightControl, StyledContent } from "./styled"

const MurottalPlayer: React.FC = () => {
  const [volumeToggle, setVolumeToggle] = useState(false)
  const volumeContentRef = useRef(null)

  useEffect(() => {
    Amplitude.init({
      "songs": [
        {
          "name": "سورة غافر بمسجد الراشد 1425 هـ",
          "artist": "مشاري راشد العفاسي",
          "album": "1425 ه",
          "url": "https://archive.org/download/ghafer-1425/ghafer-1425.mp3",
          "cover_art_url": "https://2.bp.blogspot.com/-qSLgfecTQ3c/XESBVkoA4aI/AAAAAAAANNM/GKWwhBOTgU4BWarXyxhX2vUmd5N018g0ACLcBGAs/w320-h180/%25D8%25BA%25D8%25A7%25D9%2581%25D8%25B1.jpg"
        },
      ],
      // "callbacks": {
      //       "play": function(){
      //           document.getElementById("album-art").style.visibility = "hidden";
      //           document.getElementById("large-visualization").style.visibility = "visible";
      //       },
    
      //       "pause": function(){
      //           document.getElementById("album-art").style.visibility = "visible";
      //           document.getElementById("large-visualization").style.visibility = "hidden";
      //       }
      //   },
      waveforms: {
        sample_rate: 50
      }
    });
  }, [])

  const handleClickOutside = (e) => {
    if (volumeContentRef.current && !volumeContentRef.current.contains(e.target)) {
      if (volumeToggle) {
          setVolumeToggle(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [volumeToggle])

  const handleClickVolume = () => {
    setVolumeToggle(!volumeToggle)
  }

  return (
    <PlayerStyled>
      <div className="fixed bottom-0 bg-black z-50 left-0 right-0 border-t border-gray-800">
        <div className="container max-w-screen-lg">
          <div className="flex items-center justify-between text-sm -mx-4" style={{height: 60}}>
            <LeftControl className="px-4">
              <ul className="flex -mx-2 items-center">
                <li className="px-2">
                  <button className="amplitude-prev" id="previous">
                    <BsFillSkipStartFill size={24}/>
                  </button>
                </li>
                <li className="px-2">
                  <button id="play-pause" className="amplitude-play-pause">
                    <BsFillPlayFill className="play" size={24}/>
                    <BsFillPauseFill className="pause" size={24}/>
                  </button>
                </li>
                <li className="px-2">
                  <button className="amplitude-next" id="next">
                    <BsFillSkipEndFill size={24}/>
                  </button>
                </li>
                <li className="px-2">
                  <button className="amplitude-repeat" id="repeat">
                    <BsArrowRepeat size={24}/>
                  </button>
                </li>
                <li className="px-2">
                    <div className="relative">
                      <button onClick={handleClickVolume}>
                        <BsFillVolumeUpFill size={24}/>
                      </button>
                      <StyledContent ref={volumeContentRef} className={`bg-blueGray-900 transform left-1/2 -translate-x-1/2 transition-all ${volumeToggle ? "opacity-100" : "opacity-0"}`}>
                        <div id="volume-container">
                          <input type="range" className="amplitude-volume-slider" step=".1"/>
                        </div>
                      </StyledContent>
                    </div>
                </li>
              </ul>
            </LeftControl>
            <TimeContainer className="px-4">
              <div id="time-container" className="flex items-center w-full">
                <span className="current-time pr-2 block flex-none" style={{width: 48}}>
                  <span className="amplitude-current-minutes" ></span>:<span className="amplitude-current-seconds"></span>
                </span>
                <div id="progress-container" className="relative w-full">
                  <div className="amplitude-wave-form"></div>
                  <input type="range" className="amplitude-song-slider absolute w-full top-1/2 transform -translate-y-1/2"/>
                  <progress id="song-played-progress" className="amplitude-song-played-progress absolute w-full top-1/2 transform -translate-y-1/2"></progress>
                  <progress id="song-buffered-progress" className="amplitude-buffered-progress absolute w-full top-1/2 transform -translate-y-1/2" value="0"></progress>
                </div>
                <span className="duration pl-2 block">
                  <span className="amplitude-duration-minutes"></span>:<span className="amplitude-duration-seconds"></span>
                </span>
              </div>
            </TimeContainer>
            <RightControl className="px-4">
              <div className="flex">
                <div>
                  <ul className="flex items-center -mx-1">
                    <li className="px-1">
                      <img className="object-cover h-9 w-9 rounded-md album-art" data-amplitude-song-info="cover_art_url" alt="" />
                    </li>
                    <li className="px-1">
                      <h3 className="line-clamp-1 song-name" data-amplitude-song-info="name"></h3>
                      <p className="text-blueGray-400 line-clamp-1" data-amplitude-song-info="artist"></p>
                    </li>
                    <li className="px-2">
                      <button>
                        <BsMusicNoteList size={24}/>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </RightControl>
          </div>
        </div>
        <button className="absolute right-2 z-50 top-1/2 transform -translate-y-1/2 text-blueGray-500">
          <BsX size={24}/>
        </button>
      </div>
    </PlayerStyled>
  )
}

export default MurottalPlayer
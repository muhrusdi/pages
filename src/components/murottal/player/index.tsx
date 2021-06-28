import React, { useEffect, useState, useRef, useContext } from "react"
import { 
  BsFillSkipStartFill, 
  BsFillSkipEndFill, 
  BsArrowRepeat,
  BsMusicNoteList,
  BsFillPauseFill,
  BsFillVolumeUpFill,
  BsX,
  BsFillPlayFill } from "react-icons/bs"
import { Link } from "gatsby"
import { PlayerStyled, TimeContainer, LeftControl, RightControl, StyledContent } from "./styled"
import { Context } from "contexts"

const MurottalPlayer: React.FC = ({data}) => {
  const [volumeToggle, setVolumeToggle] = useState(false)
  // const [moreThan, setMoreThan] = useState(false)
  const [isPlay, setIsPlay] = useState(false)
  const volumeContentRef = useRef(null)
  const amplitudeRef = useRef(null)
  const { handleSetMurottal } = useContext(Context)

  useEffect(() => {
    import("amplitudejs").then(amplitude => {
      amplitudeRef.current = amplitude
      amplitudeRef.current.init({
        "songs": data,
        "callbacks": {
              "play": () => {
                setIsPlay(true)
                console.log(amplitudeRef.current.getSongPlayedPercentage())
              },
      
              "pause": function(){
                  setIsPlay(false)
              }
          },
        waveforms: {
          sample_rate: 50
        }
      })
    }).then(() => {
      amplitudeRef.current.play()
    })
  }, [data])


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

  const handleClose = () => {
    amplitudeRef.current.stop()
    handleSetMurottal([])
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
                  <button id="play-pause" className={`amplitude-play-pause ${isPlay ? "amplitude-playing" : null}`}>
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
                  <button className="amplitude-repeat relative" id="repeat">
                    <span className="absolute repeat top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">1</span>
                    <BsArrowRepeat size={24}/>
                  </button>
                </li>
                <li className="px-2">
                    <div className="relative">
                      <button onClick={handleClickVolume}>
                        <BsFillVolumeUpFill size={24}/>
                      </button>
                      <StyledContent ref={volumeContentRef} className={`bg-black border bg-opacity-60 backdrop-filter backdrop-blur rounded-lg border-gray-800 transform left-1/2 -translate-x-1/2 transition-all ${volumeToggle ? "block" : "hidden"}`}>
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
                      <Link to="/murottal">
                        <BsMusicNoteList size={24}/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </RightControl>
          </div>
        </div>
        <button onClick={handleClose} className="absolute right-2 z-50 top-1/2 transform focus:outline-none -translate-y-1/2 text-blueGray-500">
          <BsX size={24}/>
        </button>
      </div>
    </PlayerStyled>
  )
}

export default MurottalPlayer
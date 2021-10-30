import React, { useState, useEffect, useRef } from "react"
import { BiHeart, BiMessage } from "react-icons/bi"
import TweetItem from "components/tweet-item"
import CountUp from "react-countup"
import ReactCanvasConfetti from "react-canvas-confetti";

const DetailTwitter: React.FC = () => {
  const confettiRef = useRef(null)

  // useEffect(() => {
  //   fetch("https://mytweetapi.herokuapp.com/api/mhmrus")
  //     .then(d => {
  //       console.log(d)
  //     })
  // }, [])

  const makeShot = (particleRatio, opts) => {
    confettiRef.current({
      ...opts,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * particleRatio),
    });
  }
  const handleEnd = () => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  }

  const getInstance = (instance) => {
    confettiRef.current = instance;
  }; 
  

  return (
    <div>
      <header className="flex justify-center text-center">
        <div className="max-w-sm">
          <img className="h-36 mx-auto w-36 rounded-full" src="https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80" alt="" />
          <h1 className="text-xl font-black mt-7">Muhammad Rusdi</h1>
          <p className="mt-2 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="mt-4">
            <CountUp
              className="account-balance"
              start={0}
              end={1.110}
              duration={2.75}
              separator=" "
              decimals={4}
              decimal=","
              suffix=" Tweets"
              onEnd={handleEnd}
              onStart={() => console.log("Started! 💨")}
              />
              <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles}/>
          </div>
          {/* <p className="mt-4">1,100 Tweets</p> */}
        </div>
      </header>
      <ul className="grid grid-cols-6 gap-6 mt-16">
        <li>
          <TweetItem/>
        </li>
        <li>
          <TweetItem/>
        </li>
        <li>
          <TweetItem/>
        </li>
        <li>
          <TweetItem/>
        </li>
        <li>
          <TweetItem/>
        </li>
        <li>
          <TweetItem/>
        </li>
        <li>
          <TweetItem/>
        </li>
        <li>
          <TweetItem/>
        </li>
      </ul>
    </div>
  )
}

export default DetailTwitter
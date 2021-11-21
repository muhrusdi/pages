import React from "react"
import className from "classnames"
import { css } from "@/styled"

const h1 = css({
  background: "-webkit-linear-gradient(rgba(138,75,175,1), rgba(84,44,133,1))",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  fontSize: "10rem",
})

const Overview: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="h-screen flex items-center">
            <svg
              width="888"
              height="809"
              viewBox="0 0 888 809"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-jkl1fc"
            >
              <circle
                cx="441"
                cy="413"
                r="395.25"
                transform="rotate(-180 441 413)"
                stroke="#F5F5F5"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M105.75 413C105.75 227.846 255.846 77.75 441 77.75C626.153 77.75 776.25 227.846 776.25 413C776.25 598.153 626.153 748.25 441 748.25C255.846 748.25 105.75 598.153 105.75 413Z"
                stroke="#F0F0F2"
                strokeWidth="1.5"
              ></path>
              <ellipse
                cx="96"
                cy="215"
                rx="7.99996"
                ry="8"
                fill="#FEC21E"
              ></ellipse>
              <ellipse
                cx="774"
                cy="198"
                rx="6.00026"
                ry="6"
                fill="#B17ACC"
              ></ellipse>
              <ellipse
                cx="192.999"
                cy="637"
                rx="5.99947"
                ry="6"
                fill="#F67300"
              ></ellipse>
              <ellipse
                cx="695.2"
                cy="635.956"
                rx="10.0001"
                ry="10"
                fill="#DBF0FF"
              ></ellipse>
              <ellipse
                cx="6.00014"
                cy="525"
                rx="6.00014"
                ry="6"
                fill="#E899CE"
              ></ellipse>
              <ellipse
                cx="879"
                cy="400"
                rx="7.99983"
                ry="8"
                fill="#BCE939"
              ></ellipse>
            </svg>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 text-center -translate-y-1/2">
            <h1 className={className("font-black", h1())}>Gabo</h1>
            <p className="text-xl text-gray-600">
              The modern web boilerplate for quickly development
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview

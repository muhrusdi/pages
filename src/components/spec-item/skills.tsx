import React from "react"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGraphql,
  SiAdobexd,
} from "react-icons/si"
import { DiPhotoshop } from "react-icons/di"

const SkillsItem: React.FC = () => (
  <div>
    <ul>
      <li>
        <div>
          <h3 className="font-bold text-2xl">Development</h3>
          <ul className="flex mt-2 flex-wrap -mx-3">
            <li className="mt-4 px-3">
              <div className="flex flex-col items-center">
                <SiHtml5 size={60} color="#ff3f3f" />
                <span className="text-sm uppercase mt-4">HTML</span>
              </div>
            </li>
            <li className="mt-4 px-3">
              <div className="flex flex-col items-center">
                <SiCss3 size={60} color="#1f99f7" />
                <span className="text-sm uppercase mt-4">CSS</span>
              </div>
            </li>
            <li className="mt-4 px-3">
              <div className="flex flex-col items-center">
                <SiJavascript size={60} color="#f7cc1f" />
                <span className="text-sm uppercase mt-4">Javascript</span>
              </div>
            </li>
            <li className="mt-4 px-3">
              <div className="flex flex-col items-center">
                <SiTypescript size={60} color="#4674e4" />
                <span className="text-sm uppercase mt-4">Typescript</span>
              </div>
            </li>
            <li className="mt-4 px-3">
              <div className="flex flex-col items-center">
                <img
                  style={{ height: 60 }}
                  src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png"
                  alt=""
                />
                <span className="text-sm uppercase mt-4">Node.js</span>
              </div>
            </li>
            <li className="mt-4 px-3">
              <div className="flex flex-col items-center">
                <SiReact size={60} color="#2dfff9" />
                <span className="text-sm uppercase mt-4">React</span>
              </div>
            </li>
            <li className="mt-4 px-3">
              <div className="flex flex-col items-center">
                <svg
                  height={60}
                  viewBox="0 0 261.76 226.69"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
                    <g transform="translate(178.06 235.01)">
                      <path
                        d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
                        fill="#41b883"
                      />
                    </g>
                    <g transform="translate(178.06 235.01)">
                      <path
                        d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
                        fill="#34495e"
                      />
                    </g>
                  </g>
                </svg>
                <span className="text-sm uppercase mt-4">Vue</span>
              </div>
            </li>
            <li className="mt-4 px-3">
              <div className="flex flex-col items-center">
                <SiGraphql size={60} color="#ff2dd8" />
                <span className="text-sm uppercase mt-4">GraphQL</span>
              </div>
            </li>
            <li className="mt-4 px-3">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 106 128"
                  height="60"
                >
                  <path
                    fill="#d1d5db"
                    fillRule="evenodd"
                    d="M105.306 97.519L61.284 4.037v-.002A7.062 7.062 0 0055.265.013c-2.679-.156-5.079 1.136-6.433 3.335L1.088 80.678a7.233 7.233 0 00.084 7.763l23.338 36.152c1.391 2.158 3.801 3.407 6.306 3.407.71 0 1.424-.1 2.126-.308l67.744-20.036a7.424 7.424 0 004.66-4.028 7.264 7.264 0 00-.04-6.11zm-9.857 4.01l-57.479 17c-1.756.52-3.439-.999-3.07-2.77l20.534-98.34c.384-1.838 2.926-2.13 3.728-.427l38.02 80.736c.717 1.523-.1 3.319-1.733 3.801z"
                    clipRule="evenodd"
                  >
                  </path>
                </svg>
                <span className="text-sm uppercase mt-4">Prisma</span>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li className="mt-10">
        <div>
          <h3 className="font-bold text-2xl">Design</h3>
          <ul className="flex mt-2 flex-wrap -mx-3">
            <li className="mt-4 px-3">
              <div className="flex flex-col items-center">
                <img
                  style={{ height: 60 }}
                  src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                  alt=""
                />
                <span className="text-sm uppercase mt-4">Figma</span>
              </div>
            </li>
            <li className="mt-4 px-3">
              <div className="flex flex-col items-center">
                <img
                  style={{ height: 60 }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1200px-Sketch_Logo.svg.png"
                  alt=""
                />
                <span className="text-sm uppercase mt-4">Sketch</span>
              </div>
            </li>
            <li className="mt-4 px-3">
              <div className="flex flex-col items-center">
                <SiAdobexd size={60} color="#ff5ce8" />
                <span className="text-sm uppercase mt-4">Adobe XD</span>
              </div>
            </li>
            <li className="mt-4 px-3">
              <div className="flex flex-col items-center">
                <DiPhotoshop size={60} color="#5c84ff" />
                <span className="text-sm uppercase mt-4">Adobe Photoshop</span>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
)

export default SkillsItem

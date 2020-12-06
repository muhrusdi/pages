import React from "react"
import styled from "styled-components"

export const HomeHeaderStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h2 {
    letter-spacing: 1.2rem;
  }
`;

export const mocks = [
  {
    title: "General Information",
    description: (
      <div>
        <p>My name is Muhammad Rusdi, you can call me Rusdi. I'm Front End Engineer with 3+ years experiences in web development using modern stack, i'm enthutiastic about design and new technology</p>
        <ul className="mt-8">
          <li>
            <div className="flex bg-gray-900 rounded-md py-2 px-4 mt-4">
              <div className="w-2/5">
                <span>Email</span>
              </div>
              <div className="w-3/5">
                <span>mhmrofficial@gmail.com</span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex bg-gray-900 rounded-md py-2 px-4 mt-4">
              <div className="w-2/5">
                <span>Date of birth</span>
              </div>
              <div className="w-3/5">
                <span>14 September 1992</span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex bg-gray-900 rounded-md py-2 px-4 mt-4">
              <div className="w-2/5">
                <span>Telephone</span>
              </div>
              <div className="w-3/5">
                <span>+62 8874 3650 3668</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Education",
    description: (
      <div>
        <ul>
          <li>
            <div className="flex">
              <div className="pr-4 flex-none py-4" style={{width: 150}}>
                <span>2012-2016</span>
              </div>
              <div className="border-yellow-500 border-l-4 pl-4 py-4">
                <div>
                  <h3 className="text-2xl font-bold">State Polytechnic of Ujung Pandang</h3>
                  <p className="text-gray-500">Computer and Network Engineering</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div className="pr-4 flex-none py-4" style={{width: 150}}>
                <span>2009-2012</span>
              </div>
              <div className="border-green-500 border-l-4 pl-4 py-4">
                <div>
                  <h3 className="text-2xl font-bold">SMK YPKK Limbung</h3>
                  <p className="text-gray-500">Computer and Network Engineering</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div className="pr-4 flex-none py-4" style={{width: 150}}>
                <span>2006-2009</span>
              </div>
              <div className="border-blue-500 border-l-4 pl-4 py-4">
                <div>
                  <h3 className="text-2xl font-bold">MTs. Muahammadiyah Lempangan</h3>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div className="pr-4 flex-none py-4" style={{width: 150}}>
                <span>2001-2006</span>
              </div>
              <div className="border-pink-500 border-l-4 pl-4 py-4">
                <div>
                  <h3 className="text-2xl font-bold">SD MIN Bontosunggu</h3>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Experiences",
    description: (
      <div>
        <ul>
          <li>
            <div className="flex">
              <div className="pr-4 flex-none py-4" style={{width: 150}}>
                <span>Oct 2019 - Current</span>
              </div>
              <div className="border-yellow-500 border-l-4 pl-4 py-4">
                <div>
                  <span className="block uppercase font-bold text-gray-400 text-base">Freelancer</span>
                  <h3 className="text-2xl font-bold mt-2">Front End Engineer</h3>
                  <p className="text-gray-500">Makassar, Sulawesi Selatan, Indonesia</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div className="pr-4 flex-none py-4" style={{width: 150}}>
                <span>May 2019 - Oct 2019</span>
              </div>
              <div className="border-green-500 border-l-4 pl-4 py-4">
                <div>
                  <span className="block uppercase font-bold text-gray-400 text-base">PT. Docotel Teknologi Celebes</span>
                  <h3 className="text-2xl font-bold mt-2">Lead Front End Engineer</h3>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div className="pr-4 flex-none py-4" style={{width: 150}}>
                <span>March 2017 - May 2019</span>
              </div>
              <div className="border-green-500 border-l-4 pl-4 py-4">
                <div>
                  <h3 className="text-2xl font-bold mt-2">Front End Engineer</h3>
                  <p className="text-gray-500">Makassar, Sulawesi Selatan, Indonesia</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Skills",
    description: (
      <div>
        <ul>
          <li>
            <div>
              <h3 className="font-bold text-2xl">Web Development</h3>
              <ul className="flex mt-2 flex-wrap">
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">HTML</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">CSS</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">JavaScript</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">TypeScirpt</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">React</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">Vue.js</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">GraphQL</span>
                </li>
              </ul>
            </div>
          </li>
          <li className="mt-10">
            <div>
              <h3 className="font-bold text-2xl">Design</h3>
              <ul className="flex mt-2 flex-wrap">
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">Figma</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">Sketch</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">Adobe XD</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">Adobe Photoshop</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Stack",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, consectetur."
  },
  {
    title: "Works",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, consectetur."
  },
]
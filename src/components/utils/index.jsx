import React from "react"
import styled from "styled-components"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGraphql,
  SiTailwindcss,
  SiFigma,
  SiSketch,
  SiAdobexd
} from "react-icons/si"
import { DiPhotoshop } from "react-icons/di"

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
    title: "Profile",
    description: (
      <div>
        <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
        <ul className="mt-8">
          <li>
            <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
              <div className="w-2/5 text-gray-500 sm:text-white">
                <span>Email</span>
              </div>
              <div className="w-3/5">
                <span>mhmrofficial@gmail.com</span>
              </div>
            </div>
          </li>
          <li>
            <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
              <div className="w-2/5 text-gray-500 sm:text-white">
                <span>Date of birth</span>
              </div>
              <div className="w-3/5">
                <span>14 September 1992</span>
              </div>
            </div>
          </li>
          <li>
            <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
              <div className="w-2/5 text-gray-500 sm:text-white">
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
  },
  {
    title: "Experiences",
    description: (
      <div>
        <ul>
          <li>
            <div className="flex">
              <div className="pr-4 flex-none py-4 text-right hidden sm:block" style={{width: 150}}>
                <span>Oct 2019 - Current</span>
              </div>
              <div className="border-yellow-500 border-l-4 pl-4 py-4">
                <div>
                  <span className="text-sm text-blue-600 pb-6 block sm:hidden">Oct 2019 - Current</span>
                  <span className="block uppercase font-bold text-gray-400 text-base">Freelancer</span>
                  <h3 className="text-2xl font-bold mt-2">Front End Engineer</h3>
                  <p className="text-gray-500">Makassar, Sulawesi Selatan, Indonesia</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div className="pr-4 flex-none py-4 text-right hidden sm:block" style={{width: 150}}>
                <span>May 2019 - Oct 2019</span>
              </div>
              <div className="border-green-500 border-l-4 pl-4 py-4">
                <div>
                  <span className="text-sm text-blue-600 pb-6 block sm:hidden">May 2019 - Oct 2019</span>
                  <span className="block uppercase font-bold text-gray-400 text-base">PT. Docotel Teknologi Celebes</span>
                  <h3 className="text-2xl font-bold mt-2">Lead Front End Engineer</h3>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div className="pr-4 flex-none py-4 text-right hidden sm:block" style={{width: 150}}>
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
              <h3 className="font-bold text-2xl">Development</h3>
              <ul className="flex mt-2 flex-wrap -mx-3">
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiHtml5 size={60} color="#ff3f3f"/>
                    <span className="text-sm uppercase mt-4">HTML</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiCss3 size={60} color="#1f99f7"/>
                    <span className="text-sm uppercase mt-4">CSS</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiJavascript size={60} color="#f7cc1f"/>
                    <span className="text-sm uppercase mt-4">Javascript</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiTypescript size={60} color="#4674e4"/>
                    <span className="text-sm uppercase mt-4">Typescript</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiReact size={60} color="#2dfff9"/>
                    <span className="text-sm uppercase mt-4">React</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiGraphql size={60} color="#ff2dd8"/>
                    <span className="text-sm uppercase mt-4">GraphQL</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 106 128" height="60"><path fill="#d1d5db" fill-rule="evenodd" d="M105.306 97.519L61.284 4.037v-.002A7.062 7.062 0 0055.265.013c-2.679-.156-5.079 1.136-6.433 3.335L1.088 80.678a7.233 7.233 0 00.084 7.763l23.338 36.152c1.391 2.158 3.801 3.407 6.306 3.407.71 0 1.424-.1 2.126-.308l67.744-20.036a7.424 7.424 0 004.66-4.028 7.264 7.264 0 00-.04-6.11zm-9.857 4.01l-57.479 17c-1.756.52-3.439-.999-3.07-2.77l20.534-98.34c.384-1.838 2.926-2.13 3.728-.427l38.02 80.736c.717 1.523-.1 3.319-1.733 3.801z" clip-rule="evenodd"></path></svg>
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
                    <SiFigma size={60} color="#4ba053"/>
                    <span className="text-sm uppercase mt-4">Figma</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiSketch size={60} color="#ef9746"/>
                    <span className="text-sm uppercase mt-4">Sketch</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiAdobexd size={60} color="#ff5ce8"/>
                    <span className="text-sm uppercase mt-4">Adobe XD</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <DiPhotoshop size={60} color="#5c84ff"/>
                    <span className="text-sm uppercase mt-4">Adobe Photoshop</span>
                  </div>
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
    description: (
      <div>
        <ul className="-my-6">
          <li className="py-6">
            <div className="p-4 border-indigo-500 border-2 rounded-xl">
              <div className="text-center text-sm text-indigo-400 uppercase font-bold">
                <span>Back End / CMS</span>
              </div>
              <ul className="flex mt-2 justify-center flex-wrap -mx-3">
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiJavascript size={60} color="#f7cc1f"/>
                    <span className="text-sm uppercase mt-4">Javascript</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiTypescript size={60} color="#4674e4"/>
                    <span className="text-sm uppercase mt-4">Typescript</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiGraphql size={60} color="#ff2dd8"/>
                    <span className="text-sm uppercase mt-4">GraphQL</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 106 128" height="60"><path fill="#d1d5db" fill-rule="evenodd" d="M105.306 97.519L61.284 4.037v-.002A7.062 7.062 0 0055.265.013c-2.679-.156-5.079 1.136-6.433 3.335L1.088 80.678a7.233 7.233 0 00.084 7.763l23.338 36.152c1.391 2.158 3.801 3.407 6.306 3.407.71 0 1.424-.1 2.126-.308l67.744-20.036a7.424 7.424 0 004.66-4.028 7.264 7.264 0 00-.04-6.11zm-9.857 4.01l-57.479 17c-1.756.52-3.439-.999-3.07-2.77l20.534-98.34c.384-1.838 2.926-2.13 3.728-.427l38.02 80.736c.717 1.523-.1 3.319-1.733 3.801z" clip-rule="evenodd"></path></svg>
                    <span className="text-sm uppercase mt-4">Prisma</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="py-6">
            <div className="p-4 border-yellow-500 border-2 rounded-xl">
              <div className="text-center text-sm text-yellow-400 uppercase font-bold">
                <span>Front End</span>
              </div>
              <ul className="flex mt-2 justify-center flex-wrap -mx-3">
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiHtml5 size={60} color="#ff3f3f"/>
                    <span className="text-sm uppercase mt-4">HTML</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiCss3 size={60} color="#1f99f7"/>
                    <span className="text-sm uppercase mt-4">CSS</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiJavascript size={60} color="#f7cc1f"/>
                    <span className="text-sm uppercase mt-4">Javascript</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiTypescript size={60} color="#4674e4"/>
                    <span className="text-sm uppercase mt-4">Typescript</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiReact size={60} color="#2dfff9"/>
                    <span className="text-sm uppercase mt-4">React</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiGraphql size={60} color="#ff2dd8"/>
                    <span className="text-sm uppercase mt-4">GraphQL</span>
                  </div>
                </li>
                <li className="mt-4 px-3">
                  <div className="flex flex-col items-center">
                    <SiTailwindcss size={60} color="#ff2dd8"/>
                    <span className="text-sm uppercase mt-4">Tailwindcss</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="py-6">
            <div className="p-4 border-green-400 border-2 rounded-xl">
              <div className="text-center text-sm text-green-400 uppercase font-bold">
                <span>Deployment</span>
              </div>
              <ul className="flex mt-1 flex-wrap">
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
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">CSS in JS</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">GraphQL</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">Redux</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">Gatsby.js</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">Next.js</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">WPGraphQL</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">JAMStack</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">Tailwindcss</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">Netlify</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">Vercel</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">Directus</span>
                </li>
                <li className="mt-4">
                  <span className="block py-2 px-4 bg-gray-900 rounded-md mr-4">Wordpress</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Works",
    description: (
      <div>
        <ul className="divide-y border-gray-600">
          <li className="border-gray-600 my-10">
            <div>
              <h3 className="text-3xl font-bold mt-2">Web Profile Docotel Teknologi Celebes</h3>
              <a href="https://dtc.co.id" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">dtc.co.id</span>
              </a>
              <p className="mt-4 text-gray-400">DTC is a software house company in Makassar</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Web Profile Mahapatih</h3>
              <a href="https://mahapatih.id" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">mahapatih.id</span>
              </a>
              <p className="mt-4 text-gray-400">Mahapatih is a As a lead-edges security
technology company</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Awwwara</h3>
              <a href="https://awwwara.com" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">awwwara.com</span>
              </a>
              <p className="mt-4 text-gray-400">Awwwara is a news media</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Web Profile DTC Academy</h3>
              <a href="https://dtc-academy.netlify.app" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">dtcacademy.co.id</span>
              </a>
              <p className="mt-4 text-gray-400">DTC Academy is a Technology and Design Academy.</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Eproc Indonesia</h3>
              <a href="https://eproc.id" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">eproc.id</span>
              </a>
              <p className="mt-4 text-gray-400">Eproc Indonesia is an application for find all tender in Indonesia. I worked on the frontend.</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Real Travel Finance</h3>
              <a href="https://realtravelfinance.com" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">realtravelfinance.com</span>
              </a>
              <p className="mt-4 text-gray-400">Real Travel Finance is a finance app for tours & travel company</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">E-Survey</h3>
              <a href="https://assipauang.opmksr.com" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">assipauang.opmksr.com</span>
              </a>
              <p className="mt-4 text-gray-400">E-Survey is a society satisfaction survey application.</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Modana</h3>
              <a href="https://modana.netlify.app/" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">modana.id</span>
              </a>
              <p className="mt-4 text-gray-400">Human Resource Management Systems, Payroll, Virtual Accounts, Loans. I worked on the dashboard frontend and landing page.</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Web Profile DM-PTSP Kota Makassar</h3>
              <a href="https://dpmptsp.makassar.go.id" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">dpmptsp.makassar.go.id</span>
              </a>
              <p className="mt-4 text-gray-400">Web profile for Online Licensing Application</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Reus Design</h3>
              <a href="https://reus-design.netlify.app" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">reus.design</span>
              </a>
              <p className="mt-4 text-gray-400">Design System for my projects</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Web Profile Masar</h3>
              <a href="https://masar.netlify.app/" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">masar.co.id</span>
              </a>
              <p className="mt-4 text-gray-400">Solusi manajemen pasar tradisional yang dikemas dalam konsep ERP (Enterprise Resource Planning), sehingga integrasi bisnis proses dilingkungan pasar tradisional lebih mudah dilakukan serta integritas data lebih terjamin.</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Web Profile Markir</h3>
              <a href="https://markir.netlify.app/" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">markir.co.id</span>
              </a>
              <p className="mt-4 text-gray-400">Markir adalah sistem manajemen tempat parkir yang mengutamakan transparansi, optimalisasi dan efisiensi. Markir berdiri di antara parkir off-street dan on-street, harapannya Markir dapat mengsinergikan keduanya untuk memberikan kenyamanan bagi semua.</p>
            </div>
          </li>
        </ul>
      </div>
    )
  },
]
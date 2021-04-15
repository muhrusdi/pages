import React from "react"
import styled, { keyframes } from "styled-components"
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
  SiNextDotJs,
  SiGatsby,
  SiAdobexd
} from "react-icons/si"
import { DiPhotoshop } from "react-icons/di"
import { BiServer } from "react-icons/bi"

const key = keyframes`
  from {
      transform: translate3d(0,0,0);
  }

  to {
      transform: translate3d(-50%,0,0);
  }
`

export const HomeHeaderStyled = styled.div`
  & > div {
    display: inline-block;
    white-space: nowrap;
    animation: ${key} 80s linear infinite;
  }
  h2 {
      font-size: 15em;
    }
  p {
    font-size: 2em;
  }
  .arrow {
    svg {
      position: absolute;
      top: 37px;
      left: 0;
    }
  }
  @media (min-width: 640px) {
    h2 {
      font-size: 8em;
    }
    p {
      font-size: 3em;
    }
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 15em;
    }
    p {
      font-size: 4em;
    }
  }
`;

export const BlogItemFooter = styled.div`
  a {
    &:hover {
      color: rgba(156, 163, 175, var(--tw-text-opacity));
      & + span {
        color: white;
      }
    }
  }
`

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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 106 128" height="60"><path fill="#d1d5db" fillRule="evenodd" d="M105.306 97.519L61.284 4.037v-.002A7.062 7.062 0 0055.265.013c-2.679-.156-5.079 1.136-6.433 3.335L1.088 80.678a7.233 7.233 0 00.084 7.763l23.338 36.152c1.391 2.158 3.801 3.407 6.306 3.407.71 0 1.424-.1 2.126-.308l67.744-20.036a7.424 7.424 0 004.66-4.028 7.264 7.264 0 00-.04-6.11zm-9.857 4.01l-57.479 17c-1.756.52-3.439-.999-3.07-2.77l20.534-98.34c.384-1.838 2.926-2.13 3.728-.427l38.02 80.736c.717 1.523-.1 3.319-1.733 3.801z" clipRule="evenodd"></path></svg>
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
    title: "Stacks",
    description: (
      <div>
        <ul className="-my-6">
          <li className="py-6">
            <div className="p-4 border-indigo-500 border-2 rounded-xl">
              <div className="text-center text-sm text-indigo-400 uppercase font-bold">
                <span>Back End / CMS</span>
              </div>
              <ul className="flex mt-2 justify-center flex-wrap -mx-3 -my-3">
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <SiJavascript size={60} color="#f7cc1f"/>
                    <span className="text-sm uppercase mt-4">Javascript</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <SiTypescript size={60} color="#4674e4"/>
                    <span className="text-sm uppercase mt-4">Typescript</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <SiGraphql size={60} color="#ff2dd8"/>
                    <span className="text-sm uppercase mt-4">GraphQL</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 106 128" height="60"><path fill="#d1d5db" fillRule="evenodd" d="M105.306 97.519L61.284 4.037v-.002A7.062 7.062 0 0055.265.013c-2.679-.156-5.079 1.136-6.433 3.335L1.088 80.678a7.233 7.233 0 00.084 7.763l23.338 36.152c1.391 2.158 3.801 3.407 6.306 3.407.71 0 1.424-.1 2.126-.308l67.744-20.036a7.424 7.424 0 004.66-4.028 7.264 7.264 0 00-.04-6.11zm-9.857 4.01l-57.479 17c-1.756.52-3.439-.999-3.07-2.77l20.534-98.34c.384-1.838 2.926-2.13 3.728-.427l38.02 80.736c.717 1.523-.1 3.319-1.733 3.801z" clipRule="evenodd"></path></svg>
                    <span className="text-sm uppercase mt-4">Prisma</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height={60} fill="none" viewBox="0 0 37 24"><path fill="#d1d5db" d="M25.416 13.046l-1.822 2.763a4.256 4.256 0 00-1.861-.135l-4.34-8.663a4.186 4.186 0 10-6.531-.437l-5.97 9.113a4.182 4.182 0 102.442 1.365l5.8-8.846a4.2 4.2 0 001.801.12l4.331 8.644a4.154 4.154 0 00-1.121 2.844 4.221 4.221 0 008.441 0 4.146 4.146 0 00-.73-2.357l1.895-2.875-2.335-1.536zM32.477 0a4.2 4.2 0 00-4.221 4.186 4.15 4.15 0 001.109 2.83l-1.791 2.759 2.34 1.52 1.928-2.97A4.186 4.186 0 1032.477 0zm0 5.86a1.674 1.674 0 11.028-3.348 1.674 1.674 0 01-.028 3.348z"></path></svg>
                    <span className="text-sm uppercase mt-4">Nexus</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="border-r border-blueGray-600" style={{height: 60, width: 1}}></div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                  <svg role="img" viewBox="0 0 24 24" height="60" xmlns="http://www.w3.org/2000/svg"><title>Contentful icon</title><path fill="#d1d5db" d="M21.875 16.361c-.043-.048-1.067-1.18-2.365-1.19-.68 0-1.288.283-1.815.858-.773.842-2.35 1.85-4.25 1.921-1.598.059-3.085-.548-4.423-1.805-1.644-1.544-2.155-4.016-1.302-6.297.834-2.23 2.752-3.616 5.131-3.707l.044-.004c.024-.003 2.302-.258 4.325 1.548.17.185 1.154 1.197 2.475 1.228.823.018 1.586-.336 2.27-1.055.602-.632.87-1.342.797-2.112-.154-1.61-1.806-2.876-2.03-3.04-.212-.184-1.878-1.578-4.476-2.294-2.52-.695-6.42-.853-10.685 2.349a7.31 7.31 0 0 0-.557.49c-.28.208-.523.462-.716.753a12.469 12.469 0 0 0-3.064 8.677c.207 6.283 5.265 9.293 5.646 9.51.262.17 2.906 1.81 6.495 1.809 2.106 0 4.538-.565 7.005-2.322.248-.138 1.714-1.012 2.103-2.52.23-.894.042-1.815-.562-2.737l-.046-.06zm-16.932 1.97c0-1.09.887-1.977 1.977-1.977s1.977.886 1.977 1.977c0 1.09-.887 1.977-1.977 1.977s-1.977-.887-1.977-1.977zm.139-13.657c.236-.275.451-.498.628-.67a1.965 1.965 0 0 1 1.088-.329c1.09 0 1.977.887 1.977 1.977S7.888 7.63 6.798 7.63s-1.977-.887-1.977-1.977c0-.356.096-.69.261-.978zM13.249.999c3.954 0 6.657 2.336 6.826 2.486l.043.034c.42.3 1.532 1.301 1.63 2.324.044.469-.126.898-.52 1.313-.477.5-.983.752-1.504.738-.964-.019-1.743-.887-1.76-.905l-.042-.044c-2.292-2.063-4.83-1.855-5.13-1.822a6.82 6.82 0 0 0-3.012.818 3 3 0 0 0-2.34-3.214C9.543 1.45 11.516.999 13.248.999zM3.884 6.34a3 3 0 0 0 2.914 2.31c.122 0 .24-.01.358-.024a7.336 7.336 0 0 0-.39.866c-.75 2.003-.59 4.14.359 5.854-.068-.005-.136-.01-.205-.01a2.999 2.999 0 0 0-2.967 2.6 10.075 10.075 0 0 1-1.7-5.288 11.43 11.43 0 0 1 1.63-6.309zM21.497 18.9c-.3 1.174-1.615 1.89-1.627 1.896l-.058.036c-6.287 4.499-12.137.667-12.382.502l-.036-.022a2.848 2.848 0 0 1-.034-.02 2.998 2.998 0 0 0 2.543-3.228c1.124.64 2.336.951 3.58.906 2.214-.083 4.057-1.264 4.962-2.25.327-.356.67-.53 1.048-.53h.005c.762.004 1.46.688 1.593.826.421.658.558 1.291.406 1.884z"/></svg>
                    <span className="text-sm uppercase mt-4">Contentful</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <svg role="img" viewBox="0 0 24 24" height={60} xmlns="http://www.w3.org/2000/svg"><title>Prismic icon</title><path fill="#d1d5db" d="M7.7 0C5.033 0 4.066.278 3.09.8A5.447 5.447 0 0 0 .825 3.07c-.522.977-.8 1.947-.8 4.622v.998c0 .199.078.388.218.529l1.77 1.774a.15.15 0 0 0 .257-.106V8.019c0-2.006.208-2.733.6-3.467A4.088 4.088 0 0 1 4.568 2.85c.731-.392 1.457-.6 3.459-.6h2.164c.199 0 .39-.08.53-.221l1.77-1.772A.15.15 0 0 0 12.387 0zm7.605 0c-.2 0-.392.08-.532.22l-1.769 1.775a.147.147 0 0 0-.044.104c0 .083.068.15.15.15h2.862c2.002 0 2.728.21 3.46.601a4.089 4.089 0 0 1 1.698 1.702c.39.734.599 1.461.599 3.467v2.17c0 .198.078.39.218.53l1.77 1.774a.15.15 0 0 0 .257-.106V7.692c0-2.675-.278-3.645-.8-4.623A5.446 5.446 0 0 0 20.91.801C19.935.278 18.968 0 16.3 0zM6.761 3.75a2.995 2.995 0 0 0-2.993 2.999v5.691a.75.75 0 0 0 .219.529l1.77 1.776a.149.149 0 0 0 .255-.106v-7.14a1.5 1.5 0 0 1 .097-.53c.072-.2.188-.385.348-.545l2.308-2.421a.15.15 0 0 0-.11-.253zm4.802 0c-.2 0-.39.08-.53.22L9.26 5.744A.151.151 0 0 0 9.366 6h7.124c.186 0 .364.034.528.097.2.072.386.188.546.347l2.413 2.313a.15.15 0 0 0 .255-.108v-1.9a2.995 2.995 0 0 0-2.993-3zm6.573 5.463a.15.15 0 0 0-.15.15v7.139a1.5 1.5 0 0 1-.095.53 1.49 1.49 0 0 1-.348.546l-2.308 2.42a.15.15 0 0 0 .108.255h1.896a2.997 2.997 0 0 0 2.993-3.002v-5.69a.752.752 0 0 0-.219-.53l-1.77-1.774a.15.15 0 0 0-.107-.044zm-17.96 2.25a.15.15 0 0 0-.15.15v4.695c0 2.674.278 3.645.8 4.623a5.442 5.442 0 0 0 2.263 2.267c.976.522 1.943.802 4.612.802h.994c.2 0 .39-.08.53-.22l1.771-1.775a.149.149 0 0 0-.106-.255H8.027c-2.002 0-2.728-.208-3.46-.6a4.088 4.088 0 0 1-1.698-1.702c-.39-.734-.599-1.461-.599-3.467v-2.172a.749.749 0 0 0-.22-.528L.282 11.507a.15.15 0 0 0-.106-.044zm21.703 1.5a.15.15 0 0 0-.15.15v2.868c0 2.006-.208 2.733-.6 3.467a4.088 4.088 0 0 1-1.698 1.702c-.731.392-1.457.6-3.459.6h-2.164a.749.749 0 0 0-.532.22l-1.769 1.773a.151.151 0 0 0-.043.107c0 .083.065.15.148.15H16.3c2.67 0 3.636-.28 4.612-.802a5.442 5.442 0 0 0 2.263-2.267c.522-.978.8-1.948.8-4.623v-.998a.749.749 0 0 0-.22-.529l-1.769-1.774a.15.15 0 0 0-.106-.044zm-17.96 2.238a.15.15 0 0 0-.151.15v1.898a2.997 2.997 0 0 0 2.993 3.001h5.676c.2 0 .39-.08.53-.22l1.773-1.775a.146.146 0 0 0 .044-.104.15.15 0 0 0-.15-.15H7.51a1.48 1.48 0 0 1-.53-.098 1.49 1.49 0 0 1-.546-.347l-2.413-2.313a.147.147 0 0 0-.103-.042z"/></svg>
                    <span className="text-sm uppercase mt-4">Prismic</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                  <svg role="img" xmlns="http://www.w3.org/2000/svg" height={60} viewBox="0 0 24 24"><title>Directus icon</title><path fill="#d1d5db" d="M19.187 13.909a1.74 1.74 0 0 1-.286-.092.657.657 0 0 1-.203-.139c.056-.488 0-.912.047-1.392.184-1.862 1.355-1.272 2.406-1.577.655-.184 1.31-.562 1.475-1.336a13.528 13.528 0 0 0-2.397-2.204c-2.85-2.028-6.574-2.84-9.958-2.277a5.113 5.113 0 0 0 2.238 2.074s-.917 0-1.703-.587c-.23.092-.692.274-.913.384a5.094 5.094 0 0 0 6.63.37c-.01.017-.185.285-.397 1.4-.47 2.38-1.826 2.195-3.504 1.596-3.485-1.264-5.403-.093-7.145-2.49-.507.286-.82.82-.82 1.402 0 .599.331 1.106.81 1.383.262-.348.38-.446.836-.446-.706.4-.79.75-1.094 1.718-.368 1.171-.212 2.37-1.936 2.683-.913.046-.894.664-1.226 1.586-.415 1.199-.968 1.678-2.047 2.812.443.535.904.6 1.374.406.968-.406 1.715-1.66 2.415-2.471.784-.904 2.665-.517 4.085-1.402.977-.599 1.457-1.41.811-2.784a2.72 2.72 0 0 1 .701 1.66c1.641-.213 3.836 1.788 5.836 2.12a3.574 3.574 0 0 1-.488-.82c-.23-.554-.304-1.06-.258-1.503.184 1.097 1.29 2.507 3.07 2.637.452.036.95-.019 1.466-.176.618-.184 1.19-.424 1.872-.295.507.093.977.35 1.272.784.443.645 1.41.784 1.844-.009-.977-2.554-3.67-2.72-4.813-3.015z"/></svg>
                    <span className="text-sm uppercase mt-4">Directus</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                  <svg role="img" viewBox="0 0 24 24" height={60} xmlns="http://www.w3.org/2000/svg"><title>WordPress icon</title><path fill="#d1d5db" d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/></svg>
                    <span className="text-sm uppercase mt-4">Wordpress</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                  <svg viewBox="0 0 991 991" xmlns="http://www.w3.org/2000/svg" height={60}><g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)" fill="#d1d5db" stroke="none"><path d="M4830 10224 c-230 -19 -313 -28 -430 -45 -535 -77 -1020 -227 -1515
-468 -532 -260 -960 -565 -1375 -980 -404 -404 -711 -832 -965 -1346 -270
-547 -423 -1066 -502 -1705 -15 -119 -18 -221 -18 -565 0 -450 6 -531 61 -855
220 -1293 933 -2456 1987 -3242 675 -503 1477 -835 2314 -958 466 -68 1010
-68 1476 0 1423 208 2690 1003 3496 2195 454 671 741 1437 841 2248 17 139 20
222 20 617 0 395 -3 478 -20 617 -110 888 -446 1727 -977 2439 -287 384 -654
752 -1038 1038 -750 561 -1605 891 -2580 996 -98 11 -687 21 -775 14z m654
-1189 c473 -55 880 -217 1251 -498 102 -78 286 -256 383 -372 226 -269 407
-634 492 -990 68 -282 63 -173 70 -1865 l5 -1535 23 -57 c29 -71 104 -155 169
-190 154 -82 357 -54 477 65 73 73 106 156 121 300 16 168 135 360 269 436
147 84 347 90 501 17 138 -65 230 -156 277 -274 20 -50 23 -73 22 -197 -1
-230 -51 -423 -174 -670 -277 -560 -820 -874 -1390 -805 -387 47 -687 187
-935 435 -216 215 -348 466 -417 792 l-23 108 -5 1540 c-6 1515 -6 1541 -27
1630 -141 611 -616 1020 -1243 1070 -228 18 -539 -65 -757 -202 -264 -165
-454 -404 -556 -699 -54 -157 -71 -258 -72 -424 0 -564 365 -1064 908 -1245
137 -45 230 -63 389 -75 153 -11 209 -25 293 -75 140 -84 241 -222 264 -362 8
-48 11 -356 9 -1073 -3 -991 -3 -1006 -24 -1066 -58 -168 -225 -310 -413 -350
-98 -21 -1046 -20 -1146 1 -153 32 -296 141 -367 280 -40 79 -53 130 -67 262
-12 109 -40 172 -112 248 -153 161 -410 158 -565 -7 -68 -73 -101 -152 -112
-273 -11 -109 -37 -196 -78 -259 -80 -122 -174 -198 -293 -238 -64 -22 -79
-22 -595 -26 -372 -2 -551 0 -599 8 -153 26 -307 139 -381 279 -68 130 -66 88
-66 1192 0 628 4 1036 11 1105 55 568 303 1097 699 1494 312 311 724 543 1145
645 l70 17 31 116 c178 660 627 1215 1234 1525 272 138 553 223 870 261 155
19 280 19 434 1z m-75 -1860 c229 -54 380 -261 381 -520 0 -252 -151 -461
-375 -520 -74 -19 -223 -19 -294 0 -88 23 -161 64 -221 125 -227 231 -190 670
72 843 51 33 147 72 198 80 60 10 180 6 239 -8z"></path><path d="M2819 5973 c-151 -76 -261 -156 -374 -274 -179 -187 -285 -388 -351
-669 -15 -66 -18 -146 -21 -685 -2 -335 -3 -650 -1 -700 l3 -90 24 45 c105
198 306 414 507 542 303 194 731 269 1096 193 420 -89 762 -334 978 -702 23
-40 44 -73 46 -73 2 0 4 172 4 383 l0 383 -94 26 c-557 157 -1038 507 -1364
993 -92 137 -218 393 -272 552 -25 73 -50 133 -56 133 -6 0 -62 -26 -125 -57z"></path></g></svg>
                    <span className="text-sm uppercase mt-4">WPGraphQL</span>
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
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <SiHtml5 size={60} color="#ff3f3f"/>
                    <span className="text-sm uppercase mt-4">HTML</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <SiCss3 size={60} color="#1f99f7"/>
                    <span className="text-sm uppercase mt-4">CSS</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <SiJavascript size={60} color="#f7cc1f"/>
                    <span className="text-sm uppercase mt-4">Javascript</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <SiTypescript size={60} color="#4674e4"/>
                    <span className="text-sm uppercase mt-4">Typescript</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <SiReact size={60} color="#2dfff9"/>
                    <span className="text-sm uppercase mt-4">React</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <SiGraphql size={60} color="#ff2dd8"/>
                    <span className="text-sm uppercase mt-4">GraphQL</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <SiTailwindcss size={60} color="#2dffe2"/>
                    <span className="text-sm uppercase mt-4">Tailwindcss</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <SiNextDotJs size={60} color="#d1d5db"/>
                    <span className="text-sm uppercase mt-4">Next.js</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <SiGatsby size={60} color="#d1d5db"/>
                    <span className="text-sm uppercase mt-4">Gatsby.js</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                  <svg role="img" viewBox="0 0 24 24" height={60} xmlns="http://www.w3.org/2000/svg"><title>RedwoodJS icon</title><path fill="#d1d5db" d="M6.989 3.47l4.66 3.181c.105.07.228.108.354.111a.634.634 0 0 0 .354-.111l4.664-3.192a.637.637 0 0 0-.089-1.087L12.272.065a.64.64 0 0 0-.56 0L7.067 2.372a.636.636 0 0 0-.078 1.098zm6.597 4.179c0 .211.104.408.276.528l3.736 2.553a.628.628 0 0 0 .776-.05l3.134-2.803a.637.637 0 0 0-.028-.973l-2.992-2.393a.635.635 0 0 0-.751-.029l-3.874 2.65a.644.644 0 0 0-.277.517zm-9.291 3.474a.64.64 0 0 1 .209.538.625.625 0 0 1-.315.485l-2.231 1.337a.63.63 0 0 1-.718-.049.64.64 0 0 1-.21-.693l.825-2.596a.63.63 0 0 1 1.023-.281l1.417 1.259zm12.1.271l-4.033-2.76a.634.634 0 0 0-.708 0l-4.033 2.76a.646.646 0 0 0-.276.485.664.664 0 0 0 .212.521l4.03 3.605a.635.635 0 0 0 .842 0l4.03-3.605a.647.647 0 0 0-.064-1.006zm-10.758-.713l-3.13-2.803a.648.648 0 0 1-.213-.503.626.626 0 0 1 .237-.481l2.992-2.407a.641.641 0 0 1 .754-.029l3.87 2.65a.639.639 0 0 1 0 1.07l-3.732 2.553a.633.633 0 0 1-.778-.05zm16.073 4.026l-3.187-1.908a.627.627 0 0 0-.744.071l-3.895 3.477a.644.644 0 0 0-.204.587.636.636 0 0 0 .388.483l5.404 2.19a.634.634 0 0 0 .815-.332l1.675-3.752a.64.64 0 0 0-.252-.816zm.442-4.561l.825 2.596h-.007a.635.635 0 0 1-.927.742l-2.234-1.337a.623.623 0 0 1-.305-.485.631.631 0 0 1 .209-.538l1.416-1.262a.63.63 0 0 1 1.023.284zm-11.82 6.786a.637.637 0 0 0-.202-.585L6.235 12.87a.627.627 0 0 0-.744-.071l-3.187 1.908a.648.648 0 0 0-.255.813l1.678 3.752a.632.632 0 0 0 .814.332l5.4-2.19a.637.637 0 0 0 .391-.482zm1.912 1.07l4.334 1.755c.212.091.358.29.382.521a.635.635 0 0 1-.269.596l-4.338 3.013A.625.625 0 0 1 12 24a.64.64 0 0 1-.354-.114l-4.334-3.013a.635.635 0 0 1 .124-1.117l4.334-1.755a.642.642 0 0 1 .474.001z"/></svg>
                    <span className="text-sm uppercase mt-4">Redwood.js</span>
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
              <ul className="flex mt-2 justify-center flex-wrap -mx-3 -my-3">
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <svg role="img" viewBox="0 0 24 24" height={60} xmlns="http://www.w3.org/2000/svg"><title>Vercel icon</title><path fill="#d1d5db" d="M24 22.525H0l12-21.05 12 21.05z"/></svg>
                    <span className="text-sm uppercase mt-4">Vercel</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <svg role="img" viewBox="0 0 24 24" height={60} xmlns="http://www.w3.org/2000/svg"><title>Netlify icon</title><path fill="#d1d5db" d="M17.3877 8.3286l-.0088-.0037c-.005-.002-.01-.0038-.0144-.0082a.0689.0689 0 0 1-.0176-.0582l.4839-2.9581 2.269 2.2696L17.74 8.574a.052.052 0 0 1-.0206.0037H17.71a.0647.0647 0 0 1-.0126-.0106 1.074 1.074 0 0 0-.3097-.2385zm3.291-.1802l2.4262 2.426c.5039.5045.7561.7562.8481 1.0479.0138.0431.025.0863.0338.1308l-5.798-2.4555a.4557.4557 0 0 0-.0093-.0038c-.0232-.0094-.0501-.02-.0501-.0439 0-.0237.0275-.035.0507-.0444l.0075-.0031zm3.2092 4.3833c-.1252.2354-.3693.4795-.7824.8932l-2.7353 2.7347-3.5377-.7367-.0188-.0038c-.0313-.005-.0645-.0107-.0645-.0388a1.0678 1.0678 0 0 0-.41-.7467c-.0144-.0144-.0106-.037-.0063-.0576 0-.003 0-.0063.0013-.0088l.6654-4.0848.0025-.0138c.0038-.0313.0094-.0676.0376-.0676a1.0829 1.0829 0 0 0 .726-.4162c.0056-.0063.0094-.0131.017-.0169.02-.0094.0437 0 .0644.0088l6.0402 2.555zm-4.1467 4.257l-4.498 4.4979.77-4.732.0012-.0063a.083.083 0 0 1 .0038-.0182c.0063-.015.0226-.0213.0382-.0275l.0075-.0031a1.158 1.158 0 0 0 .435-.3236c.015-.0176.0332-.0345.0564-.0376a.0563.0563 0 0 1 .0181 0l3.1672.651zm-5.45 5.4499l-.507.507-5.6052-8.1007a.2654.2654 0 0 0-.0062-.0088c-.0088-.012-.0182-.0238-.0163-.0376.0006-.01.0069-.0188.0138-.0263l.0062-.0081c.017-.025.0313-.05.047-.077l.0125-.0219.0019-.0019c.0087-.015.0169-.0294.0319-.0376.0131-.0063.0313-.0038.0457-.0006l6.2098 1.2807a.1027.1027 0 0 1 .0476.0206c.008.0081.01.017.0119.027a1.0998 1.0998 0 0 0 .6434.7354c.0175.0088.01.0282.002.0488a.149.149 0 0 0-.0095.0282c-.0782.4757-.7492 4.568-.9295 5.6728zm-1.059 1.0584c-.3737.37-.594.5659-.8432.6447a1.2519 1.2519 0 0 1-.7549 0c-.2916-.0926-.5439-.3442-1.0478-.8487l-5.629-5.629 1.4704-2.2802a.0938.0938 0 0 1 .025-.0294c.0157-.0113.0382-.0063.057 0a1.5235 1.5235 0 0 0 1.0253-.052c.0169-.0063.0338-.0106.0469.0013a.119.119 0 0 1 .0175.02l5.6327 8.174zm-8.8175-6.3756L3.1234 15.63l2.55-1.0879a.0526.0526 0 0 1 .0207-.0044c.0213 0 .0338.0213.045.0407a1.8214 1.8214 0 0 0 .0814.1152l.0082.01c.0075.0106.0025.0213-.005.0313l-1.4084 2.1864zm-1.8628-1.8628L.9183 13.4249c-.278-.2779-.4795-.4794-.6197-.6528l4.9674 1.0303a.5258.5258 0 0 0 .0187.003c.0307.005.0645.0107.0645.0395 0 .0313-.037.0457-.0682.0576l-.0144.0063zM.0132 11.932a1.2519 1.2519 0 0 1 .0563-.3098c.0927-.2917.3443-.5434.8488-1.0478l2.0906-2.0906a1361.7196 1361.7196 0 0 0 2.8955 4.1855c.017.0226.0357.0476.0163.0664-.0914.1008-.1828.211-.2473.3305a.1001.1001 0 0 1-.0313.0388c-.008.005-.0169.003-.0262.0013h-.0013l-5.6014-1.175zm3.5553-4.0078l2.811-2.811c.2641.1157 1.2256.522 2.0856.885.651.2754 1.2443.5258 1.4308.6071.0188.0076.0357.015.0439.0338.005.0113.0025.0257 0 .0376a1.2537 1.2537 0 0 0 .3273 1.1442c.0188.0188 0 .0457-.0163.0689l-.0088.0131-2.8542 4.421c-.0075.0124-.0144.023-.0269.0312-.015.0094-.0363.005-.0538.0006a1.4234 1.4234 0 0 0-.34-.0463c-.1026 0-.214.0188-.3266.0395h-.0007c-.0125.0019-.0238.0044-.0338-.0031a.1314.1314 0 0 1-.0281-.032zm3.3787-3.3788l3.6391-3.639c.504-.5039.7562-.7561 1.0478-.8481a1.2519 1.2519 0 0 1 .755 0c.2916.092.5438.3442 1.0477.848l.7887.7888-2.5882 4.0084a.097.097 0 0 1-.0257.03c-.0156.0107-.0375.0063-.0563 0a1.3126 1.3126 0 0 0-1.2018.2316c-.0169.0176-.042.0075-.0632-.0019-.338-.147-2.967-1.258-3.343-1.4177zm7.8278-2.3009l2.3898 2.3898-.5758 3.5665v.0094a.0845.0845 0 0 1-.005.0238c-.0063.0125-.0188.015-.0313.0188a1.1454 1.1454 0 0 0-.343.1709.0964.0964 0 0 0-.0125.0106c-.007.0075-.0138.0144-.025.0157a.0714.0714 0 0 1-.027-.0044l-3.6416-1.5473-.007-.0031c-.0231-.0094-.0506-.0207-.0506-.0445a1.3758 1.3758 0 0 0-.194-.5727c-.0176-.0288-.037-.0588-.022-.0883zm-2.461 5.3868l3.4138 1.446c.0188.0087.0394.0168.0476.0362a.0663.0663 0 0 1 0 .0357.848.848 0 0 0-.0188.1646v.0958c0 .0238-.0244.0338-.047.0432l-.0069.0025c-.5408.231-7.5924 3.238-7.603 3.238-.0107 0-.022 0-.0326-.0107-.0188-.0188 0-.0451.0169-.0689a.4757.4757 0 0 0 .0087-.0125l2.8054-4.344.005-.0074c.0163-.0263.035-.0557.0651-.0557l.0282.0043c.0638.0088.1202.017.1771.017.4257 0 .82-.2072 1.0579-.5615a.1001.1001 0 0 1 .0212-.025c.017-.0126.042-.0063.0614.0024zm-3.9095 5.7492l7.6863-3.278s.0113 0 .022.0106c.0419.042.0776.0701.112.0964l.0169.0107c.0156.0088.0313.0188.0325.035 0 .0063 0 .01-.0013.0157l-.6584 4.0447-.0025.0163c-.0044.0313-.0088.067-.0382.067a1.0822 1.0822 0 0 0-.8594.5301l-.0031.005c-.0088.0144-.017.0282-.0313.0357-.0131.0063-.03.0038-.0438.0006L8.5064 13.706c-.0063-.0013-.0952-.3249-.102-.3255z"/></svg>
                    <span className="text-sm uppercase mt-4">Netlify</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                  <svg role="img" viewBox="0 0 24 24" height={60} xmlns="http://www.w3.org/2000/svg"><title>Cloudflare icon</title><path fill="#d1d5db" d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727"/></svg>
                    <span className="text-sm uppercase mt-4">Cloudflare Pages</span>
                  </div>
                </li>
                <li className="mt-4 px-3 py-3">
                  <div className="flex flex-col items-center">
                    <BiServer size={60} color="#d1d5db"/>
                    <span className="text-sm uppercase mt-4">Shared Hosting</span>
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

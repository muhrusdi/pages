import React from "react"
import Layout from "containers/layout"
import SpecItem from "components/spec-item"
import { HomeHeaderStyled, mocks } from "components/utils"
import { SiFacebook, SiTwitter, SiInstagram, SiLinkedin, SiGithub, SiUplabs } from "react-icons/si"
import { BsArrowDown } from "react-icons/bs"
import cv from "../utils/cv-muhrusdi.pdf"

const Home = () => {
  return (
    <Layout>
      <div>
        <HomeHeaderStyled>
          <div className="text-center flex flex-col">
            <div>
              <img style={{height: 200}} src="https://res.cloudinary.com/muhrusdi/image/upload/v1611123004/mhmmr-black-transparent.png" alt=""/>
            </div>
            <div>
              <h2 className="mt-1" style={{textIndent: 22}}>MHMMR</h2>
            </div>
          </div>
        </HomeHeaderStyled>
        <div className="py-16 mt-8">
          <div>
            <div className="block sm:flex items-center">
              <div>
                <img className="object-cover" style={{height: 200, borderRadius: "2.5rem"}} src="https://res.cloudinary.com/muhrusdi/image/upload/v1610255559/thumb-612467.png" alt=""/>
              </div>
              <div className="sm:pl-10 mt-14 sm:mt-0">
                <h2 className="text-4xl sm:text-5xl font-black leading-tight">Muhammad Rusdi</h2>
                <p className="text-2xl smtext-3xl mt-4 text-gray-400">Front End Engineer</p>
                <div className="flex mt-10 -mx-4 flex-wrap items-center">
                  <a href="https://www.facebook.com/mhmrofficial/" rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <SiFacebook size={25} color="#fff"/>
                  </a>
                  <a href="https://twitter.com/mhmrus" rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <SiTwitter size={25} color="#fff"/>
                  </a>
                  <a href="https://www.instagram.com/mhmrofficial/" rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <SiInstagram size={25} color="#fff"/>
                  </a>
                  <a href="https://www.linkedin.com/in/muhrusdi/" rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <SiLinkedin size={25} color="#fff"/>
                  </a>
                  <a href="https://github.com/muhrusdi" rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <SiGithub size={25} color="#fff"/>
                  </a>
                  <a href="https://www.uplabs.com/muhrusdi" rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <SiUplabs size={25} color="#fff"/>
                  </a>
                  <a href={cv} rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <div className="flex border-2 border-blue-500 rounded-full py-1 px-4 text-sm items-center">
                      <span>CV</span>
                      <BsArrowDown size={18} color="#fff" style={{marginLeft: 8}}/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="divide-y border-t border-b border-gray-600">
              {
                mocks.map(item => (
                  <SpecItem data={item}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
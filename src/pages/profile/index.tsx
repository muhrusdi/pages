import React from "react"
import Layout from "containers/layout"
// import { Link } from "gatsby"
import styled from "styled-components"
import SpecItem from "components/spec-item"
import { mocks } from "components/utils"
// import LatestBlog from "components/blog/lastest"
import { SiFacebook, SiTwitter, SiInstagram, SiLinkedin, SiGithub, SiUplabs } from "react-icons/si"
import { StaticImage } from "gatsby-plugin-image"
import { BsArrowDown } from "react-icons/bs"
import cv from "../../utils/cv-muhrusdi-2022.pdf"

const Networks = styled.div`
  svg {
    height: 20px;
    width: 20px;
    @media (min-width: 640px) {
      height: 25px;
      width: 25px;
    }
  }
  .cv {
    svg {
      height: 18px;
      width: 18px;
    }
  }
`

const Home: React.FC = () => {
  return (
    <Layout>
      <div>
        <div className="py-8">
          <div>
            <div className="flex flex-col sm:flex-row items-center">
              <div>
                <StaticImage className="object-cover rounded-full sm:rounded-5xl" style={{height: 200, width: 200}} src="https://res.cloudinary.com/muhrusdi/image/upload/v1616335341/thumb-612467.png" alt="muhrusdi"/>
              </div>
              <div className="sm:pl-10 mt-14 sm:mt-0 text-center sm:text-left">
                <h2 className="text-3xl sm:text-5xl font-black leading-tight">Muhammad Rusdi</h2>
                <p className="text-xl sm:text-3xl mt-2 sm:mt-4 text-gray-400">Front End Engineer</p>
                <Networks className="flex mt-10 -mx-4 flex-wrap items-center justify-center sm:justify-start">
                  <a href="https://www.facebook.com/mhmrofficial/" rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <SiFacebook color="#fff"/>
                  </a>
                  <a href="https://twitter.com/mhmrus" rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <SiTwitter color="#fff"/>
                  </a>
                  <a href="https://www.instagram.com/mhmrofficial/" rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <SiInstagram color="#fff"/>
                  </a>
                  <a href="https://www.linkedin.com/in/muhrusdi/" rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <SiLinkedin color="#fff"/>
                  </a>
                  <a href="https://github.com/muhrusdi" rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <SiGithub color="#fff"/>
                  </a>
                  <a href="https://www.uplabs.com/muhrusdi" rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <SiUplabs color="#fff"/>
                  </a>
                  <a href={cv} rel="noreferrer" target="_blank" className="block px-4 mb-8 sm:mb-0">
                    <div className=" cv flex border-2 border-blue-500 rounded-full py-1 px-4 text-sm items-center">
                      <span>CV</span>
                      <BsArrowDown color="#fff" style={{marginLeft: 8}}/>
                    </div>
                  </a>
                </Networks>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="divide-y border-t border-b border-gray-600">
              {
                mocks.map((item, i) => (
                  <SpecItem key={i} data={item}/>
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
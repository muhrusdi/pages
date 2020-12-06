import React from "react"
import Layout from "containers/layout"
import SpecItem from "components/spec-item"
import { HomeHeaderStyled, mocks } from "components/utils"
import { SiFacebook, SiTwitter, SiInstagram, SiLinkedin, SiGithub, SiUplabs } from "react-icons/si"

const Home = () => {
  return (
    <Layout>
      <div>
        <HomeHeaderStyled>
          <div className="text-center">
            <img style={{height: 140}} src="https://res.cloudinary.com/muhrusdi/image/upload/v1607237336/mhmmr-logo-white.png" alt=""/>
            <h2 className="mt-11">MHMMR</h2>
          </div>
        </HomeHeaderStyled>
        <div className="py-16 mt-8">
          <div>
            <div className="flex items-center">
              <div>
                <img className="object-cover" style={{height: 200, borderRadius: "2.5rem"}} src="https://res.cloudinary.com/muhrusdi/image/upload/v1607237923/muhrusdi.png" alt=""/>
              </div>
              <div className="pl-10">
                <h2 className="text-5xl font-black">Muhammad Rusdi</h2>
                <p className="text-3xl mt-4 text-gray-400">Front End Engineer</p>
                <div className="flex mt-10 -mx-4">
                  <a href="#" className="block px-4">
                    <SiFacebook size={25} color="#fff"/>
                  </a>
                  <a href="#" className="block px-4">
                    <SiTwitter size={25} color="#fff"/>
                  </a>
                  <a href="#" className="block px-4">
                    <SiInstagram size={25} color="#fff"/>
                  </a>
                  <a href="#" className="block px-4">
                    <SiLinkedin size={25} color="#fff"/>
                  </a>
                  <a href="#" className="block px-4">
                    <SiGithub size={25} color="#fff"/>
                  </a>
                  <a href="#" className="block px-4">
                    <SiUplabs size={25} color="#fff"/>
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
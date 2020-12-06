import React from "react"
import Layout from "containers/layout"
import SpecItem from "components/spec-item"
import { HomeHeaderStyled } from "components/utils"
import { mocks } from "../utils/mocks"

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
        <div className="py-16">
          <div className="flex justify-center py-8">
            <img className="rounded-full object-cover" style={{height: 200}} src="https://res.cloudinary.com/muhrusdi/image/upload/v1607237923/muhrusdi.png" alt=""/>
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
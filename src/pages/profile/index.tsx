import React, { useState, useCallback } from "react"
import { Layout } from "@/containers/layout"
// import { Link } from "gatsby"
import styled from "styled-components"
import SpecItem from "@/components/spec-item"
import { mocks } from "@/components/utils"
// import LatestBlog from "components/blog/lastest"
import {
  SiTwitter,
  SiInstagram,
  SiLinkedin,
  SiGithub,
  SiUplabs,
} from "react-icons/si"
import { StaticImage } from "gatsby-plugin-image"
import { BsArrowDown } from "react-icons/bs"
import cv from "../../utils/cv-muhrusdi-2022.pdf"
import ProfileCode from "@/components/profile-code"

const Home: React.FC = () => {
  const [preview, setPreview] = useState("preview")

  const handlePreview = useCallback(v => setPreview(v), [])

  const isPreview = preview === "preview"

  return (
    <Layout>
      <div>
        <div>
          <GridStyled className="grid">
            <div className="row-span-full col-start-1 col-end-5 row-start-2 row-end-5 py-16 flex">
              <div className="bg-gradient-to-br from-green-400 to-green-500 w-full flex-none rounded-3xl"></div>
              <div
                className="w-full flex-none rounded-3xl transform shadow-lg bg-gradient-to-br from-purple-600 to-purple-900 -rotate-2"
                style={{ marginLeft: "-100%" }}
              ></div>
            </div>
            <div
              className="relative col-end-2 col-start-4 col-span-full row-end-4 self-center"
              style={{ height: "27.25rem" }}
            >
              <ProfileCode isPreview={isPreview} />
            </div>
          </GridStyled>
          <div className="sm:hidden">
            <div className="flex justify-center text-sm text-gray-400">
              <div>
                <button
                  onClick={() => handlePreview("preview")}
                  className={`px-4 py-1 focus:outline-none border border-blueGray-500 rounded-tl-full rounded-bl-full uppercase font-semibold ${
                    isPreview ? "bg-blueGray-800" : null
                  }`}
                >
                  Preview
                </button>
              </div>
              <div>
                <button
                  onClick={() => handlePreview("editor")}
                  className={`px-4 py-1 focus:outline-none border border-l-0 border-blueGray-500 rounded-tr-full rounded-br-full uppercase font-semibold ${
                    !isPreview ? "bg-blueGray-800" : null
                  }`}
                >
                  Editor
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="divide-y border-t border-b border-gray-600">
            {mocks.map((item, i) => (
              <SpecItem key={i} data={item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home

const GridStyled = styled.div`
  grid-template-columns: 2rem 1fr 52.5% 2rem;
  grid-template-rows: auto 2.25rem auto 2.25rem;
}
`

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

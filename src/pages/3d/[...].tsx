import React from "react"
import { Router } from "@reach/router"
import ThreeD from "@/templates/3d"
import DetailThreeD from "@/templates/3d/detail"
import { Layout } from "@/containers/layout"

const ThreeDPage: React.FC = () => {
  return (
    <Layout>
      <Router basepath="/3d">
        <ThreeD path="/" />
        <DetailThreeD path="/:slug" />
      </Router>
    </Layout>
  )
}

export default ThreeDPage

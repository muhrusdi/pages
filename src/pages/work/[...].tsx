import React from "react"
import { Router } from "@reach/router"
import Detail from "components/work/detail"
import Work from "templates/work"
import Layout from "containers/layout"

const DetailWork: React.FC = () => {
  return (
    <Layout>
      <Router basepath="/work">
        <Work path="/"/>
        <Detail path="/:slug"/>
      </Router>
    </Layout>
  )
}

export default DetailWork
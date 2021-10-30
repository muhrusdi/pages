import React from "react"
import { Router } from "@reach/router"
import Detail from "templates/twitter/detail"
import TwitterPage from "templates/twitter"
import Layout from "containers/layout"
import SEO from "components/seo"

const Twitter: React.FC = () => {
  return (
    <Layout type="fluid">
      <SEO title="Work - Muhammad Rusdi"/>
      <Router basepath="/twitter">
        <TwitterPage path="/"/>
        <Detail path="/:slug"/>
      </Router>
    </Layout>
  )
}

export default Twitter
import React from "react"
import { Router } from "@reach/router"
import Detail from "@/components/work/detail"
import Work from "@/templates/work"
import { Layout } from "@/containers/layout"
import SEO from "@/components/seo"

const DetailWork: React.FC = () => {
  return (
    <Layout>
      <SEO title="Work - Muhammad Rusdi" />
      <Router basepath="/work">
        <Work path="/" />
        <Detail path="/:slug" />
      </Router>
    </Layout>
  )
}

export default DetailWork

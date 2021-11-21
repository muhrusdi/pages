import React from "react"
import { Router } from "@reach/router"
import MurottalRoot from "@/templates/murottal"
import { Layout } from "@/containers/layout"

const Murottal: React.FC = () => {
  return (
    <Layout>
      <Router basepath="/murottal">
        <MurottalRoot path="/"/>
      </Router>
    </Layout>
  )
}

export default Murottal
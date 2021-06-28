import React from "react"
import { Router } from "@reach/router"
import Detail from "components/work/detail"
import Work from "templates/work"

const DetailWork: React.FC = () => {
  return (
    <Router basepath="/work">
      <Work path="/"/>
      <Detail path="/:slug"/>
    </Router>
  )
}

export default DetailWork
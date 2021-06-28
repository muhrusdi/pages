import React from "react"
import { Router } from "@reach/router"
import MurottalRoot from "templates/murottal"

const Murottal: React.FC = () => {
  return (
    <Router basepath="/murottal">
      <MurottalRoot path="/"/>
    </Router>
  )
}

export default Murottal
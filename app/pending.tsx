"use client"

import { useContext } from "react"
import { StoreContext } from "./providers"

const Pending = () => {
  const { isPending } = useContext(StoreContext)
  return <div>{isPending ? "Loading..." : null}</div>
}

export default Pending

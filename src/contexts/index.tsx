import React, { useState } from "react"
import MurottalPlayer from "@/components/murottal/player"

export const Context = React.createContext(null)

const ContextProvider: React.FC = ({ children }) => {
  const [murottal, setMurottal] = useState([])

  const handleSetMurottal = data => {
    setMurottal(data)
  }
  return (
    <Context.Provider
      value={{
        murottal,
        handleSetMurottal,
      }}
    >
      <div>
        {children}
        {murottal.length ? <MurottalPlayer data={murottal} /> : null}
      </div>
    </Context.Provider>
  )
}

export default ContextProvider

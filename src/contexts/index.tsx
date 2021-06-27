import React, { useState } from "react"

export const Context = React.createContext(null)

const ContextProvider: React.FC = ({children}) => {
  const [murottal, setMurottal] = useState([])

  const handleSetMurottal = (data) => {
    setMurottal(data)
  }
  return (
    <Context.Provider value={{
      murottal,
      handleSetMurottal
    }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
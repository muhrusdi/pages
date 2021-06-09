import React from "react"
import Newsletter from "../newsletter"


const Footer: React.FC = () => {
  const date = new Date()
  return (
    <footer className="mt-36">
      <Newsletter/>
      <div className="text-center py-16">
        <span>© {date.getFullYear()} Made with <span className="text-red-500">♥</span> - Muhammad Rusdi</span>
      </div>
    </footer>
  )
}

export default Footer
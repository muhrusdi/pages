import React from "react"
import { SiGatsby, SiNextDotJs, SiReact, SiStyledComponents, SiTailwindcss, SiTypescript } from "react-icons/si"

const icons = {
  "Javascript": {
    name: "Javascript",
    icon: <SiTypescript color="#f7cc1f"/>
  },
  "Typescript": {
    name: "Tavascript",
    icon: <SiTypescript color="#4674e4"/>
  },
  "React": {
    name: "React",
    icon: <SiReact color="#2dfff9"/>
  },
  "Nextjs": {
    name: "Nextjs",
    icon: <SiNextDotJs color="#d1d5db"/>
  },
  "Gatsbyjs": {
    name: "Gatsbyjs",
    icon: <SiGatsby color="#660bb3"/>
  },
  "Styled Components": {
    name: "Styled Components",
    icon: <SiStyledComponents/>
  },
  "Tailwindcss": {
    name: "Tailwindcss",
    icon: <SiTailwindcss color="#2dffe2"/>
  },
}

export default icons
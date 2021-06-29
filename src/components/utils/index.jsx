import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { Content, Arrow, Trigger, Root } from "@radix-ui/react-tooltip"
import ExperiencesItem from "../spec-item/experiences"
import StacksItem from "../spec-item/stacks"
import ProfileItem from "../spec-item/profile"
import SkillsItem from "../spec-item/skills"
import EducationsItem from "../spec-item/educations"

export const ArticleStyled = styled.article`
  color: #acb5c3;
  a {
    color: #6f66ff;
  }
  ul {
    li {
      strong {
        color: white;
      }
    }
  }
  p {
    strong {
      color: inherit;
    }
    code {
      color: #6f66ff;
    }
    img {
      margin-left: auto;
      margin-right: auto;
    }
  }
  pre, .code-play {
    margin-left: 0;
    margin-right: 0;
    @media (min-width: 640px) {
      margin-left: -32px;
      margin-right: -32px;
    }
  }
`


export const TechIcon = styled.div`
  margin: 0 -4px;
  & > div {
    padding: 0 4px;
  }
`

export const TooltipContentStyled = styled(Content)``
export const TooltipArrowStyled = styled(Arrow)`
  fill: rgba(17, 24, 39, var(--tw-bg-opacity));
`

const key = keyframes`
  from {
      transform: translate3d(0,0,0);
  }

  to {
      transform: translate3d(-50%,0,0);
  }
`

export const HomeHeaderStyled = styled.div`
  & > div {
    display: inline-block;
    white-space: nowrap;
    animation: ${key} 80s linear infinite;
  }
  h2 {
      font-size: 15em;
    }
  p {
    font-size: 2em;
  }
  .arrow {
    svg {
      position: absolute;
      top: 37px;
      left: 0;
    }
  }
  @media (min-width: 640px) {
    h2 {
      font-size: 8em;
    }
    p {
      font-size: 3em;
    }
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 15em;
    }
    p {
      font-size: 4em;
    }
  }
`;

export const BlogItemFooter = styled.div`
  a {
    &:hover {
      color: rgba(156, 163, 175, var(--tw-text-opacity));
      & + span {
        color: white;
      }
    }
  }
`

export const mocks = [
  {
    title: "Profile",
    description: <ProfileItem/>
  },
  {
    title: "Education",
    description: <EducationsItem/>
  },
  {
    title: "Career",
    description: <ExperiencesItem/>
  },
  {
    title: "Skill",
    description: <SkillsItem/>
  },
  {
    title: "Stack",
    description: <StacksItem/>
  },
  {
    title: "Work",
    description: (
      <div>
        <ul className="divide-y border-gray-600">
          <li className="border-gray-600 my-10">
            <div>
              <h3 className="text-3xl font-bold mt-2">Web Profile Docotel Teknologi Celebes</h3>
              <a href="https://dtc.co.id" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">dtc.co.id</span>
              </a>
              <p className="mt-4 text-gray-400">DTC is a software house company in Makassar</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Web Profile Mahapatih</h3>
              <a href="https://mahapatih.id" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">mahapatih.id</span>
              </a>
              <p className="mt-4 text-gray-400">Mahapatih is a As a lead-edges security
technology company</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Awwwara</h3>
              <a href="https://awwwara.com" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">awwwara.com</span>
              </a>
              <p className="mt-4 text-gray-400">Awwwara is a news media</p>
            </div>
          </li>
        </ul>
        <div>
          <Link to="/work" className="inline-block py-1 px-4 text-sm uppercase font-medium bg-indigo-600 rounded-full">Show All</Link>
        </div>
      </div>
    )
  },
]

export const ViewAll = ({link}) => (
  <div className="flex justify-center mt-10 uppercase text-sm">
    <Link to={link} className="text-blueGray-400 hover:text-blueGray-300 font-medium transition-all">View All</Link>
  </div>
)

export const TooltipIcon = ({icon, text}) => (
  <Root>
    <Trigger aria-label={text}>
      {icon}
    </Trigger>
    <TooltipContentStyled side="top" className="bg-gray-900 text-xs py-1 px-2 rounded-md">
      {text}
      <TooltipArrowStyled/>
    </TooltipContentStyled>
  </Root>
)
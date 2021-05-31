import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import ExperiencesItem from "../spec-item/experiences"
import StacksItem from "../spec-item/stacks"
import ProfileItem from "../spec-item/profile"
import SkillsItem from "../spec-item/skills"
import EducationsItem from "../spec-item/educations"

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
    title: "Experiences",
    description: <ExperiencesItem/>
  },
  {
    title: "Skills",
    description: <SkillsItem/>
  },
  {
    title: "Stacks",
    description: <StacksItem/>
  },
  {
    title: "Works",
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
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Web Profile DTC Academy</h3>
              <a href="https://dtc-academy.netlify.app" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">dtcacademy.co.id</span>
              </a>
              <p className="mt-4 text-gray-400">DTC Academy is a Technology and Design Academy.</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Eproc Indonesia</h3>
              <a href="https://eproc.id" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">eproc.id</span>
              </a>
              <p className="mt-4 text-gray-400">Eproc Indonesia is an application for find all tender in Indonesia. I worked on the frontend.</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Real Travel Finance</h3>
              <a href="https://realtravelfinance.com" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">realtravelfinance.com</span>
              </a>
              <p className="mt-4 text-gray-400">Real Travel Finance is a finance app for tours & travel company</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">E-Survey</h3>
              <a href="https://assipauang.opmksr.com" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">assipauang.opmksr.com</span>
              </a>
              <p className="mt-4 text-gray-400">E-Survey is a society satisfaction survey application.</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Modana</h3>
              <a href="https://modana.netlify.app/" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">modana.id</span>
              </a>
              <p className="mt-4 text-gray-400">Human Resource Management Systems, Payroll, Virtual Accounts, Loans. I worked on the dashboard frontend and landing page.</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Web Profile DM-PTSP Kota Makassar</h3>
              <a href="https://dpmptsp.makassar.go.id" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">dpmptsp.makassar.go.id</span>
              </a>
              <p className="mt-4 text-gray-400">Web profile for Online Licensing Application</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Reus Design</h3>
              <a href="https://reus-design.netlify.app" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">reus.design</span>
              </a>
              <p className="mt-4 text-gray-400">Design System for my projects</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Web Profile Masar</h3>
              <a href="https://masar.netlify.app/" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">masar.co.id</span>
              </a>
              <p className="mt-4 text-gray-400">Solusi manajemen pasar tradisional yang dikemas dalam konsep ERP (Enterprise Resource Planning), sehingga integrasi bisnis proses dilingkungan pasar tradisional lebih mudah dilakukan serta integritas data lebih terjamin.</p>
            </div>
          </li>
          <li className="border-gray-600">
            <div className="my-10">
              <h3 className="text-3xl font-bold mt-2">Web Profile Markir</h3>
              <a href="https://markir.netlify.app/" target="_blank" rel="noreferrer">
                <span className="block mt-2 font-semibold text-gray-400 text-2xl text-blue-500">markir.co.id</span>
              </a>
              <p className="mt-4 text-gray-400">Markir adalah sistem manajemen tempat parkir yang mengutamakan transparansi, optimalisasi dan efisiensi. Markir berdiri di antara parkir off-street dan on-street, harapannya Markir dapat mengsinergikan keduanya untuk memberikan kenyamanan bagi semua.</p>
            </div>
          </li>
        </ul>
      </div>
    )
  },
]

export const ViewAll = ({link}) => (
  <div className="flex justify-center mt-10 uppercase text-sm">
    <Link to={link} className="text-blueGray-400 hover:text-blueGray-300 font-medium transition-all">View All</Link>
  </div>
)
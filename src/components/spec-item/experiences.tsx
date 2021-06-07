import React from "react"
import { EntityPositionGroup, CompanyLogo, EntityCompanyGroup } from "./styled"

const ExperiencesItem: React.FC = () => (
  <div>
    <EntityCompanyGroup>
    <li>
        <div>
          <div className="flex items-center">
            <CompanyLogo className="mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                <path fill="rgba(99, 102, 241, var(--tw-bg-opacity))" d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              </svg>
            </CompanyLogo>
            <div>
              <h4 className="leading-tight font-bold text-xl">Freelance</h4>
              {/* <span className="text-blueGray-500">Currently</span> */}
            </div>
          </div>
          <EntityPositionGroup>
            <li>
              <div className="leading-relaxed">
                  <h5 className="leading-normal sm:leading-loose">Front End Engineer</h5>
                  <p className="text-blueGray-500 mt-3 sm:mt-0">Aprl 2021 - Currently</p>
                  <p className="text-blueGray-500 mt-3 sm:mt-0">Makassar, South Sulawesi, Indonesia</p>
              </div>
            </li>
          </EntityPositionGroup>
        </div>
      </li>
      <li>
        <div>
          <div className="flex items-center">
            <CompanyLogo className="mr-6">
              <img src="https://res.cloudinary.com/muhrusdi/image/upload/v1618838821/template.png" alt=""/>
            </CompanyLogo>
            <div>
              <h4 className="leading-tight font-bold text-xl">PT. Kirim Email Indonesia</h4>
              <span className="text-blueGray-500">4 mos</span>
            </div>
          </div>
          <EntityPositionGroup>
            <li>
              <div className="leading-relaxed">
                  <h5 className="leading-normal sm:leading-loose">Front End Engineer <span className="text-blueGray-500">Remote</span></h5>
                  <p className="text-blueGray-500 mt-3 sm:mt-0">Dec 2020 - Aprl 2021 <span className="text-indigo-500">4 mos</span></p>
              </div>
            </li>
          </EntityPositionGroup>
        </div>
      </li>
      <li>
        <div>
          <div className="flex items-center">
            <CompanyLogo className="mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                <path fill="rgba(99, 102, 241, var(--tw-bg-opacity))" d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              </svg>
            </CompanyLogo>
            <div>
              <h4 className="leading-tight font-bold text-xl">Freelance</h4>
              <span className="text-blueGray-500 mt-3 sm:mt-0">1 yrs 4 mos</span>
            </div>
          </div>
          <EntityPositionGroup>
            <li>
              <div className="leading-relaxed">
                  <h5 className="leading-normal sm:leading-loose">Front End Engineer</h5>
                  <p className="text-blueGray-500 mt-3 sm:mt-0">Oct 2019 - Dec 2020 <span className="text-indigo-500">7 mos</span></p>
                  <p className="text-blueGray-500 mt-3 sm:mt-0">Makassar, South Sulawesi, Indonesia</p>
              </div>
            </li>
          </EntityPositionGroup>
        </div>
      </li>
      <li>
        <div>
          <div className="flex items-center">
            <CompanyLogo className="mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" height="44" width="49" viewBox="39 33 66.607 33.734"><g transform="translate(39 33)"><path fill="#f68725" d="M513.724,236.685c-4.12,0-6.587-3.375-5.489-7.495l2.006-7.495a10.475,10.475,0,0,1,9.5-7.495h7.021a2.76,2.76,0,0,1,2.738,3.741l-1,3.741h-4.256l1-3.741h-6.506a4.734,4.734,0,0,0-4.147,3.415l-2.169,8.1c-.529,1.965.664,3.47,2.3,3.47h10.49l-1,3.741h-10.49Z" transform="translate(-463.032 -202.978)"/><g transform="translate(0 0)"><path fill="#0a96ce" d="M195.284,161.434l8.051-30.034-4.839,2.141-2.44,9.108h-7.915a10.471,10.471,0,0,0-9.5,7.495l-2.006,7.495c-1.1,4.12,1.369,7.495,5.489,7.495H189.2ZM180.823,157.9l2.155-8.051a4.81,4.81,0,0,1,4.161-3.47h7.915l-4.012,14.976h-7.915C181.487,161.366,180.294,159.862,180.823,157.9Z" transform="translate(-176.374 -131.4)"/></g><path fill="#2b5890" d="M393.6,170.236l1-3.741h-7.956L388.654,159h-.014l-4.771,2.182.027-.122-1.45,5.435h-3.741l-1,3.741h3.741l-4.012,14.976a2.761,2.761,0,0,0,2.738,3.741h8.43l1-3.741h-7.956l4.012-14.976Z" transform="translate(-350.065 -155.259)"/></g></svg>
            </CompanyLogo>
            <div>
              <h4 className="leading-tight font-bold text-xl">PT. Docotel Teknologi Celebes</h4>
              <span className="text-blueGray-500">3 yrs 2 mos</span>
            </div>
          </div>
          <EntityPositionGroup>
            <li>
              <div className="leading-relaxed">
                  <h5 className="leading-normal sm:leading-loose">Lead Front End Engineer</h5>
                  <p className="text-blueGray-500 mt-3 sm:mt-0">May 2019 - Oct 2019 <span className="text-indigo-500">6 mos</span></p>
                  <p className="text-blueGray-500 mt-3 sm:mt-0">Makassar, South Sulawesi, Indonesia</p>
              </div>
            </li>
            <li>
              <div className="leading-relaxed">
                  <h5 className="leading-normal sm:leading-loose">Front End Engineer</h5>
                  <p className="text-blueGray-500 mt-3 sm:mt-0">March 2017 - May 2019 <span className="text-indigo-500">2 yrs 4 mos</span></p>
                  <p className="text-blueGray-500 mt-3 sm:mt-0">Makassar, South Sulawesi, Indonesia</p>
              </div>
            </li>
          </EntityPositionGroup>
        </div>
      </li>
    </EntityCompanyGroup>
  </div>
)

export default ExperiencesItem
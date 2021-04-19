import React from "react"
import { EntityPositionGroup, CompanyLogo } from "./styled"

const ExperiencesItem: React.FC = () => (
  <div>
    <ul>
      <li>
        <div>
          <div className="flex items-center">
            <CompanyLogo className="mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" height="44" width="49" viewBox="39 33 66.607 33.734"><g transform="translate(39 33)"><path fill="#f68725" d="M513.724,236.685c-4.12,0-6.587-3.375-5.489-7.495l2.006-7.495a10.475,10.475,0,0,1,9.5-7.495h7.021a2.76,2.76,0,0,1,2.738,3.741l-1,3.741h-4.256l1-3.741h-6.506a4.734,4.734,0,0,0-4.147,3.415l-2.169,8.1c-.529,1.965.664,3.47,2.3,3.47h10.49l-1,3.741h-10.49Z" transform="translate(-463.032 -202.978)"/><g transform="translate(0 0)"><path fill="#0a96ce" d="M195.284,161.434l8.051-30.034-4.839,2.141-2.44,9.108h-7.915a10.471,10.471,0,0,0-9.5,7.495l-2.006,7.495c-1.1,4.12,1.369,7.495,5.489,7.495H189.2ZM180.823,157.9l2.155-8.051a4.81,4.81,0,0,1,4.161-3.47h7.915l-4.012,14.976h-7.915C181.487,161.366,180.294,159.862,180.823,157.9Z" transform="translate(-176.374 -131.4)"/></g><path fill="#2b5890" d="M393.6,170.236l1-3.741h-7.956L388.654,159h-.014l-4.771,2.182.027-.122-1.45,5.435h-3.741l-1,3.741h3.741l-4.012,14.976a2.761,2.761,0,0,0,2.738,3.741h8.43l1-3.741h-7.956l4.012-14.976Z" transform="translate(-350.065 -155.259)"/></g></svg>
            </CompanyLogo>
            <div>
              <h4 className="leading-tight font-bold text-xl">PT. Docotel Teknologi Celebes</h4>
              <span className="text-blueGray-500">3 yrs 4 mos</span>
            </div>
          </div>
          <EntityPositionGroup>
            <li>
              <div className="leading-relaxed">
                  <h5 className="leading-loose">Lead Front End Engineer</h5>
                  <p className="text-blueGray-500">May 2019 - Oct 2019 <span className="text-indigo-500">4 mos</span></p>
                  <p className="text-blueGray-500">Makassar Area, South Sulawesi, Indonesia</p>
              </div>
            </li>
            <li>
              <div className="leading-relaxed">
                  <h5 className="leading-loose">Front End Engineer</h5>
                  <p>March 2017 - May 2019 <span className="text-indigo-500">2 yrs 8 mos</span></p>
                  <p>Makassar Area, South Sulawesi, Indonesia</p>
              </div>
            </li>
          </EntityPositionGroup>
        </div>
      </li>
    </ul>
  </div>
)

export default ExperiencesItem
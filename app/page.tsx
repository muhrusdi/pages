import { Header } from "@/components/header"
import { Section } from "@/components/section"
import { CompanyItem } from "@/components/company-item"
import { ProjectItem } from "@/components/project-item"
import { SearchParamsType } from "@/lib/definitions"
import { totalOfExper } from "@/utils"
import { projects } from "@/utils/mock"

type Props = {
  searchParams: SearchParamsType<{ sort_by: string; page: string }>
}

const Home = async () => {
  return (
    <div>
      <Header />
      <div>
        <Section title="About">
          <p>
            As a Frontend Engineer, I have successfully taken multiple projects
            from scratch to production. Currently, I work mostly with
            Typescript, React, Vuejs, and GraphQL. I have over {totalOfExper()}+
            years of experience in web development.
          </p>
        </Section>
        <Section title="Education">
          <div className="flex sm:flex-row flex-col-reverse justify-between">
            <div>
              <h4>State Polytechnic of Ujung Pandang</h4>
              <p>Computer and Network Engineering</p>
            </div>
            <div>
              <p>2012 - 2016</p>
            </div>
          </div>
        </Section>
        <Section title="Experience">
          <ul className="space-y-3">
            <li>
              <CompanyItem
                name="PT. Privy Identitas Digital"
                role="Frontend Engineer"
                year="Currently"
              />
            </li>
            <li>
              <CompanyItem
                name="PT. Indo Digital Aset"
                role="Frontend Engineer"
                year="2022 - 2023"
                type="remote"
              />
            </li>
            <li>
              <CompanyItem
                name="PT. Astra Graphia Information Technology"
                role="Frontend Engineer"
                year="2021 - 2022"
                type="remote"
              />
            </li>
            <li>
              <CompanyItem
                name="PT. Dikita Integrasi Indonesia"
                role="Frontend Engineer"
                year="2020 - 2021"
                type="remote"
              />
            </li>
            <li>
              <CompanyItem
                name="PT. Docotel Teknologi Celebes"
                role="Frontend Engineer"
                year="2017 - 2019"
              />
            </li>
          </ul>
        </Section>
        <Section title="Work">
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-3">
            {projects.map((item, i) => (
              <li key={i}>
                <ProjectItem
                  title={item.title}
                  description={item.description}
                  stacks={item.stacks}
                />
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  )
}

export default Home

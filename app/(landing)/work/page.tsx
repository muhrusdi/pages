import { ProjectItem } from "@/components/project-item"
import { Header } from "@/components/utils"
import { projects } from "@/utils/mock"

export const dynamic = "force-static"

const Works = () => {
  return (
    <div>
      <Header title="My Works" description="Here are some of my works." />
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((item, i) => (
          <li key={i}>
            <ProjectItem
              title={item.title}
              link={item.link}
              description={item.description}
              stacks={item.stacks}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Works

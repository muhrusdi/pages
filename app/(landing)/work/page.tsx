import { ProjectItem } from "@/components/project-item"
import { Header } from "@/components/utils"
import { projects } from "@/utils/mock"

const Works = () => {
  return (
    <div>
      <Header title="My Works" description="Here are some of my blogs." />
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
    </div>
  )
}

export default Works

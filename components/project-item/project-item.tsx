import { ProjectItemType } from "@/types"
import { Tag } from "../tag"

const ProjectItem: React.FC<ProjectItemType> = ({
  title,
  description,
  stacks,
}) => {
  return (
    <div className="border rounded-lg border-gray-700 p-3">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm mt-2 line-clamp-3">{description}</p>
      <ul className="mt-2 flex space-x-2">
        {stacks?.map((item, i) => (
          <li key={i}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectItem

import { ProjectItemType } from "@/types"
import { Tag } from "../tag"

type Props = {
  data: ProjectItemType
}

const ProjectItem: React.FC<Props> = ({ data }) => {
  return (
    <div className="border rounded-lg border-gray-700 p-3">
      <h4 className="font-semibold">{data.title}</h4>
      <p className="text-sm mt-2 line-clamp-3">{data.description}</p>
      <ul className="mt-2 flex space-x-2">
        {data.stacks?.map(item => (
          <li>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectItem

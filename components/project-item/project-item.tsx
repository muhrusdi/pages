import { ProjectItemType } from "@/types"
import { Tag } from "../utils"
import { cn } from "@/utils"

const ProjectItem: React.FC<ProjectItemType> = ({
  title,
  description,
  link,
  stacks,
}) => {
  return (
    <div className="group/item group/visit relative overflow-hidden rounded-lg border border-gray-800 p-3">
      <span
        className={cn(
          "absolute top-2 right-2 h-1 w-1 rounded-full",
          link ? "bg-green-500" : "bg-gray-400",
        )}
      ></span>
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 line-clamp-3 text-sm">{description}</p>
      <div className="relative mt-2">
        <ul className="flex transform space-x-2 transition-all group-hover/item:-translate-x-10">
          {stacks?.map((item, i) => (
            <li key={i}>
              <Tag>{item}</Tag>
            </li>
          ))}
        </ul>
        <div className="hidden transition-all group-hover/visit:block">
          <a
            href={link}
            aria-disabled={!link}
            target="_blank"
            className={link ? "" : "[&>span]:!bg-gray-600"}
          >
            <Tag className="absolute right-0 bottom-0 bg-green-600">Visit</Tag>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem

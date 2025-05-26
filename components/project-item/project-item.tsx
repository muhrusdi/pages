"use client"
import { ProjectItemType } from "@/types"
import { Tag } from "../utils"
import { cn } from "@/utils"
import { useState } from "react"

const ProjectItem: React.FC<ProjectItemType> = ({
  title,
  description,
  link,
  stacks,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group/visit relative flex min-h-full flex-col justify-between overflow-hidden rounded-lg border border-gray-800 p-3"
    >
      <div>
        <span
          className={cn(
            "absolute top-2 right-2 h-1 w-1 rounded-full",
            link ? "bg-green-500" : "bg-gray-400",
          )}
        ></span>
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-2 line-clamp-3 text-sm">{description}</p>
      </div>
      <div className="relative mt-2">
        <ul
          className={cn(
            "flex transform space-x-2 transition-all",
            isHovered ? "-translate-x-10" : null,
          )}
        >
          {stacks?.map((item, i) => (
            <li key={i}>
              <Tag>{item}</Tag>
            </li>
          ))}
        </ul>
        <div className={cn("transition-all", isHovered ? "block" : "hidden")}>
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

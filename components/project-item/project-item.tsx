import { Tag } from "../tag"

const ProjectItem = () => {
  return (
    <div className="border rounded-lg border-gray-700 p-3">
      <h4 className="font-semibold">Eproc</h4>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <ul className="mt-2 flex space-x-2">
        <li>
          <Tag>Typescript</Tag>
        </li>
        <li>
          <Tag>React</Tag>
        </li>
        <li>
          <Tag>Next.js</Tag>
        </li>
      </ul>
    </div>
  )
}

export default ProjectItem

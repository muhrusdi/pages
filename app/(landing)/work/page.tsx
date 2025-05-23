import { Header } from "@/components/utils"

const Works = () => {
  return (
    <div>
      <Header title="My Works" description="Here are some of my blogs." />
      <ul>
        <li>
          <h2 className="text-2xl font-bold">Project 1</h2>
          <p className="mt-2 text-lg">Description of project 1.</p>
        </li>
      </ul>
    </div>
  )
}

export default Works

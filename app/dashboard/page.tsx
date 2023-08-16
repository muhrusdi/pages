import { BlogList } from "@/containers/blog"
import { getData } from "@/libs/api"
import { wait } from "@/utils"
import { Suspense } from "react"
import Error from "./error"

type TodoType = {
  title: string
  id: string
}

const Dashboard = async () => {
  const data = await getData<TodoType[]>("todos")

  return (
    <div>
      <ul>
        {data.map((item: any, i: number) => (
          <li key={i}>
            {item.title} {item.id}
          </li>
        ))}
      </ul>
      <Suspense fallback={<p>Blog Loading</p>}>
        <BlogList />
      </Suspense>
    </div>
  )
}

export default Dashboard

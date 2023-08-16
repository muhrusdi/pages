import { BlogList } from "@/containers/blog"
import { getData } from "@/libs/api"
import { wait } from "@/utils"
import { Suspense } from "react"

type TodoType = {
  title: string
  id: string
}

const Dashboard = async () => {
  await wait(3000)
  const data = await getData("blogs")

  return <div>{JSON.stringify(data)}</div>
}

export default Dashboard

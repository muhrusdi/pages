import { getData } from "@/lib/api"
import { wait } from "@/utils"

const Dashboard = async () => {
  await wait(2000)
  const data = await getData("blogs")

  return <div>{JSON.stringify(data)}</div>
}

export default Dashboard

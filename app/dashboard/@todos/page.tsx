import { getData } from "@/libs/api"
import { wait } from "@/utils"

type TodoType = {
  title: string
  id: string
}

const Dashboard = async () => {
  await wait(6000)
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
    </div>
  )
}

export default Dashboard

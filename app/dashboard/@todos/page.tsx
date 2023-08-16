import Button from "@/components/button"
import { getData, postData } from "@/libs/api"
import { wait } from "@/utils"

type TodoType = {
  products: {
    title: string
    id: string
  }[]
}

const Dashboard = async () => {
  await wait(3000)
  const data = await getData<TodoType>("products")

  return (
    <div>
      <ul>
        {data.products.map((item: any, i: number) => (
          <li key={i}>
            {item.title} {item.id}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard

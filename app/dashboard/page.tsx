import { BlogList } from "@/containers/blog"
import { wait } from "@/utils"
import { Suspense } from "react"

const getData = async () => {
  await wait(3000)
  return fetch("https://api.placeholderjson.dev/credit-card").then(r =>
    r.json()
  )
}

const Dashboard = async () => {
  const data = await getData()
  return (
    <div>
      <ul>
        {data.map((item: any, i: number) => (
          <li key={i}>
            {item.type} {item.number}
          </li>
        ))}
      </ul>
      <Suspense fallback={<p>Blog Loading</p>}>
        {/* @ts-expect-error Server Component */}
        <BlogList />
      </Suspense>
    </div>
  )
}

export default Dashboard

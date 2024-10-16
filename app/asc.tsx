import { getData } from "@/lib/api"
import { Movie } from "@/types/movie"
import { wait } from "@/utils"
import { cookies } from "next/headers"
import Link from "next/link"

const Page = async () => {
  const sort_by = (await cookies()).get("page")?.value || ""
  const data = await getData<{ results: Movie[] }>("/discover/tv", {
    query: { page: sort_by },
  })

  // await wait(4000)
  return (
    <ul>
      {data.results.map(item => (
        <li key={item.id}>
          <Link href={`/movie/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Page

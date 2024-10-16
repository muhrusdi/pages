import { getData } from "@/lib/api"
import { Movie } from "@/types/movie"
import { wait } from "@/utils"
import { cookies } from "next/headers"
import Link from "next/link"

const Desc = async () => {
  const sort_by = (await cookies()).get("sort_by")?.value || ""
  const data = await getData<{ results: Movie[] }>("/discover/movie", {
    query: { sort_by: sort_by },
  })

  // await wait(3000)
  return (
    <ul>
      {data.results.map(item => (
        <li key={item.id}>
          <Link href={`/movie/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Desc

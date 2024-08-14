import { Await } from "@/components/await"
import type { NextPage } from "next"
import Link from "next/link"
import { getUsers } from "@/drizzle/db"
import AsyncFilter from "./filter"

const Home: NextPage = ({ searchParams: { sort_by } }) => {
  return (
    <div>
      <AsyncFilter page={1} sort_by={sort_by} />
      <div>
        <Await sleep={4000} tags={[sort_by as string]} data={getUsers()}>
          {movies => (
            <ul>
              {movies?.map(item => (
                <li key={item.id}>
                  <Link prefetch href={`/movie/${item.id}`}>
                    {item.name}, {item.email}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Await>
      </div>
      <div>
        <Await sleep={3000} data={getUsers()}>
          {movies => (
            <ul>
              {movies?.map(item => (
                <li key={item.id}>
                  <Link prefetch href={`/movie/${item.id}`}>
                    {item.name}, {item.email}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Await>
      </div>
    </div>
  )
}

export default Home

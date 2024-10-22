import { Await } from "@/components/await"
import type { NextPage } from "next"
import Link from "next/link"
import { getUsers } from "@/drizzle/db"
import AsyncFilter from "../filter"
import { getData, useQuery } from "@/lib/api"
import { Movie } from "@/types/movie"

const Home: NextPage = async ({ searchParams }) => {
  const params = await searchParams

  return (
    <div>
      <AsyncFilter page={1} sort_by={params.sort_by} />
      <div>
        <Await
          sleep={3000}
          tags={[params.sort_by]}
          name="sort_by"
          data={getData<{ results: Movie[] }>("/discover/movie", {
            query: params,
          })}
        >
          {movies => (
            <ul>
              {movies.results.map(item => (
                <li key={item.id}>
                  <Link href={`/movie/${item.id}`}>
                    {item?.title}, {item?.adult}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Await>
      </div>
      <div>
        <Await
          sleep={5000}
          tags={[params.page]}
          name="page"
          data={getData<{ results: Movie[] }>("/discover/tv")}
        >
          {movies => (
            <ul>
              {movies?.results.map(item => (
                <li key={item.id}>
                  <Link href={`/movie/${item.id}`}>
                    {item.name}, {item.release_date}
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

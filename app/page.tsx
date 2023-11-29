import { Await } from "@/components/await"
import NextOverview from "@/containers/next"
import Header from "@/containers/next/header"
import { getData } from "@/libs/api"
import { Movie } from "@/types/movie"
import type { NextPage } from "next"
import { headers } from "next/headers"
import { Suspense } from "react"

const Home: NextPage = ({ searchParams }: any) => {
  const params = searchParams

  return (
    <div>
      <Header />
      <Await
        sleep={params?.__delay || 6000}
        id={JSON.stringify(params)}
        data={getData<{ results: Movie[] }>("/discover/movie", {
          query: searchParams,
        })}
      >
        {movies => (
          <ul>
            {movies.results.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
      </Await>
    </div>
  )
}

export default Home

import { Await, Suspense } from "@/components/await"
import NextOverview from "@/containers/next"
import Header from "@/containers/next/header"
import { getData } from "@/libs/api"
import { Movie } from "@/types/movie"
import type { NextPage } from "next"
import { headers } from "next/headers"

const Home: NextPage = ({ searchParams }: any) => {
  return (
    <div>
      <Header />
      <Suspense>
        <Await
          sleep={4000}
          promise={getData<{ results: Movie[] }>("/discover/movie", {
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
      </Suspense>
    </div>
  )
}

export default Home

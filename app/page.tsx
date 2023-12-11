import { Await } from "@/components/await"
import Header from "@/containers/next/header"
import { getData } from "@/libs/api"
import { Movie } from "@/types/movie"
import type { NextPage } from "next"
import Link from "next/link"
import { Suspense } from "react"

const Home: NextPage = ({ searchParams }: any) => {
  return (
    <div>
      <Header />
      <div>
        <Await
          sleep={4000}
          tags={[searchParams.sort_by]}
          data={getData<{ results: Movie[] }>("/discover/movie", {
            query: { sort_by: searchParams.sort_by },
          })}
        >
          {movies => (
            <ul>
              {movies.results.map(item => (
                <li key={item.id}>
                  <Link href={`/movie/${item.id}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </Await>
      </div>
      <div>
        <Await
          sleep={3000}
          tags={[searchParams.page]}
          data={getData<{ results: Movie[] }>("/discover/tv", {
            query: { page: searchParams.page },
          })}
        >
          {tv => (
            <ul>
              {tv.results.map(item => (
                <li key={item.id}>
                  <Link href={`/movie/${item.id}`}>{item.name}</Link>
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

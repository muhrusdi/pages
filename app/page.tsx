import { Await } from "@/components/await"
import Header from "@/containers/next/header"
import { getData } from "@/libs/api"
import { Movie } from "@/types/movie"
import type { NextPage } from "next"
import { cookies } from "next/headers"
import Link from "next/link"

const Home: NextPage = () => {
  const actions = async (formData: FormData) => {
    "use server"
    cookies().set("sort_by", formData.get("sort_by") as string, { maxAge: 0 })
    cookies().set("page", formData.get("page") as string, { maxAge: 0 })
  }
  const sort_by = cookies().get("sort_by")
  const page = cookies().get("page")

  return (
    <div>
      <Header />
      <form action={actions}>
        <button name="sort_by" value="popularity.desc">
          Desc
        </button>
        <button name="sort_by" value="popularity.asc">
          Asc
        </button>
        <button name="page" value={Number(page?.value) + 1}>
          Page {Number(page?.value || 0) + 1}
        </button>
      </form>
      <div>
        <Await
          tags={[sort_by?.value as string]}
          data={getData<{ results: Movie[] }>("/discover/movie", {
            query: { sort_by: sort_by?.value || "" },
          })}
        >
          {movies => (
            <ul>
              {movies?.results?.map(item => (
                <li key={item.id}>
                  <Link prefetch href={`/movie/${item.id}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Await>
      </div>
      <div>
        <Await
          tags={[page?.value as string]}
          data={getData<{ results: Movie[] }>("/discover/tv", {
            query: { page: (page?.value as string) || 1 },
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

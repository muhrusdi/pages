import { Await } from "@/components/await"
import type { NextPage } from "next"
import Link from "next/link"
import { getUsers } from "@/drizzle/db"

const Home: NextPage = () => {

  return (
    <div>
      <div>
        <Await
          data={getUsers()}
        >
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

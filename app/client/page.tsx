"use client"

import { useMutation, useQuery } from "@/hooks/api"
import { Movie } from "@/types/movie"

const Client = () => {
  const { data, isLoading } = useQuery<{ results: Movie[] }>("/discover/movie")

  console.log(data)

  const mutation = useMutation<{ title: string }, null, { error: 3 }>(
    "/movies",
    {
      options: {
        onSuccess: (data, vars, context) => {
          data.title
        },
      },
    }
  )

  console.log(data)
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul>
          {data?.results.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Client

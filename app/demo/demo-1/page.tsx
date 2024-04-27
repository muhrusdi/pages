import { useRouter } from "next/navigation"
import Filter from "./filter"
import { wait } from "@/utils"

const Demo1 = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const genres = Array.isArray(searchParams.genre)
    ? searchParams.genre
    : searchParams.genre
    ? [searchParams.genre]
    : []

  await wait(3000)

  return (
    <div>
      <div className="flex p-3 space-x-4">
        <div>
          <Filter genres={genres} />
        </div>
        <div>
          <div>
            <p>Params (Server):</p>

            {genres.map(genre => (
              <p key={genre}>{genre}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo1

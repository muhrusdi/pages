import path from "path"
import fs from "fs"
import { ViewTransition } from "react"
import Link from "next/link"

export const dynamic = "force-static"

const Photos = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  const photosSrc = path.join("public/albums", id)
  const photoPath = fs.readdirSync(photosSrc)

  return (
    <ViewTransition name={`photo-album-${id}`}>
      <div className="mt-4">
        <div>
          <h1 className="text-2xl capitalize">{id}</h1>
        </div>
        <ul className="mt-3 grid grid-cols-3 gap-2">
          {photoPath?.map(key => (
            <li key={key}>
              <Link href={`/photos/${id}/${key}`}>
                <img
                  src={`/albums/${id}/${key}`}
                  alt={key}
                  className="h-40 w-full rounded-md object-cover"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </ViewTransition>
  )
}

export default Photos

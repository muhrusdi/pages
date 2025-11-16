import { ViewTransition } from "react"
import path from "path"
import fs from "fs"
import Link from "next/link"

export const dynamic = "force-static"

type Album = {
  folder: string
  photos: string[]
}

const Photos = async () => {
  const albumsSrc = path.join("public/albums")
  const albumsPath = fs.readdirSync(albumsSrc)

  const albums = albumsPath.reduce(
    (acc: Album[], folder) => {
      const folderPath = path.join(albumsSrc, folder)
      const stats = fs.statSync(folderPath)
      if (stats.isDirectory()) {
        const photosSrc = path.join("public/albums", folder)
        const photoPath = fs.readdirSync(photosSrc)
        acc.push({ folder, photos: photoPath } as Album)
      }
      return acc
    },
    [] as unknown as Album[],
  ) as unknown as Record<string, Album>

  return (
    <ViewTransition>
      <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {Object.keys(albums)?.map(key => (
          <ViewTransition name={`photo-album-${albums[key].folder}`} key={key}>
            <Link
              href={`/photos/${albums[key].folder}`}
              style={{
                backgroundImage: `url(/albums/${albums[key].folder}/${albums[key].photos[1]})`,
              }}
              className="after:content-[' '] relative flex h-40 w-full items-end rounded-md bg-cover bg-center p-4 text-white backdrop-blur-sm transition after:absolute after:inset-0 after:-z-1 after:bg-black/40 after:transition hover:bg-size-[106%]"
            >
              <div className="relative">
                <ViewTransition
                  name={`photo-album-title-${albums[key].folder}`}
                >
                  <h2 className="capitalize">{albums[key].folder}</h2>
                </ViewTransition>
                <p className="text-sm text-white">Oct 2025</p>
              </div>
            </Link>
          </ViewTransition>
        ))}
      </ul>
    </ViewTransition>
  )
}

export default Photos

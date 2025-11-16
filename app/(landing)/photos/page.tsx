import { ViewTransition } from "react"
import path from "path"
import fs from "fs"
import Link from "next/link"
import { getAlbums } from "./utils"
import Image from "next/image"

export const dynamic = "force-static"

const Photos = async () => {
  const albumsSrc = path.join("public/albums")
  const albumsPath = fs.readdirSync(albumsSrc)

  const albums = getAlbums({ albumsPath, albumsSrc })

  return (
    <ViewTransition>
      <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {Object.keys(albums)?.map(key => (
          <ViewTransition name={`photo-album-${albums[key].folder}`} key={key}>
            <Link
              href={`/photos/${albums[key].folder}`}
              className="after:content-[' '] relative flex h-40 w-full items-end overflow-hidden rounded-md bg-cover bg-center p-4 text-white backdrop-blur-sm transition after:absolute after:inset-0 after:-z-1 after:bg-black/40 after:transition hover:bg-size-[106%] hover:[&_img]:scale-[1.1]"
            >
              <Image
                src={`/albums/${albums[key].folder}/${albums[key].photos[1]}`}
                alt={albums[key].folder + key}
                fill
                className="relative -z-1 rounded-md object-cover transition"
              />
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

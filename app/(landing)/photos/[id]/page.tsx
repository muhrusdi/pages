import path from "path"
import fs from "fs"
import Grid from "./grid"
import { getAlbums } from "../utils"

export const dynamic = "force-static"

export const generateStaticParams = async () => {
  const albumsSrc = path.join("public/albums")
  const albumsPath = fs.readdirSync(albumsSrc)

  const albums = getAlbums({ albumsPath, albumsSrc })

  return Object.keys(albums).map(key => {
    return {
      id: albums[key].folder,
    }
  })
}

const Photos = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  const photosSrc = path.join("public/albums", id)
  const photoPath = fs.readdirSync(photosSrc)

  return (
    <div>
      <Grid photos={photoPath} id={id} />
    </div>
  )
}

export default Photos

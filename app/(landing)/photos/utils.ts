import path from "path"
import fs from "fs"

export type Album = {
  folder: string
  photos: string[]
}

export const getAlbums = ({
  albumsPath,
  albumsSrc,
}: {
  albumsPath: string[]
  albumsSrc: string
}) => {
  return albumsPath.reduce(
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
}

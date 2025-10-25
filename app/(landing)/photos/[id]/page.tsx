import path from "path"
import fs from "fs"
import Grid from "./grid"

export const dynamic = "force-static"

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

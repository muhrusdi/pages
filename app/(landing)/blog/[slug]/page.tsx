import { MetadataType } from "@/types"
import "./styles.css"
import { getMdxContent, mapMdxContent } from "@/lib/services"

export const dynamic = "force-static"

const DetailBlog = async ({ params }: { params: Promise<MetadataType> }) => {
  const { slug } = await params

  // const blogDirectory = path.join("app/(landing)/blog/(content)/contents")
  // const metadataRegex = /export\sconst\smetadata\s=\s{\s*([\s\S]*?)\s*}/

  // const fullMDXPath = blogDirectory + "/" + slug + ".mdx"
  // const file = fs.readFileSync(fullMDXPath, "utf-8")
  // const match = metadataRegex.exec(file)
  // const frontMatterBlock = match?.[1]
  // const frontmatterLines = frontMatterBlock?.trim().split("\n")
  // const metadata: Partial<MetadataType> = {}

  // frontmatterLines?.forEach(line => {
  //   let [key, ...valueArr] = line.split(": ")
  //   let value = valueArr.join(": ").trim()
  //   value = value.replace(/^['",](.*)(['"],)$/, "$1") // Remove quotes
  //   metadata[key.trim() as keyof MetadataType] = value
  // })

  const map = await mapMdxContent()

  const { default: Blog, metadata } = map[slug]

  return (
    <div>
      <title>{metadata.title}</title>
      <div className="mt-10">
        <h1 className="text-center text-4xl font-black">{metadata.title}</h1>
        <p className="mt-4 text-center text-lg">{metadata.description}</p>
      </div>
      <div className="mt-18">
        <Blog />
      </div>
    </div>
  )
}

export default DetailBlog

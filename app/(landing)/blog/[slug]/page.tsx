import { MetadataType } from "@/types"
import "./styles.css"
import { mapMdxContent } from "@/lib/services"
import { getData } from "@/lib/api"

export const dynamic = "force-static"
export const runtime = "edge"

const DetailBlog = async ({ params }: { params: Promise<MetadataType> }) => {
  const { slug } = await params

  const data = (await getData<{ blog: MetadataType[] }>("/contents", {
    params: [slug],
  })) as Record<string, any>

  const { default: Blog, metadata } = await import(
    `@/app/(landing)/blog/contents/${data.fileName}`
  )

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

  return (
    <div>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <div className="mt-16">
        <h1 className="text-center text-4xl leading-tight font-black">
          {metadata.title}
        </h1>
        <p className="mt-4 text-center text-lg">{metadata.description}</p>
      </div>
      <div className="article mt-18">
        <Blog />
      </div>
    </div>
  )
}

export default DetailBlog

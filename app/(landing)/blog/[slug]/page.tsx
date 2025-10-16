import { MetadataType } from "@/types"
import "./styles.css"
import { mapMdxContent } from "@/lib/services"
import { formatDate } from "@/utils"

export const dynamic = "force-static"

export const generateStaticParams = async () => {
  const map = await mapMdxContent()

  return Object.keys(map).map(key => {
    return {
      slug: key,
    }
  })
}

const DetailBlog = async ({ params }: { params: Promise<MetadataType> }) => {
  const { slug } = await params

  const map = await mapMdxContent()

  const fileName = map[slug!].fileName

  // const data = (await getData<{ blog: MetadataType[] }>("/contents", {
  //   params: [slug],
  // })) as Record<string, any>

  const { default: Blog, metadata } = (await import(
    `@/app/(landing)/blog/contents/${fileName}`
  )) as { metadata: MetadataType; default: any }

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
        <ul className="mt-8 flex items-center justify-center gap-3 border-t border-b border-gray-900 py-2">
          <li>
            <p>{formatDate(new Date(metadata.date as string))}</p>
          </li>
          {metadata.tags?.length ? (
            <li>
              <ul className="flex items-center gap-2">
                {metadata.tags?.map((item, i) => (
                  <li key={i}>
                    <span className="inline-block rounded-3xl border border-gray-800 bg-gray-900 px-3 py-1 text-[10px] font-medium text-white uppercase">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="article mt-18">
        <Blog />
      </div>
    </div>
  )
}

export default DetailBlog

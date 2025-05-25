import { Header } from "@/components/utils"
import { BlogItem } from "@/components/cards/blog"
import { MetadataType } from "@/types"
import { getData } from "@/lib/api"

// export const runtime = "edge"
export const dynamic = "force-static"

const Blogs = async () => {
  const data = await getData<{ blog: MetadataType[] }>("/contents")
  // const blogDirectory = path.join("app/(landing)/blog/contents")
  // const postFilePaths = fs.readdirSync(blogDirectory)
  // const metadataRegex = /export\sconst\smetadata\s=\s{\s*([\s\S]*?)\s*}/

  // const blog = postFilePaths
  //   .map(f => {
  //     const fullPath = path.join(blogDirectory, f)
  //     if (!fullPath.endsWith(".tsx")) {
  //       const fullMDXPath = fullPath + "/page.mdx"
  //       const fileName = f.replace(".mdx", "")
  //       const file = fs.readFileSync(fullMDXPath, "utf-8")
  //       const match = metadataRegex.exec(file)
  //       const frontMatterBlock = match?.[1]
  //       const frontmatterLines = frontMatterBlock?.trim().split("\n")
  //       const metadata: Partial<MetadataType> = {}

  //       frontmatterLines?.forEach(line => {
  //         let [key, ...valueArr] = line.split(": ")
  //         let value = valueArr.join(": ").trim()
  //         value = value.replace(/^['",](.*)(['"],)$/, "$1") // Remove quotes
  //         metadata[key.trim() as keyof MetadataType] = value
  //       })

  //       return {
  //         ...metadata,
  //         slug: "/blog/" + fileName,
  //       }
  //     }
  //   })
  //   .filter(Boolean) as MetadataType[]

  // const blog = postFilePaths.map(async f => {
  //   const { metadata } = await getMdxContent(f)
  //   const slug = slugify(metadata.title)

  //   return {
  //     ...metadata,
  //     slug: "/blog/" + slug,
  //   }
  // })

  return (
    <div>
      <Header title="My Blogs" description="Here are some of my blogs." />
      <ul className="space-y-2">
        {data.blog?.map((item, i) => (
          <li key={i}>
            <BlogItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs

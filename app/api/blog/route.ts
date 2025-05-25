import path from "path"
import fs from "fs"
import { getMdxContent } from "@/lib/services"
import slugify from "@sindresorhus/slugify"

export const dynamic = "force-static"

export const GET = async () => {
  const blogDirectory = path.join("app/(landing)/blog/contents")
  const postFilePaths = fs.readdirSync(blogDirectory)
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
  //   .filter(Boolean)

  const blog = await new Promise(res => {
    let list = []
    postFilePaths.map(async f => {
      const { metadata } = await getMdxContent(f)
      const slug = slugify(metadata.title)

      list.push({
        ...metadata,
        slug: "/blog/" + slug,
      })

      res(list)
    })
  })

  return Response.json({
    blog,
  })
}

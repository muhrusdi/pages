import path from "path"
import fs from "fs"
import { MetadataType } from "@/types"

export const dynamic = "force-static"

export const GET = async () => {
  const blogDirectory = path.join("app/(landing)/blog/(content)")
  const postFilePaths = fs.readdirSync(blogDirectory)
  const metadataRegex = /export\sconst\smetadata\s=\s{\s*([\s\S]*?)\s*}/

  const blog = postFilePaths
    .map(f => {
      const fullPath = path.join(blogDirectory, f)
      if (!fullPath.endsWith(".tsx")) {
        const fullMDXPath = fullPath + "/page.mdx"
        const fileName = f.replace(".mdx", "")
        const file = fs.readFileSync(fullMDXPath, "utf-8")
        const match = metadataRegex.exec(file)
        const frontMatterBlock = match?.[1]
        const frontmatterLines = frontMatterBlock?.trim().split("\n")
        const metadata: Partial<MetadataType> = {}

        frontmatterLines?.forEach(line => {
          let [key, ...valueArr] = line.split(": ")
          let value = valueArr.join(": ").trim()
          value = value.replace(/^['",](.*)(['"],)$/, "$1") // Remove quotes
          metadata[key.trim() as keyof MetadataType] = value
        })

        return {
          ...metadata,
          slug: "/blog/" + fileName,
        }
      }
    })
    .filter(Boolean)

  return Response.json({
    blog,
  })
}

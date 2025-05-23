import path from "path"
import fs from "fs"
import matter from "gray-matter"

export const dynamic = "force-static"

export const GET = async () => {
  const blogDirectory = path.join("app/(landing)/blog")
  const postFilePaths = fs.readdirSync(blogDirectory)

  const blog = postFilePaths
    .map(f => {
      const fullPath = path.join(blogDirectory, f)
      if (!fullPath.endsWith(".tsx")) {
        const fullMDXPath = fullPath + "/page.mdx"
        const fileName = f.replace(".mdx", "")
        const file = fs.readFileSync(fullMDXPath, "utf-8")
        const content = matter(file)
        const title = content.data.title

        return {
          title,
          slug: "/blog/" + fileName,
        }
      }
    })
    .filter(Boolean)

  return Response.json({
    blog,
  })
}

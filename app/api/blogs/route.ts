import path from "path"
import fs from "fs"
import matter from "gray-matter"

export const dynamic = "force-static"

export const GET = async () => {
  const blogDirectory = path.join("app/(landing)/blog/content")
  const postFilePaths = fs.readdirSync(blogDirectory)

  const blogs = postFilePaths.map(f => {
    const fullPath = path.join(blogDirectory, f)
    const fileName = f.replace(".mdx", "")
    const file = fs.readFileSync(fullPath, "utf-8")
    const content = matter(file)
    const title = content.data.title

    return {
      title,
      slug: "/blog/" + fileName,
    }
  })

  return Response.json({
    blogs,
  })
}

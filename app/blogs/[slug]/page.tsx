import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"

export const experimental_ppr = true

const DetailBlog = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  const blogDirectory = path.join("app/blogs/content")

  const fileName = slug
  const fullPath = path.join(blogDirectory, fileName + ".mdx")
  const file = fs.readFileSync(fullPath, "utf-8")

  const { frontmatter, content } = await compileMDX<{ title: string }>({
    source: file,
    options: { parseFrontmatter: true },
  })

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div>{content}</div>
    </div>
  )
}

export const generateStaticParams = async () => {
  const blogDirectory = path.join("app/blogs/content")
  const postFilePaths = fs.readdirSync(blogDirectory)

  return postFilePaths.map(f => ({ slug: f }))
}

export default DetailBlog

import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

export const experimental_ppr = true

const Blogs = () => {
  const blogDirectory = path.join("app/blogs")
  const postFilePaths = fs.readdirSync(blogDirectory)

  const blogs = postFilePaths.map(dir => {
    if (!dir.endsWith(".tsx")) {
      const fullPath = path.join(blogDirectory, dir + "/page.mdx")
      const file = fs.readFileSync(fullPath, "utf-8")
      const content = matter(file)
      const title = content.data.title

      return {
        title,
        slug: "/blogs/" + dir,
      }
    }
  })

  console.log(blogs)

  return (
    <div>
      <ul>
        {blogs.filter(Boolean).map(blog => (
          <li key={blog?.slug}>
            <Link href={blog?.slug as string}>{blog?.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs

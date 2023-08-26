import { BlogItem } from "@/components/blog/blog-item"
import { faker } from "@faker-js/faker"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { BLOGS_DIR } from "@/utils/constants"

const Blog = () => {
  const files = fs.readdirSync(path.join(BLOGS_DIR))
  const blogs = files.map(fileName => {
    const fileContent = fs.readFileSync(path.join(BLOGS_DIR, fileName), "utf-8")
    const { data: frontmatter } = matter(fileContent)

    return {
      meta: frontmatter,
      slug: fileName.replace(".mdx", ""),
    }
  })

  return (
    <div>
      <div className="container">
        <div className="grid-blog">
          {blogs.map((item, i) => (
            <BlogItem
              path={item.slug}
              key={i}
              title={item.meta.title}
              description={item.meta.description}
              image={faker.image.urlLoremFlickr()}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog

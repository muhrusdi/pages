import { format } from "date-fns"
import slug from "slugify"

export const formatDate = (date, str = "dd MMM yyyy") => format(new Date(date), str)

export const slugify = (str) => slug(str, {lower: true, remove: /[*+~.()'"!:@]/g})

export const transformBlog = (data) => {
  const composeBlogs = [...data?.allFile.edges, ...data?.allContentfulArticle.edges]

  const composeBlogsSort = composeBlogs.sort((a,b) => {
    const current = a.node?.childMdx?.frontmatter?.publishedOn || a.node.createdAt
    const next = b.node?.childMdx?.frontmatter?.publishedOn || b.node.createdAt
    return current > next ? -1 : 1
  })

  return composeBlogsSort
}
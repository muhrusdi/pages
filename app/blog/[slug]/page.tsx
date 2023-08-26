import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
import { BLOGS_DIR } from "@/utils/constants"
import { BlogHeader } from "@/components/blog/blog-header"

type Props = {
  params: {
    slug: string
  }
}

const getPost = ({ slug }: { slug: string }) => {
  const markdownFile = fs.readFileSync(
    path.join(BLOGS_DIR, slug + ".mdx"),
    "utf-8"
  )

  const { data: frontmatter, content } = matter(markdownFile)

  return {
    frontmatter,
    slug,
    content,
  }
}

const DetailBlog: React.FC<Props> = ({ params }) => {
  const props = getPost(params)
  return (
    <>
      <BlogHeader />
      <div className="relative backdrop-blur-xl backdrop-brightness-75 border-t border-gray-800/30">
        <div className="mx-auto px-5 max-w-[556px] py-16">
          <h1>{props.frontmatter.title}</h1>

          <MDXRemote source={props.content} />
        </div>
      </div>
    </>
  )
}

export default DetailBlog

export const generateMetadata = async ({ params }: Props) => {
  const blog = getPost(params)

  return {
    title: blog.frontmatter.title,
    description: blog.frontmatter.description,
  }
}

export const generateStaticParams = () => {
  const files = fs.readdirSync(path.join(BLOGS_DIR))

  const paths = files.map(filename => ({
    slug: filename.replace(".mdx", ""),
  }))

  return paths
}

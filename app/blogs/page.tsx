import Link from "next/link"
import { getData } from "@/lib/api"
import { Await } from "@/components/await"

export const experimental_ppr = true

const Blogs = async () => {
  const data = await getData<{ blogs: { slug: string; title: string }[] }>(
    "/contents",
  )
  return (
    <div>
      <ul>
        {data.blogs?.map(item => (
          <li key={item.slug}>
            <Link href={item.slug}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs

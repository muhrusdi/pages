import Link from "next/link"
import { getData } from "@/lib/api"
import { Header } from "@/components/utils"

export const runtime = "edge"

const Blogs = async () => {
  const data = await getData<{ blog: { slug: string; title: string }[] }>(
    "/contents",
  )

  return (
    <div>
      <Header title="My Blogs" description="Here are some of my blogs." />
      <ul>
        {data?.blog?.map(item => (
          <li key={item.slug}>
            <Link href={item.slug}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs

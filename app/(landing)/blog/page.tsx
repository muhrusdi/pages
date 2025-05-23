import Link from "next/link"
import { getData } from "@/lib/api"

export const runtime = "edge"

const Blogs = async () => {
  const data = await getData<{ blog: { slug: string; title: string }[] }>(
    "/contents",
  )

  console.log("data", data)

  return (
    <div>
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

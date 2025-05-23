import Link from "next/link"
import { getData } from "@/lib/api"
import { Header } from "@/components/utils"
import { MetadataType } from "@/types"
import { formatDate } from "@/utils"
import { BlogItem } from "@/components/cards/blog"

export const runtime = "edge"

const Blogs = async () => {
  const data = await getData<{ blog: MetadataType[] }>("/contents")

  return (
    <div>
      <Header title="My Blogs" description="Here are some of my blogs." />
      <ul className="space-y-2">
        {data?.blog?.map((item, i) => (
          <li key={i}>
            <BlogItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs

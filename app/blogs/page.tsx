import Link from "next/link"
import { getData } from "@/lib/api"
import { Await } from "@/components/await"

export const experimental_ppr = true

const Blogs = async () => {
  return (
    <div>
      <ul>
        <Await
          data={getData<{ blogs: { slug: string; title: string }[] }>(
            "/contents",
          )}
        >
          {({ blogs }) =>
            blogs?.map(item => (
              <li key={item.slug}>
                <Link href={item.slug}>{item.title}</Link>
              </li>
            ))
          }
        </Await>
      </ul>
    </div>
  )
}

export default Blogs

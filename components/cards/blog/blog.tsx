import { MetadataType } from "@/types"
import { formatDate } from "@/utils"
import Link from "next/link"

const BlogItem = ({ item }: { item: MetadataType }) => {
  return (
    <div className="py-4">
      <div className="items-start sm:flex">
        <div className="sm:w-1/3">
          <span className="mt-2 text-gray-400">
            {formatDate(new Date(item.date as string))}
          </span>
        </div>
        <div className="mt-3 sm:mt-0 sm:w-2/3">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="mt-2 line-clamp-3">{item.description}</p>
          <Link
            className="mt-4 inline-block text-yellow-500"
            href={item?.slug as string}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogItem

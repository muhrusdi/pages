import Link from "next/link"

const Detail = () => {
  return (
    <div className="bg-red absolute inset-0 z-10">
      Detail Modal Content <Link href="/photos">back</Link>
    </div>
  )
}

export default Detail

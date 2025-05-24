import Link from "next/link"

export default function NotFound() {
  return (
    <div className="py-10 text-center">
      <h2 className="text-3xl font-black">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/blog" className="mt-2 inline-block text-yellow-500">
        Return Blog
      </Link>
    </div>
  )
}

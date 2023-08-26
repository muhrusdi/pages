import Image from "next/image"
import avatar from "@/images/avatar.jpg"
import { Blur } from "@/assets/icons"

const BlogHeader = () => {
  return (
    <div className="border-b border-gray-600 relative border-background">
      <div className="container">
        <div className="grid place-items-center h-[240px] relative z-30">
          <div className="text-center">
            <span className="text-gray-500">Tuesday, December 23 2023</span>
            <h1 className="text-3xl font-bold mt-3">
              AWS and Vercel: Accelerating innovation with serverless computing
            </h1>
            <div className="flex gap-3 items-center justify-center mt-8">
              <div>
                <Image
                  src={avatar.src}
                  width={22}
                  height={22}
                  className="rounded-full"
                  alt=""
                />
              </div>
              <div>
                <span>Muhammad Rusdi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blur className="absolute -bottom-[250px] right-[20%] z-0" />
    </div>
  )
}

export default BlogHeader

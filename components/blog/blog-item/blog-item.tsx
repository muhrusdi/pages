import Image from "next/image"

type Props = {
  title: string
  description: string
  image: string
}

export const BlogItem: React.FC<Props> = ({ title, description, image }) => {
  return (
    <div>
      <div className="h-[200px] relative">
        <Image
          src={image}
          alt=""
          width={600}
          style={{ objectFit: "cover" }}
          height={200}
          className="h-[200px] w-full rounded-lg"
        />
      </div>
      <div className="mt-6">
        <span className="font-bold text-sm uppercase text-gradient">
          17 Oct 2023
        </span>
        <h3 className="text-bold mt-2 line-clamp-2">{title}</h3>
        <p className="text-gray-400 mt-2 line-clamp-3">{description}</p>
      </div>
    </div>
  )
}

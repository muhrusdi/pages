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
          width={1000}
          style={{ objectFit: "cover" }}
          height={200}
          className="h-[200px]"
        />
      </div>
      <div className="mt-6">
        <h3 className="text-bold">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  )
}

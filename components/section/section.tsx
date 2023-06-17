type Props = {
  tag: string
  title: string
  description: string
  children: React.ReactNode
}

export const Section: React.FC<Props> = ({
  tag,
  title,
  description,
  children,
}) => {
  return (
    <div>
      <div className="container">
        <div>
          <div className="text-center">
            <span className="uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              {tag}
            </span>
            <h2 className="text-3xl font-black mt-2">{title}</h2>
            <p className="text-gray-400 mt-4">{description}</p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

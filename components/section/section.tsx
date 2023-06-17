type Props = {
  tag: string
  title: string
  description: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export const Section: React.FC<Props> = ({
  tag,
  title,
  description,
  footer,
  children,
}) => {
  return (
    <div className="py-20">
      <div className="container">
        <div>
          <div className="text-center">
            <span className="uppercase font-bold text-gradient">{tag}</span>
            <h2 className="text-3xl font-black mt-2">{title}</h2>
            <p className="text-gray-400 text-lg mt-4">{description}</p>
          </div>
          <div className="mt-16">{children}</div>
          {footer ? <div className="text-center mt-20">{footer}</div> : null}
        </div>
      </div>
    </div>
  )
}

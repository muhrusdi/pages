type Props = {
  children: React.ReactNode
  title: string
}

const Section: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="py-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  )
}

export default Section

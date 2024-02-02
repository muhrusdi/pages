type Props = {
  children: React.ReactNode
}

const Tag: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-xs bg-gray-700 inline-block px-2 rounded-full py-1">
      {children}
    </div>
  )
}

export default Tag

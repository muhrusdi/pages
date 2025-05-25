type Props = {
  title?: string
}

const StackItem = ({ children, title }: React.PropsWithChildren<Props>) => {
  return (
    <div className="flex min-h-full flex-col items-center rounded-md border border-gray-800 p-4">
      <div>{children}</div>
      <h4 className="mt-3 text-center text-sm">{title}</h4>
    </div>
  )
}

export default StackItem

import { MagicCard } from "@/components/magicui/magic-card"

type Props = {
  title?: string
}

const StackItem = ({ children, title }: React.PropsWithChildren<Props>) => {
  return (
    <MagicCard
      gradientColor="#000000"
      gradientFrom="#6a7282"
      gradientTo="#101828"
      className="min-h-full rounded-md [&>:nth-of-type(2)]:bg-gray-950"
    >
      <div className="flex min-h-full flex-col items-center p-4">
        <div>{children}</div>
        <h4 className="mt-3 text-center text-sm">{title}</h4>
      </div>
    </MagicCard>
  )
}

export default StackItem

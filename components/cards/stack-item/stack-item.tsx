import { MagicCard } from "@/components/magicui/magic-card"

type Props = {
  title?: string
}

const StackItem = ({ children, title }: React.PropsWithChildren<Props>) => {
  return (
    <MagicCard className="min-h-full rounded-md">
      <div className="flex min-h-full flex-col items-center p-4">
        <div>{children}</div>
        <h4 className="mt-3 text-center text-sm">{title}</h4>
      </div>
    </MagicCard>
  )
}

export default StackItem

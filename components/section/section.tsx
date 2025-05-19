import { ArrowRight } from "@/assets/icons"
import Link from "next/link"

type Props = {
  children: React.ReactNode
  title: string
  actionLink?: string
}

const Section: React.FC<Props> = ({ children, title, actionLink }) => {
  return (
    <div className="py-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        {actionLink ? (
          <div>
            <div>
              <Link href={actionLink}>
                <ArrowRight
                  className="[&>path]:fill-amber-500"
                  height={12}
                  fontSize={13}
                />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export default Section

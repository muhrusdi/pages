"use client"

type Props = {
  children: React.ReactNode
}

export const Providers: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

import clsx from "clsx"
import styles from "./styles.module.scss"

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
}

type Props = {
  children: React.ReactNode
  size?: "small" | "medium" | "large"
}

export const Button: React.FC<Props> = ({ children, size = "medium" }) => {
  return (
    <button className={clsx(styles.button, { [sizes[size]]: sizes[size] })}>
      {children}
    </button>
  )
}

import { Hello } from "@/assets/icons"
import styles from "./banner.module.scss"
import clsx from "clsx"

const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className={clsx(styles.banner, "grid place-items-center")}>
          <Hello className="mx-auto" />
        </div>
      </div>
    </div>
  )
}

export default Banner

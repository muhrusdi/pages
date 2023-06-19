import { useMemo } from "react"
import styles from "./footer.module.scss"
import clsx from "clsx"
import { Button } from "../button"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className={styles.footer}>
      <div>
        <div className="container">
          <div className={clsx("text-center", styles.git)}>
            <div>
              <h4 className={styles.text}>Get in touch</h4>
              <div className="mt-10">
                <Button>Contact us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-[16rem] relative">
        <div className="container">
          <div className="text-center overflow-hidden">
            <span className={clsx("text-[20rem] font-black", styles.year)}>
              {year}
            </span>
          </div>
        </div>
        <div
          className={clsx(
            "backdrop-blur-lg absolute border-t border-[#121212d4] left-0 right-0 bottom-0",
            styles.blur
          )}
        >
          <div className={styles.line}></div>
          <div className="container">
            <div className="justify-center h-[76px] flex items-center">
              <span className="uppercase font-bold">muhrus.dev</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

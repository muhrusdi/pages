import { GiftTopIcon } from "@heroicons/react/24/outline"
import { DockIcon } from "./dock"
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "../utils"

const DockIcons = () => {
  return (
    <>
      <DockIcon>
        <a
          href="https://github.com/muhrusdi"
          rel="noopener"
          target="_blank"
          className="w-full h-full flex justify-center items-center"
          title="X"
        >
          <GithubIcon />
        </a>
      </DockIcon>
      <DockIcon>
        <a
          href="https://www.instagram.com/muhrusdev"
          rel="noopener"
          target="_blank"
          className="w-full h-full flex justify-center items-center"
          title="X"
        >
          <InstagramIcon />
        </a>
      </DockIcon>
      <DockIcon>
        <a
          href="https://www.linkedin.com/in/muhrusdi/"
          rel="noopener"
          target="_blank"
          className="w-full h-full flex justify-center items-center"
          title="X"
        >
          <LinkedinIcon />
        </a>
      </DockIcon>
      <DockIcon>
        <a
          href="https://x.com/muhrusdev"
          rel="noopener"
          target="_blank"
          className="w-full h-full flex justify-center items-center"
          title="X"
        >
          <XIcon />
        </a>
      </DockIcon>
    </>
  )
}

export default DockIcons

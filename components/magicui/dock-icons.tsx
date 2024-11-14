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
          className="flex h-full w-full items-center justify-center"
          title="Github"
        >
          <GithubIcon />
        </a>
      </DockIcon>
      <DockIcon>
        <a
          href="https://www.instagram.com/muhrusdev"
          rel="noopener"
          target="_blank"
          className="flex h-full w-full items-center justify-center"
          title="Instagram"
        >
          <InstagramIcon />
        </a>
      </DockIcon>
      <DockIcon>
        <a
          href="https://www.linkedin.com/in/muhrusdi/"
          rel="noopener"
          target="_blank"
          className="flex h-full w-full items-center justify-center"
          title="Linkedin"
        >
          <LinkedinIcon />
        </a>
      </DockIcon>
      <DockIcon>
        <a
          href="https://x.com/muhrusdev"
          rel="noopener"
          target="_blank"
          className="flex h-full w-full items-center justify-center"
          title="X"
        >
          <XIcon />
        </a>
      </DockIcon>
    </>
  )
}

export default DockIcons

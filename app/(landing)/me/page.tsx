import { Header } from "@/components/header"
import Content from "./content"
import { CodeBlock } from "@/components/code-block"
import { blockCode } from "./data"

export const dynamic = "force-static"

const About = () => {
  return (
    <div>
      <Header type="me" />
      <Content
        renderServer={
          <CodeBlock innerClassName="h-[400px]" lang="tsx">
            {blockCode}
          </CodeBlock>
        }
      />
    </div>
  )
}

export default About

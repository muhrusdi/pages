import { codeToHtml, type BundledLanguage } from "shiki"

type Props = {
  children: string
  lang: BundledLanguage
  className?: string
}

const CodeBlock = async ({ className, ...props }: Props) => {
  const lang = className?.replace(/language-/, "") || props.lang
  const out = await codeToHtml(props.children, {
    lang: lang,
    theme: "night-owl",
    transformers: [
      {
        pre(node) {
          this.addClassToHast(node, "p-4 rounded-md mt-3 !bg-gray-900")
        },
      },
    ],
  })

  return <div dangerouslySetInnerHTML={{ __html: out }} />
}

export default CodeBlock

import { codeToHtml, type BundledLanguage } from "shiki"
import CopyToClipboard from "./copy-to-clipboard"
import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
} from "@shikijs/transformers"

type Props = {
  children: string
  lang: BundledLanguage
  className?: string
  innerClassName?: string
}

const CodeBlock = async ({
  className,
  innerClassName = "",
  ...props
}: Props) => {
  const lang = className?.replace(/language-/, "") || props.lang
  const out = await codeToHtml(props.children, {
    lang: lang,
    cssVariablePrefix: "shiki",
    theme: "night-owl",
    transformers: [
      transformerMetaHighlight(),
      transformerNotationFocus(),
      transformerNotationHighlight(),
      transformerNotationDiff({
        matchAlgorithm: "v3",
      }),
      {
        pre(node) {
          this.addClassToHast(
            node,
            `p-4
            sm:rounded-md
            !bg-gray-900
            overflow-auto
            [&::-webkit-scrollbar]:h-2
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-transparent
            dark:[&::-webkit-scrollbar-thumb]:bg-gray-800
            ` + innerClassName,
          )
        },
      },
    ],
  })

  return (
    <div className="vp-doc relative pb-3">
      <div dangerouslySetInnerHTML={{ __html: out }} />
      <CopyToClipboard code={props.children} />
    </div>
  )
}

export default CodeBlock

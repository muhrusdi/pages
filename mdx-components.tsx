import type { MDXComponents } from "mdx/types"
import { CodeBlock } from "./components/code-block"

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ...components,
    code: CodeBlock,
  }
}

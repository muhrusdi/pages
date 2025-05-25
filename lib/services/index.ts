import { MetadataType } from "@/types"
import { notFound } from "next/navigation"
import path from "path"
import { cache } from "react"
import fs from "fs"
import slugify from "@sindresorhus/slugify"

type MDXFileType = { default?: any; metadata: MetadataType }
type ValueType = { file: MDXFileType; fileName?: string }

export const mapMdxContent = () => {
  const blogDirectory = path.join("app/(landing)/blog/contents")
  const blogPaths = fs.readdirSync(blogDirectory)

  return blogPaths.reduce(
    async (acc, f) => {
      try {
        const file = await import(`@/app/(landing)/blog/contents/${f}`)
        const map: Record<string, ValueType> = await acc

        map[slugify(file.metadata.title)] = {
          file: file as MDXFileType,
          fileName: f,
        }

        return map
      } catch (error) {
        throw notFound()
      }
    },
    {} as Promise<Record<string, ValueType>>,
  )
}

export const getMdxContent = cache(
  async (slug: string): Promise<{ metadata: MetadataType; default?: any }> => {
    try {
      return await import(`@/app/(landing)/blog/contents/${slug}`)
    } catch (error) {
      throw notFound()
    }
  },
)

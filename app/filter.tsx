"use client"
import { use, useCallback } from "react"
import { filterAction } from "./actions"
import { LoadingContext } from "./providers"
import { revalidatePath } from "next/cache"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { generateQueries } from "@/utils"

const AsyncFilter = ({ sort_by, page }) => {
  const { startTransition } = use(LoadingContext)
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleAction = async (formData: FormData) => {
    let name

    for (const key of formData.keys()) {
      name = key
    }

    const queriesString = generateQueries({
      ...Object.fromEntries(searchParams.entries()),
      ...Object.fromEntries(formData.entries()),
    })

    startTransition(() => {
      router.push(pathname + queriesString)
    }, name)
  }

  return (
    <div>
      <form action={handleAction}>
        <button type="submit" name="sort_by" value="popularity.desc">
          Desc
        </button>
        <button type="submit" name="sort_by" value="popularity.asc">
          Asc
        </button>
        <button type="submit" name="page" value={Number(page || 0) + 1}>
          Page {Number(page || 0) + 1}
        </button>
      </form>
    </div>
  )
}

export default AsyncFilter

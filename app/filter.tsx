"use client"
import { useCallback, useContext } from "react"
import { filterAction } from "./actions"
import { StoreContext } from "./providers"
import { revalidatePath } from "next/cache"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const AsyncFilter = ({ sort_by, page }) => {
  const { startTransition } = useContext(StoreContext)
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const handleAction = async (formData: FormData) => {
    startTransition(() => {
      // filterAction(formData)
      router.push(
        pathname + "?" + createQueryString("sort_by", formData.get("sort_by")),
      )
    })
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
        <button type="submit" name="page" value={Number(page?.value || 0) + 1}>
          Page {Number(page?.value || 0) + 1}
        </button>
      </form>
    </div>
  )
}

export default AsyncFilter

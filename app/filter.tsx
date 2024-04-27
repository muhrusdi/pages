"use client"
import { useContext } from "react"
import { filterAction } from "./actions"
import { StoreContext } from "./providers"
import { revalidatePath } from "next/cache"
import { useRouter } from "next/navigation"

const AsyncFilter = ({ sort_by, page }) => {
  const { startTransition } = useContext(StoreContext)
  const router = useRouter()

  const handleAction = async (formData: FormData) => {
    startTransition(() => {
      filterAction(formData)
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

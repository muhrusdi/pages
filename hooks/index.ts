"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export function useFilterSearch() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const query = new URLSearchParams(searchParams)

  const filters = Object.fromEntries(query.entries())

  const setFilter = useCallback(
    (keys: Record<string, string> | string, val?: string) => {
      let params = new URLSearchParams(filters)

      if (typeof keys === "object") {
        params = new URLSearchParams({ ...filters, ...keys })
      } else {
        if (keys && val) {
          params.set(keys, val)
        } else if (keys) {
          params.delete(keys)
        }
      }

      router.push(pathname + "?" + params?.toString())
    },
    [filters, router, pathname]
  )

  const clearFilter = useCallback(() => {
    router.push(pathname)
  }, [router, pathname])

  const removeFilter = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams)

      params.delete(key)
      router.push(pathname + "?" + params.toString())
    },
    [router, pathname, searchParams]
  )

  return {
    filters,
    setFilter,
    clearFilter,
    removeFilter,
    searchParams,
  } as const
}

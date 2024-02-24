"use client"
import { UseFormHook } from "@/types"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { SyntheticEvent, useCallback, useTransition } from "react"
import { useFormState } from "react-dom"

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

      router.replace(pathname + "?" + params?.toString())
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

export function useForm<FormState>(
  action: (
    formState: Awaited<FormState>,
    formData: FormData
  ) => Promise<FormState>,
  initialState: Awaited<FormState>
): UseFormHook<FormState> {
  const [isLoading, startTransition] = useTransition()
  const [formState, formAction] = useFormState(action, initialState)

  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    startTransition(() => {
      formAction(formData)
    })
  }

  return {
    formState,
    isLoading,
    formAction,
    onSubmit,
  }
}

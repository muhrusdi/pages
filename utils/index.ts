import { RecordType } from "@/types"
import { format } from "date-fns"
import { ReadonlyURLSearchParams } from "next/navigation"
import numeral from "numeral"
import { ClassNameValue, twMerge } from "tailwind-merge"

export const isBrowser = typeof window !== "undefined"

export const formatDate = (val: Date | number, str = "dd-MMM-yy") => {
  return format(val, str)
}

export const money = (val: number) => {
  return numeral(val).format("0,0")
}

export const cn = (...classList: ClassNameValue[]) => {
  return twMerge(classList)
}

export const pending = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export const generateQueries = (query?: RecordType) => {
  const obj = new URLSearchParams(query)
  if (obj) {
    return "?" + obj.toString()
  }

  return ""
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`

  return `${pathname}${queryString}`
}

export const generateParams = (params?: Array<string | number>) => {
  let paramsString = ""

  if (params) {
    params.forEach(item => {
      paramsString += `/${item}`
    })
  }

  return paramsString
}

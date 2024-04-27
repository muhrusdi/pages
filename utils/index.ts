import { RecordType } from "@/types"
import { format } from "date-fns"
import { ReadonlyURLSearchParams } from "next/navigation"
import numeral from "numeral"

export const isBrowser = typeof window !== "undefined"

// const dateIsValid = (date: string) => {
//   return !Number.isNaN(new Date(date).getTime())
// }

export const formatDate = (val: Date | number, str = "dd-MMM-yy") => {
  return format(val, str)
}

export const money = (val: number) => {
  return numeral(val).format("0,0")
}

export const wait = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export const generateQueries = (query?: RecordType) => {
  const obj = new URLSearchParams(query)
  if (query) {
    return "?" + obj.toString()
  }

  return ""
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
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

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

type StringRecordType = Record<string, any>

export const generateQueries = (query?: StringRecordType) => {
  const obj = new URLSearchParams()
  if (query) {
    Object.keys(query).forEach(key => {
      if (query[key]) {
        obj.set(key, query[key])
      }
    })
    return "?" + obj.toString()
  }

  return ""
}

export const getRawQuery = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`

  return `${pathname}${queryString}`
}

export const generateParams = (params?: StringRecordType) => {
  let paramsString = ""
  if (params) {
    if (Array.isArray(params)) {
      params.forEach(item => {
        paramsString += `/${item}`
      })
    } else {
      Object.keys(params).forEach(key => {
        paramsString += `/${(params as StringRecordType)[key]}`
      })
    }
  }

  return paramsString
}

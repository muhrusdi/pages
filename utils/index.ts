import { RecordType } from "@/types"
import { format, isValid } from "date-fns"
import { ReadonlyURLSearchParams } from "next/navigation"
import numeral from "numeral"
import { ClassNameValue, twMerge } from "tailwind-merge"

export const isBrowser = typeof window !== "undefined"

export const formatDate = (val: Date | number, str = "dd MMMM yyyy") => {
  return isValid(val) ? format(val, str) : "-"
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

export const totalOfExper = () => {
  const start = new Date(new Date().setFullYear(2018)).getFullYear()
  const current = new Date().getFullYear()

  return current - start
}

export const menuItemAnimate = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
  },
  transition: {
    delay: 0.2,
    type: "spring",
    visualDuration: 0.3,
    bounce: 0.4,
  },
  exit: {
    opacity: 0,
    y: 10,
  },
}

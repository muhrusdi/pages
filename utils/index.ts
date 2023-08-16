import { format } from "date-fns"
import numeral from "numeral"

export const isBrowser = typeof window !== "undefined"

// const dateIsValid = (date: string) => {
//   return !Number.isNaN(new Date(date).getTime())
// }

export const formatDate = (val?: string, str = "dd-MMM-yy") => {
  return format(new Date(val || ""), str)
}

export const money = (val: number) => {
  return numeral(val).format("0,0")
}

export const wait = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

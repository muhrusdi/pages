import { APIs } from "@/utils/endpoints"

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

type Options = {
  params?: Record<string, any>
  query?: Record<string, any>
  options?: RequestInit
  body?: FormData | string
}

export const query = (path: string, options?: RequestInit) =>
  fetch(BASE_URL + path, { cache: "no-store", ...options })

export type PathsType = typeof APIs

export type PathsKeyType = {
  [K in keyof PathsType]: string
}

export const getData = async <TData>(
  path: keyof PathsKeyType,
  options?: Pick<Options, "options" | "params" | "query">
) => {
  let paramsString = ""
  let queriesString = ""

  if (options?.params) {
    for (const key in options.params) {
      paramsString += `/${options.params[key]}`
    }
  }

  if (options?.query) {
    queriesString = "?"
    for (const key in options.params) {
      queriesString += `${key}=${options.params[key]}&`
    }
  }

  const res = await query(APIs[path] + paramsString + queriesString)

  if (!res.ok) {
    throw new Error("Failed to fetch data on the " + BASE_URL + APIs[path])
  }

  return res.json() as TData
}

export const postData = async (path: keyof PathsKeyType, options?: Options) => {
  let paramsString = ""
  let queriesString = ""

  if (options?.params) {
    for (const key in options.params) {
      paramsString += `/${options.params[key]}`
    }
  }

  if (options?.query) {
    queriesString = "?"
    for (const key in options.query) {
      queriesString += `${key}=${options.query[key]}&`
    }
  }

  const res = await query(APIs[path] + paramsString + queriesString, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: options?.body,
  })

  if (!res.ok) {
    throw new Error("Failed to post data on the " + BASE_URL + APIs[path])
  }

  return res
}

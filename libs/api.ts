import { generateParams, generateQueries } from "@/utils"
import { APIs } from "@/utils/endpoints"
import { cookies } from "next/headers"

const BASE_URL = process.env.API_BASE_URL
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

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
  const paramsString = generateParams(options?.params)
  const queriesString = generateQueries(options?.query)

  const accessToken = cookies().get("accessToken") || ACCESS_TOKEN

  const headers: Record<string, string> = {}

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`
  }

  const res = await query(APIs[path] + paramsString + queriesString, {
    headers: {
      ...headers,
    },
  })

  console.log(res)

  if (!res.ok) {
    throw new Error(
      `${res.status} ${res.statusText}. Failed to fetch data on the ${
        BASE_URL + APIs[path]
      }`
    )
  }

  return res.json() as TData
}

export const postData = async (path: keyof PathsKeyType, options?: Options) => {
  const paramsString = generateParams(options?.params)

  const res = await query(APIs[path] + paramsString, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: options?.body,
  })

  if (!res.ok) {
    throw new Error("Failed to post data on the " + BASE_URL + APIs[path])
  }

  return res.json()
}

export const GET = () => {}

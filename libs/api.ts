import { generateParams, generateQueries } from "@/utils"
import { APIs } from "@/utils/endpoints"

const BASE_URL = process.env.API_BASE_URL

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

  const res = await query(APIs[path] + paramsString + queriesString, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjcyY2U0MjY4MDk1MTI4OGE2OWZjZmE2YTA3NTkyOSIsInN1YiI6IjY1MGUxNmUwZTFmYWVkMDExZDVkNDhlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rgswMtK-5K4JnHk2h9ExgXCYGioC5e6d-_iqbKeGqAs",
    },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data on the " + BASE_URL + APIs[path])
  }

  return res.json() as TData
}

export const postData = async (path: keyof PathsKeyType, options?: Options) => {
  const paramsString = generateParams(options?.params)
  const queriesString = generateQueries(options?.query)

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

export const GET = () => {}

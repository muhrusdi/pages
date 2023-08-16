import { APIs } from "@/utils/endpoints"

const BASE_URL = process.env.API_BASE_URL

export const query = (path: string, options?: RequestInit) =>
  fetch(BASE_URL + path, options)

export type PathsType = typeof APIs

export type PathsKeyType = {
  [K in keyof PathsType]: string
}

export const getData = async <TData>(path: keyof PathsKeyType) => {
  const res = await query(APIs[path])

  if (!res.ok) {
    throw new Error("Failed to fetch data on the " + BASE_URL + APIs[path])
  }

  return res.json() as TData
}

export const postData = async (path: keyof PathsKeyType, body: FormData) => {
  const res = await query(APIs[path], {
    method: "post",
    body,
  })

  if (!res.ok) {
    throw new Error("Failed to post data on the " + BASE_URL + APIs[path])
  }

  return res
}

import { APIs } from "@/utils/endpoints"

const BASE_URL = process.env.API_BASE_URL

const query = (path: string) => fetch(BASE_URL + path)

type PathsType = typeof APIs

type PathsKeyType = {
  [K in keyof PathsType]: string
}

export const getData = async <TData>(path: keyof PathsKeyType) => {
  const res = await query(APIs[path])

  if (!res.ok) {
    throw new Error("Failed to fetch data on the " + BASE_URL + APIs[path])
  }

  return res.json() as TData
}

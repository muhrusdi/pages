import { generateParams, generateQueries } from "@/utils"
import { APIs } from "@/utils/endpoints"
import { axios } from "../hooks/api/axios"
import { cookies } from "next/headers"
import { AxiosHeaders } from "axios"

const BASE_URL = process.env.HOST_URL

type Options = {
  params?: Array<string | number>
  query?: Record<string, any>
  options?: RequestInit
  body?: FormData | string
}

export const query = (
  path: string,
  options?: {
    headers?: AxiosHeaders
    method?: string
    body?: FormData | string
  }
) =>
  axios(BASE_URL + path, {
    ...options,
  }).then(d => d.data)

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

  const accessToken = cookies().get("accessToken")?.value

  const _headers: AxiosHeaders = new AxiosHeaders()

  if (accessToken) {
    _headers.set("Authorization", `Bearer ${accessToken}`)
  }

  const res = await query(APIs[path] + paramsString + queriesString, {
    headers: _headers,
  })

  return res as TData
}

export const postData = async <TData>(
  path: keyof PathsKeyType,
  options?: Options
) => {
  const paramsString = generateParams(options?.params)

  const res = await axios({
    url: APIs[path] + paramsString,
    data: options?.body,
    method: "post",
  }).then(d => d.data)

  return res as TData
}

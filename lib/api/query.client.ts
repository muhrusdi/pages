import { generateParams, generateQueries } from "@/utils"
import { APIs } from "@/utils/endpoints"
import { axios } from "./axios"
import { cookies } from "next/headers"
import { AxiosHeaders, AxiosRequestConfig } from "axios"

type Options = {
  params?: Array<string | number>
  query?: Record<string, any>
  options?: RequestInit
} & AxiosRequestConfig<string | FormData>

export type PathsType = typeof APIs

export type PathsKeyType = {
  [K in keyof PathsType]: string
}

export const getData = async <TData>(
  path: keyof PathsKeyType,
  options?: Pick<Options, "options" | "params" | "query">,
) => {
  const paramsString = generateParams(options?.params)
  const queriesString = generateQueries(options?.query)

  const { get } = await cookies()
  const accessToken = get("accessToken")?.value

  const _headers: AxiosHeaders = new AxiosHeaders()

  if (accessToken) {
    _headers.set("Authorization", `Bearer ${accessToken}`)
  }

  const res = axios(APIs[path] + paramsString + queriesString, {
    headers: _headers,
  }).then(d => d.data)

  return res as TData
}

export const postData = async <TData>(
  path: keyof PathsKeyType,
  options?: Options,
) => {
  const paramsString = generateParams(options?.params)

  const res = await axios({
    url: APIs[path] + paramsString,
    method: "post",
    ...options,
  }).then(d => d.data)

  return res as TData
}

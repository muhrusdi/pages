import {
  QueryClient,
  useMutation as mutation,
  useQuery as query,
} from "@tanstack/react-query"
import { KeyofPathsKeyType, PathsKeyType } from "@/types/api"
import { APIs } from "@/utils/endpoints"
import { generateParams, generateQueries } from "@/utils"
import axios, { AxiosRequestHeaders } from "axios"

axios.defaults.baseURL = process.env.API_HOST

export { axios }

axios.interceptors.request.use(
  function (config) {
    if (config?.headers?.get("x-request-id") === "basic-location") {
      // config.baseURL = API_HOST_LOCATION
    } else {
      config.baseURL = process.env.API_HOST
    }

    if (config?.headers?.get("x-request-id") === "auth") {
      config.auth = {
        // the next it will be handled on the route API for the security
        username: process.env.USERNAME_API_KEY || "",
        password: process.env.PASSWORD_API_KEY || "",
      }

      return config
    } else if (config?.headers?.get("x-request-id") === "basic-location") {
      // the next it will be handled on the route API for the security
      config.auth = {
        username: process.env.USERNAME_API_LOC_KEY || "",
        password: process.env.PASSWORD_API_LOC_KEY || "",
      }

      return config
    }

    config.headers = {
      // Authorization: `Bearer ${cookie}`,
      ...config.headers,
    } as AxiosRequestHeaders

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response?.status === 401 || error.response?.status === 403) {
      if (typeof window !== "undefined") {
        const path = window.location.pathname
        if (!path.startsWith("/auth")) {
          // window.location.href = `/auth/${type}/login`
        }
      }
    }
    return Promise.reject(error)
  }
)

let controller: AbortController | null = null

export const invalidateQueries = (
  keys: KeyofPathsKeyType[],
  client: QueryClient
) => {
  return client.invalidateQueries({ queryKey: keys })
}

export const useQuery = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData
>(
  path: keyof PathsKeyType,
  params?: any
) => {
  const paramsString = generateParams(params?.variables?.params)
  const queriesString = generateQueries(params?.variables?.query)

  if (controller) controller.abort()

  const signal = controller?.signal

  return query({
    queryKey: [
      path,
      { ...params?.variables?.query, ...params?.variables?.params },
    ],
    queryFn: async () => {
      return axios(APIs[path] + paramsString + queriesString, {
        signal,
        headers: params?.headers,
      }).then(d => d.data)
    },
    ...params?.options,
  })
}

export const useMutation = <
  TData = unknown,
  TError = unknown,
  TContext = unknown
>(
  path: keyof PathsKeyType,
  params?: any
) => {
  const paramsString = generateParams(params?.variables?.params)
  const queriesString = generateQueries(params?.variables?.query)

  if (controller) controller.abort()

  const signal = controller?.signal

  return mutation({
    mutationFn: async formData => {
      const d = await axios({
        url: APIs[path] + paramsString + queriesString,
        data: formData,
        method: params?.method || "post",
        signal,
        headers: params?.headers,
      })
      return d.data
    },
    ...params?.options,
  })
}

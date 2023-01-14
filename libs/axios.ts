import { getToken } from "@/utils"
import fetch, { AxiosError, AxiosHeaders } from "axios"

export const eq = (a: unknown, b: unknown) => a === b

export  const IS_PRODUCTION = eq(process.env.NODE_ENV, "production")

export const IS_DEVELOPMENT = !IS_PRODUCTION

export const API_HOST = process.env.NEXT_PUBLIC_API_HOST

export const axios = fetch.create({
  baseURL: `https://${API_HOST}`,
})

axios.interceptors.request.use((config) => {
  if (config.url === "/v1/admin/login") {
    config.auth = {
      username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME || "",
      password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || "",
    }

    return config
  }

  (config.headers as AxiosHeaders).set("Authorization", "Bearer " + getToken() as string)

  return config
}, (error: AxiosError) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  return response
}, (error: AxiosError) => {
  if (error.response?.status === 401) {
    if (typeof window !== "undefined") {
      if (
        window.location.pathname !== "/auth/login"
      ) {
        window.location.href = "/auth/login"
      }
    }
  }
  return Promise.reject(error)
})

export const getBasePath = () => {
  const version = "v1"
  return `/${version}/`
}

export const serviceURL = (path: string) => {
  return getBasePath() + path
}
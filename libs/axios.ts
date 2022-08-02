import { getToken } from "@/utils"
import axiosFetch from "axios"

export const eq = (a: unknown, b: unknown) => a === b

export  const IS_PRODUCTION = eq(process.env.NODE_ENV, "production")

export const IS_DEVELOPMENT = !IS_PRODUCTION

export const API_HOST = process.env.NEXT_PUBLIC_API_HOST


axiosFetch.defaults.baseURL = `https://${API_HOST}`

axiosFetch.interceptors.request.use(function (config) {
  if (config.url === "/v1/admin/login") {
    config.auth = {
      username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME || "",
      password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || "",
    }

    return config
  } 

  config.headers = {
    ...config.headers,
    Authorization: "Bearer " + getToken() as string
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axiosFetch.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 401) {
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

export const axios = axiosFetch

export const getBasePath = () => {
  const version = "v1"
  return `/${version}/`
}

export const serviceURL = (path: string) => {
  return getBasePath() + path
}
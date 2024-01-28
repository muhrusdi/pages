import axios, { AxiosRequestHeaders } from "axios"

axios.defaults.baseURL = process.env.HOST_URL

export { axios }

axios.interceptors.request.use(
  function (config) {
    if (config?.headers?.get("x-request-id") === "basic-location") {
    } else {
      config.baseURL = process.env.HOST_URL
    }

    if (config?.headers?.get("x-request-id") === "auth") {
      config.auth = {
        username: process.env.USERNAME_API_KEY || "",
        password: process.env.PASSWORD_API_KEY || "",
      }

      return config
    } else if (config?.headers?.get("x-request-id") === "basic-location") {
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

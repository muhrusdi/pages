import { APIs } from "@/utils/endpoints"
import {
  DefinedInitialDataOptions,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
} from "@tanstack/react-query"
import { AxiosHeaders } from "axios"

export type PathsType = typeof APIs

export type PathsKeyType = {
  [K in keyof PathsType]: string
}

export type KeyofPathsKeyType = keyof PathsKeyType

export type ParamsType<
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends QueryKey = QueryKey
> = {
  options?:
    | DefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>
    | UndefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>
    | UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
  headers?: AxiosHeaders
  baseURL?: string
  variables?: {
    query?: Record<string, any>
    params?: Array<string | number> | Record<string, any>
  }
}

import {
  DefaultError,
  DefinedInitialDataOptions,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  useMutation as mutation,
  useQuery as query,
} from "@tanstack/react-query"
import {
  KeyofPathsKeyType,
  MutationParamsType,
  ParamsType,
  PathsKeyType,
} from "@/types/api"
import { APIs } from "@/utils/endpoints"
import { generateParams, generateQueries } from "@/utils"
import { axios } from "./axios"
import { AxiosHeaders } from "axios"

let controller: AbortController | null = null

export const invalidateQueries = (
  keys: KeyofPathsKeyType[],
  client: QueryClient
) => {
  return client.invalidateQueries({ queryKey: keys })
}

export const useQuery = <
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData
>(
  path: keyof PathsKeyType,
  params?: ParamsType<TQueryFnData, TError, TData>,
  queryClient?: QueryClient
) => {
  const paramsString = generateParams()
  const queriesString = generateQueries(params?.variables?.query)

  if (controller) controller.abort()

  const signal = controller?.signal

  return query<TQueryFnData, TError, TData>(
    {
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
    },
    queryClient
  )
}

export const useMutation = <
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown
>(
  path: keyof PathsKeyType,
  params?: MutationParamsType<TData, TError, TVariables, TContext>
) => {
  const paramsString = generateParams(params?.variables?.params)
  const queriesString = generateQueries(params?.variables?.query)

  if (controller) controller.abort()

  const signal = controller?.signal

  return mutation<TData, TError, TVariables, TContext>({
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
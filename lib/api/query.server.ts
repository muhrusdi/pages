import {
  DefaultError,
  QueryClient,
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
import { axios, axiosQuery } from "./axios"

export const invalidateQueries = (
  keys: KeyofPathsKeyType[],
  client: QueryClient,
) => {
  return client.invalidateQueries({ queryKey: keys })
}

export const useQuery = <
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
>(
  path: keyof PathsKeyType,
  params?: ParamsType<TQueryFnData, TError, TData>,
  queryClient?: QueryClient,
) => {
  const paramsString = generateParams(params?.variables?.params)
  const queriesString = generateQueries(params?.variables?.query)

  return query<TQueryFnData, TError, TData>(
    {
      queryKey: [
        path,
        { ...params?.variables?.query, ...params?.variables?.params },
      ],
      queryFn: async ({ signal }) => {
        return axiosQuery(APIs[path] + paramsString + queriesString, {
          signal,
          headers: params?.headers,
        })
      },
      ...params?.options,
    },
    queryClient,
  )
}

export const useMutation = <
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown,
>(
  path: keyof PathsKeyType,
  params?: MutationParamsType<TData, TError, TVariables, TContext>,
) => {
  const paramsString = generateParams(params?.variables?.params)
  const queriesString = generateQueries(params?.variables?.query)

  return mutation<TData, TError, TVariables, TContext>({
    mutationFn: async formData => {
      const res = await axios({
        url: APIs[path] + paramsString + queriesString,
        data: formData,
        method: params?.method || "post",
        headers: params?.headers,
      }).then(d => d.data)

      return res
    },
    ...params?.options,
  })
}

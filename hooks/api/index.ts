import {
  useMutation as ReactMutation,
  useQuery as ReactQuery,
} from "@tanstack/react-query"
import { ParamsType } from "@/types"
import { PathsKeyType, query } from "@/libs/api"
import { APIs } from "@/utils/endpoints"

export const useQuery = (
  path: keyof PathsKeyType,
  { options, variables }: ParamsType
) => {
  let paths = "?size=10&"
  if (variables) {
    Object.keys(variables).forEach(key => {
      paths += `${key}=${variables[key]}&`
    })
  }
  return ReactQuery(
    [path, variables],
    () => {
      return query(APIs[path])
    },
    options
  )
}

export const useMutation = (
  path: keyof PathsKeyType,
  { options }: ParamsType
) => {
  return ReactMutation((formData: FormData) => {
    return query(APIs[path], {
      method: "post",
      body: formData,
    })
  }, options)
}

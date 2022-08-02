import { useMutation, useQuery } from "@tanstack/react-query"
import { serviceURL, axios } from "@/libs/axios"
import { ParamsType } from "@/types"

export const useSampleApi = ({options, variables}: ParamsType) => {
  let paths = "?size=10&"
  if (variables) {
    Object.keys(variables).forEach(key => {
      paths += `${key}=${variables[key]}&`
    })
  }
  return useQuery(["sample-list", {...variables}], () => {
    return axios.get(serviceURL("sample-api" + paths))
  }, options)
}


export const useSampleMutation = ({options}: ParamsType) => {
  return useMutation((formData) => {
    return axios.post(serviceURL("sample mutaion"), formData)
  }, options)
}
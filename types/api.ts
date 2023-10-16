import { APIs } from "@/utils/endpoints"

export type PathsType = typeof APIs

export type PathsKeyType = {
  [K in keyof PathsType]: string
}

export type KeyofPathsKeyType = keyof PathsKeyType

export type SearchParamsType<T = null> = Promise<
  | T
  | {
      [key: string]: string | string[] | undefined
    }
>

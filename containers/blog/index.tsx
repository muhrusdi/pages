import { wait } from "@/utils"

const getData = async () => {
  await wait(6000)
  return {
    name: "Muhammad Rusdi",
  }
}

export const BlogList = async () => {
  const data = await getData()
  return <div>{JSON.stringify(data)}</div>
}

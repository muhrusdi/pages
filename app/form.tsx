"use client"
import { cookies } from "next/headers"
import { useActionState } from "react-dom"
import { actions } from "./actions"

const Form = () => {
  // const sort_by = cookies().get("sort_by")
  // const page = cookies().get("page")

  // console.log("--000", sort_by?.value)
  // console.log("--0022", page?.value)
  const [state] = useActionState(actions, null)
  return (
    <div>
      <form action={actions}>
        <button name="sort_by" value="popularity.desc">
          Desc
        </button>
        <button name="sort_by" value="popularity.asc">
          Asc
        </button>
        <button name="page" value={Number(state?.page) + 1 || 1}>
          Page {Number(state?.sort_by || 0) + 1}
        </button>
      </form>
    </div>
  )
}

export default Form

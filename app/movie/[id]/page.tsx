import { Await } from "@/components/await"
import { getData } from "@/lib/api"
import Link from "next/link"

const DetailMovie = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div>
        <Link href="/">Back</Link>
      </div>
      <Await
        data={getData("/movie/:id", {
          params: [params.id],
        })}
      >
        {detail => <div>{JSON.stringify(detail)}</div>}
      </Await>
    </div>
  )
}

export default DetailMovie

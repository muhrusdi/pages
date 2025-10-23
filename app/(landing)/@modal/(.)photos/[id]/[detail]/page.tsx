import { Modal } from "./modal"

export const dynamic = "force-static"

const Detail = () => {
  return (
    <div className="bg-red absolute inset-0 z-10">
      <Modal />
    </div>
  )
}

export default Detail

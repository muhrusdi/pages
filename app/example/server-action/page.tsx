import { Await } from "@/components/await"
import Form from "./form"
import { getUsers } from "@/drizzle/db"

const ServerAction = () => {
  console.log("---test")
  return (
    <div>
      <h1>Server Action Form</h1>
      <div className="flex space-x-2">
        <div className="w-1/2">
          <div className="rounded-lg bg-gray-100 p-4">
            <ul>
              <Await sleep={4000} data={getUsers()}>
                {data => data.map(item => <li key={item.id}>{item.name}</li>)}
              </Await>
            </ul>
          </div>
        </div>
        <div className="w-1/2">
          <div className="rounded-lg bg-gray-100 p-4">
            <h2>Create user</h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServerAction

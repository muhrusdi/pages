type Props = {
  name: string
  role: string
  year: string
  type?: "remote"
}

const CompanyItem: React.FC<Props> = ({ name, role, year, type }) => {
  return (
    <div className="flex sm:flex-row flex-col-reverse justify-between">
      <div>
        <div className="flex space-x-2 items-center">
          <div>
            <h4>
              {name}
              {"  "}
              {type ? (
                <span className="inline-block bg-gray-700 px-2 rounded-full text-sm">
                  Remote
                </span>
              ) : null}
            </h4>
          </div>
        </div>
        <p>{role}</p>
      </div>
      <div>
        <p>{year}</p>
      </div>
    </div>
  )
}

export default CompanyItem

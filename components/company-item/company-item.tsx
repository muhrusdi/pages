type Props = {
  name: string
  role: string
  year: string
  type?: "remote"
}

const CompanyItem: React.FC<Props> = ({ name, role, year, type }) => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex space-x-2 items-center">
          <div>
            <h4>{name}</h4>
          </div>
          {type ? (
            <div>
              <span className="block bg-gray-700 px-2 rounded-full text-sm">
                Remote
              </span>
            </div>
          ) : null}
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

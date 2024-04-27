"use client"
import { useRouter } from "next/navigation"
import styles from "./styles.module.scss"

const Filter = ({ genres }) => {
  const router = useRouter()
  return (
    <div className={styles.filter}>
      <div>
        <h4 className="font-bold">Filter</h4>
      </div>
      <ul>
        {["1", "2", "3", "4", "5"].map((genre, i) => (
          <li key={i}>
            <label key={genre}>
              <input
                name={genre}
                type="checkbox"
                onChange={e => {
                  let { name, checked } = e.target

                  // Add or remove this genre based on its checked state
                  let newGenres = checked
                    ? [...genres, name]
                    : genres.filter(g => g !== name)

                  // Create a URLSearchParams instance from the new list of genres
                  let newParams = new URLSearchParams(
                    newGenres.map(genre => ["genre", genre])
                  )

                  // Push the new search params to the URL
                  router.push(`?${newParams}`)
                }}
              />
              Genre {genre}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter

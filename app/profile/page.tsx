import type { NextPage } from "next"
import Image from "next/image"
import styles from "@/styles/global.module.scss"
import clsx from "clsx"
import Link from "next/link"

const Profile: NextPage = () => {
  return (
    <div className="text-center">
      <div>
        <Image
          src="https://res.cloudinary.com/muhrusdi/image/upload/v1616335341/thumb-612467.png"
          width={200}
          height={200}
          className="rounded-full mx-auto"
          alt=""
        />
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-bold">Muhammad Rusdi</h2>
        <p className="mt-2 text-gray-400 text-lg">Frontend Engineer</p>
      </div>
      <div className="text-left mt-14 art space-y-5 text-gray-200 ">
        <p>
          Experienced and versatile Frontend Engineer with over 5+ years of
          hands-on experience in building dynamic and responsive web
          applications.
        </p>
        <p>
          Skilled in utilizing both React and Vue.js frameworks to develop
          intuitive user interfaces and deliver seamless user experiences.
          Proficient in HTML5, CSS3, and JavaScript, with a strong focus on
          frontend architecture and state management.
        </p>
        <p>
          Proven ability to translate complex designs into clean and efficient
          code, ensuring pixel-perfect implementation. Adept at collaborating
          with cross-functional teams, including designers and backend
          developers, to drive project success.
        </p>
        <p>
          Continuously exploring emerging trends and best practices in the
          frontend ecosystem to deliver cutting-edge solutions that optimize
          performance and maintainability. Committed to delivering high-quality
          code while meeting project timelines and exceeding client
          expectations.
        </p>
        <div className="pt-8">
          <Image
            src="https://res.cloudinary.com/muhrusdi/image/upload/v1669999334/sign-mr.png"
            width={160}
            height={600}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Profile

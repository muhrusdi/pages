import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "containers/layout"
import Playground from "components/playground"
import { formatDate } from "utils"

export const Header: React.FC = ({title, featuredImage, date}) => (
  <header className="text-center mt-12">
    <div className="container">
      <h1 className="text-5xl font-black leading-tight">{title}</h1>
      <ul className="mt-10">
        <li>
          <span className="text-blueGray-400">{formatDate(date, "EEEE, dd MMM yyyy")}</span>
        </li>
      </ul>
      <img className="object-cover rounded-lg mt-14 w-full" style={{height: 500}} src={featuredImage} alt=""/>
    </div>
  </header>
)

const DetailBlog: React.FC = () => {
  return (
    <Layout>
      <div>
        <Header/>
        <div className="container max-w-2xl mt-14">
          <article className="prose prose-xl">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsum perspiciatis dicta, obcaecati, suscipit voluptatum voluptates sed ipsa saepe fugit quas beatae temporibus, atque voluptas pariatur dolore facere odit eos.</p>
            <Playground/>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default DetailBlog
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "containers/layout"
import Playground from "components/playground"

const DetailBlog: React.FC = () => {
  return (
    <Layout>
      <div>
        <header className="text-center mt-12">
          <div className="container max-w-3xl">
            <h1 className="text-5xl font-black leading-tight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quaerat?</h1>
          </div>
          <StaticImage className="object-cover rounded-lg mt-14" style={{height: 500}} src="https://images.unsplash.com/photo-1618675962429-3f82741be252?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" alt=""/>
        </header>
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
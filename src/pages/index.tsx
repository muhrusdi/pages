import React from "react"
import { useQuery, gql } from "@apollo/client"
import { useStaticQuery, graphql } from "gatsby"
// import LatestBlog from "components/blog/lastest"
import PlayCode from "components/playcode"
import BlogItem from "components/blog/blog-item"
import WorkItem, { WorkItemLoading } from "components/work/work-item"
import Layout from "containers/layout"
import SectionHeader from "components/blog/header"
import { transformBlog } from "utils/"

const Home: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        limit: 6
        sort: {fields: childMdx___frontmatter___publishedOn, order: DESC}
        filter: {
          childMdx: {
            frontmatter: {isPublished: {eq: true}}
          }
          sourceInstanceName: { eq: "blogs" }
        }
      ) {
        edges {
          node {
            childMdx {
              frontmatter {
                title
                publishedOn
                isPublished
                seoTitle
                abstract
                featuredImage {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                  }
                }
              }
              fields {
                slug
              }
              body
              slug
              excerpt
            }
          }
        }
      }
      allContentfulArticle {
        edges {
          node {
            title
            createdAt
            isPublished
            seoTitle
            abstract {
              abstract
            }
            featuredImage {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  const WORK_COLLECTION = gql`
    query GetWorkCollection {
      workCollection(limit: 6) {
        items {
          title
          sys {
            id
          }
          description
          featuredImage {
            url
          }
          techsCollection {
            items {
              ... on TechIcon {
                name
              }
            }
          }
          category {
            ... on WorkCategory {
              title
            }
          }
        }
      }
    }
  `

  const { loading, data: dataWorks } = useQuery(WORK_COLLECTION)

  // const [firstBlog, ...blogRest] = data.allFile.edges

  const composeBlogsSort = transformBlog(data)

  console.log(composeBlogsSort)

  return (
    <Layout>
      <div>
        <div className="py-8">
          <PlayCode/>
        </div>
        <div className="mt-24">
          <SectionHeader
            tag="Blogs"
            title="Helpful Resources"
            description="Here you&lsquo;ll find my collected writing on topics ranging from design and coding."
            link="/blog"
          />
          <ul className="grid grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
              composeBlogsSort.map(({node}, key) => {
                if (key < 6) {
                  return process.env.NODE_ENV !== "production" ? (
                    <li key={key}>
                      <BlogItem data={node.childMdx || node}/>
                    </li>
                  ) : (
                    node?.childMdx?.frontmatter?.isPublished || node.isPublished ? (
                      <li key={key}>
                        <BlogItem data={node.childMdx || node}/>
                      </li>
                    ) : null
                  )
                }
              })
            }
          </ul>
          {/* {
            blogRest.length > 5 ? (
              <ViewAll link="blog"/>
            ) : null
          } */}
        </div>
        <div className="mt-36">
          <SectionHeader
            tag="Works"
            title="Our Projects"
            description="I work with forward-thinking people to design and build interactive, accessible websites and products."
            link="/work"
          />
          <ul className="grid grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
              loading ? (
                <>
                  <li>
                    <WorkItemLoading/>
                  </li>
                  <li>
                    <WorkItemLoading/>
                  </li>
                  <li>
                    <WorkItemLoading/>
                  </li>
                </>
              ) : null
            }
            {
              dataWorks ? (
                dataWorks.workCollection.items.map((data, i) => (
                  <li key={i}>
                    <WorkItem data={data}/>
                  </li>
                ))
              ) : null
            }
          </ul>
          {/* {
            dataWorks?.workCollection.items.length > 5 ? (
              <ViewAll link="work"/>
            ) : null
          } */}
        </div>
      </div>
    </Layout>
  )
}

export default Home
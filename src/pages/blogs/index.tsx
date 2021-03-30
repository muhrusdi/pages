import React from "react"
import Layout from "containers/layout"
import Nav from "components/navigation"
import { StaticImage } from "gatsby-plugin-image"
import { BiChevronRight } from "react-icons/bi"

const Blogs = () => {
  return (
    <>
      <Nav/>
      <Layout>
        <div>
          <div className="py-14">
            <div className="flex -mx-4 items-center">
              <div className="w-1/2 px-4">
                <div>
                  <span className="inline-block rounded-full text-xs uppercase py-1 px-4 bg-gray-600">Latest from blog</span>
                  <h2 className="text-5xl mt-6 font-black">Lorem ipsum dolor, sit amet consectetur</h2>
                  <p className="mt-8 text-lg text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio dolore consectetur eligendi.</p>
                  <a href="#" className="mt-10 inline-block text-lg">
                    <div className="flex items-center">
                      <span>Read more</span> <BiChevronRight size={24}/>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-1/2 px-4">
                <div>
                  <StaticImage width={100} style={{height: 300}} layout="fullWidth" className="rounded-lg" src="https://images.unsplash.com/photo-1612831660296-0cd5841b89fb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 py-20">
            <ul className="grid grid-cols-3 gap-8">
              <li>
                <div>
                  <div>
                    <div>
                      <StaticImage width={100} style={{height: 200}} layout="fullWidth" className="rounded-lg" src="https://images.unsplash.com/photo-1612831660296-0cd5841b89fb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt=""/>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h2 className="text-xl mt-6 font-bold">Lorem ipsum dolor, sit amet consectetur</h2>
                      <p className="mt-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio dolore consectetur eligendi.</p>
                      <div className="flex justify-between mt-6">
                        <span className="text-gray-400">12 Sept 2021</span>
                        <a href="#" className="inline-block">
                          <div className="flex items-center">
                            <span>Read more</span> <BiChevronRight size={24}/>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <div>
                      <StaticImage width={100} style={{height: 200}} layout="fullWidth" className="rounded-lg" src="https://images.unsplash.com/photo-1612831660296-0cd5841b89fb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt=""/>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h2 className="text-xl mt-6 font-bold">Lorem ipsum dolor, sit amet consectetur</h2>
                      <p className="mt-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio dolore consectetur eligendi.</p>
                      <div className="flex justify-between mt-6">
                        <span className="text-gray-400">12 Sept 2021</span>
                        <a href="#" className="inline-block">
                          <div className="flex items-center">
                            <span>Read more</span> <BiChevronRight size={24}/>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <div>
                      <StaticImage width={100} style={{height: 200}} layout="fullWidth" className="rounded-lg" src="https://images.unsplash.com/photo-1612831660296-0cd5841b89fb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt=""/>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h2 className="text-xl mt-6 font-bold">Lorem ipsum dolor, sit amet consectetur</h2>
                      <p className="mt-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio dolore consectetur eligendi.</p>
                      <div className="flex justify-between mt-6">
                        <span className="text-gray-400">12 Sept 2021</span>
                        <a href="#" className="inline-block">
                          <div className="flex items-center">
                            <span>Read more</span> <BiChevronRight size={24}/>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Blogs
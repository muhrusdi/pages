import { Banner } from "@/components/banner"
import { BlogItem } from "@/components/blog/blog-item"
import { Button } from "@/components/button"
import { Section } from "@/components/section"
import { faker } from "@faker-js/faker"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <Section
        tag="Our Blog"
        title="Latest blog posts"
        description="Tool and strategies modern teams need to help their companies grow."
        footer={<Button>View All</Button>}
      >
        <div className="grid-blog">
          <BlogItem
            title={faker.lorem.lines(2)}
            description={faker.lorem.lines(2)}
            image={faker.image.abstract(1234, 2345, true)}
          />
          <BlogItem
            title={faker.lorem.lines(2)}
            description={faker.lorem.lines(2)}
            image={faker.image.abstract(1234, 2345, true)}
          />
          <BlogItem
            title={faker.lorem.lines(2)}
            description={faker.lorem.lines(2)}
            image={faker.image.abstract(1234, 2345, true)}
          />
        </div>
      </Section>
      <Section
        tag="Our Work"
        title="Latest works"
        description="Tool and strategies modern teams need to help their companies grow."
        footer={<Button>View All</Button>}
      >
        <div className="grid-blog">
          <BlogItem
            title={faker.lorem.lines(2)}
            description={faker.lorem.lines(2)}
            image={faker.image.abstract(1234, 2345, true)}
          />
          <BlogItem
            title={faker.lorem.lines(2)}
            description={faker.lorem.lines(2)}
            image={faker.image.abstract(1234, 2345, true)}
          />
          <BlogItem
            title={faker.lorem.lines(2)}
            description={faker.lorem.lines(2)}
            image={faker.image.abstract(1234, 2345, true)}
          />
        </div>
      </Section>
      {/* <div className="absolute bottom-0 left-0 right-0 py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/profile">
                <div className="flex items-center space-x-3 hover:bg-slate-950 p-2 transition-all rounded-lg">
                  <div>
                    <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="text-gray-400">
                    <span>Muhammad Rusdi</span>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <footer>
                <Footer />
              </footer>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Home

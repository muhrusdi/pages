import { BlogItem } from "@/components/blog/blog-item"
import { faker } from "@faker-js/faker"

const Blog = () => {
  return (
    <div>
      <div className="container">
        <div className="grid-blog">
          <BlogItem
            title={faker.lorem.lines(2)}
            description={faker.lorem.lines(2)}
            image={faker.image.urlLoremFlickr()}
          />
          <BlogItem
            title={faker.lorem.lines(2)}
            description={faker.lorem.lines(2)}
            image={faker.image.urlLoremFlickr()}
          />
          <BlogItem
            title={faker.lorem.lines(2)}
            description={faker.lorem.lines(2)}
            image={faker.image.urlLoremFlickr()}
          />
        </div>
      </div>
    </div>
  )
}

export default Blog

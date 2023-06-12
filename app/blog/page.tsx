import { BlogItem } from "../../components/blog/blog-item"

const Blog = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-3 gap-8">
          <BlogItem
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate molestiae soluta eius"
            image="https://plus.unsplash.com/premium_photo-1680721442350-6f91fbe7df3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
          />
          <BlogItem
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate molestiae soluta eius"
            image="https://plus.unsplash.com/premium_photo-1680721442350-6f91fbe7df3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
          />
          <BlogItem
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate molestiae soluta eius"
            image="https://plus.unsplash.com/premium_photo-1680721442350-6f91fbe7df3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
          />
        </div>
      </div>
    </div>
  )
}

export default Blog

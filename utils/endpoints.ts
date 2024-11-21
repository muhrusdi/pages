const PREFIX = "/api/v1"

export const APIs = {
  blogs: `${PREFIX}/blogs`,
  todos: `${PREFIX}/todos`,
  products: `${PREFIX}/products?limit=0`,
  "products/add": `${PREFIX}/products/add`,
  revalidate: `${PREFIX}/revalidate`,
  "/discover/movie": `${PREFIX}/discover/movie`,
  "/discover/tv": `${PREFIX}/discover/tv`,
  "/review": `${PREFIX}/reviews`,
  "/movie/:id": `${PREFIX}/movie`,
  "/movies": "/api/movie",
  "/contents": "/api/blogs",
}

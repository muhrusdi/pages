const PREFIX = "/api/3"

export const APIs = {
  blogs: `${PREFIX}/blogs`,
  todos: `${PREFIX}/todos`,
  products: `${PREFIX}/products?limit=0`,
  "products/add": `${PREFIX}/products/add`,
  revalidate: `${PREFIX}/revalidate`,
  "/discover/movie": `${PREFIX}/discover/movie`,
}

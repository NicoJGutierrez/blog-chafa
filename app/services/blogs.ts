const blogs = [
  { id: 1, title: "Next.js Features", author: "John Doe", content: "next.js utilizes React Server Components",  url: "https://nextjs.org/docs/getting-started/react-essentials/react-server-components", likes: 0},
  { id: 2, title: "Next.js Overview", author: "John Doe", content: "next.js is built on top of React",  url: "https://nextjs.org/docs/getting-started/react-essentials/react-server-components", likes: 1},
  {
    id: 3,
    title: "Next.js Rendering",
    author: "John Doe",
    content: "next.js supports both static and dynamic rendering",
    url: "https://nextjs.org/docs/getting-started/react-essentials/react-server-components",
    likes: 0,
  },
]

let nextId = 4

export const getblogs = () => {
  return blogs
}

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id)
}

export const addLike = (id: number) => {
  const blog = blogs.find((blog) => blog.id === id)
  if (blog) {
    blog.likes += 1
  }
}

export const addBlog = (title: string, author: string, content: string, url: string) => {
  blogs.push({ id: nextId++, title, author, content, url, likes: 0 })
}
import { getblogs } from "../services/blogs"
import { Suspense } from "react"
import BlogList from "./BlogList"

type BlogParaCliente = {
  id: number
  title: string
  autor: string
  likes: number
}

const Blogs = ({ searchParams }: { searchParams: Promise<{ searchBlogTitle: string }> }) => {
  return (
    <div>
      <h2>Blogs</h2>
      <form action="blogs">
        <input
          type="text"
          name="searchBlogTitle"
          placeholder="Search blogs..."
        />
        <button type="submit">Search</button>
      </form>
    <Suspense fallback={<p>Cargando lista de blogs...</p>}>
      <AllBlogsSearch searchParams={searchParams} />
    </Suspense>
    </div>
  )
}

const AllBlogsSearch = async ({
  searchParams,
}: {
  searchParams: Promise<{ searchBlogTitle?: string }>
}) => {
  const { searchBlogTitle } = await searchParams
  const allBlogs = (await getblogs())

  const filteredBlogs = searchBlogTitle
    ? allBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchBlogTitle.toLowerCase())
      )
    : allBlogs

  const blogs: BlogParaCliente[] = filteredBlogs.map(
    ({ id, title, likes, user }) => ({
      id,
      title,
      likes,
      autor: user.username,
    })
  )

  return (
    <div>
      <BlogList blogs={blogs} />
    </div>
  )
}

export default Blogs
import { getblogs } from "../services/blogs"
import { Suspense } from "react"
import BlogList from "./BlogList"

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

const AllBlogsSearch = async({
  searchParams,
}: {
  searchParams: Promise<{ searchBlogTitle: string }>
}) => {
  const searchParamsValue = (await searchParams).searchBlogTitle
  const allBlogs = getblogs()
  const blogs = searchParamsValue ? allBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchParamsValue.toLowerCase())
      ) : allBlogs
  return (
    <div>
      <BlogList blogs={blogs} />
    </div>
  )
}

export default Blogs
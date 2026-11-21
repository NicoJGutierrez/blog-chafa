import { notFound } from "next/navigation"
import { getBlogById } from "@/app/services/blogs"
import { Suspense } from "react"
import { addBlogLike } from "@/app/actions/blogs"

const BlogPage = ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <Suspense fallback={<p>Cargando blog...</p>}>
      <BlogContent params={params} />
    </Suspense>
  )
}

const BlogContent = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const blog = getBlogById(Number(id))

  if (!blog) {
    notFound()
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>by {blog.author}</p>
      <p>{blog.content}</p>
      <form action={addBlogLike}>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">
          Like ({blog.likes})
        </button>
      </form>
      <p>Lee más sobre este blog aquí: <a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.url}</a></p>
    </div>
  )
}

export default BlogPage
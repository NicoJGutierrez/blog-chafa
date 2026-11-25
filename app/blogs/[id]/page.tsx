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
  const blog = await getBlogById(Number(id))
  let leer

  if (!blog) {
    notFound()
  }

  if (blog.url) {
    leer = <p><a href={blog.url} target="_blank" rel="noopener noreferrer">Leer más (haz clic aquí)</a></p>
  } else {
    leer = <p>El autor del blog no proporcionó un enlace.</p>
  }

  return (
    <div>
      <h2>{ blog.title}</h2>
      <p>Autor: { blog.user.username}</p>
      <p>{ blog.content}</p>
      <form action={addBlogLike}>
        <input type="hidden" name="id" value={ blog.id} />
        <button type="submit">
          Like ({ blog.likes})
        </button>
      </form>
      {leer}
    </div>
  )
}

export default BlogPage
"use client"

import Link from "next/link"

type BlogParaCliente = {
  id: number
  title: string
  autor: string
  likes: number
}

const BlogList = ({ blogs }: { blogs: BlogParaCliente[] }) => {

  const blogsToShow = [...blogs].sort((a, b) => b.likes - a.likes)

  return (
    <div>
      <ul>
        {blogsToShow.map((blog : BlogParaCliente) => (
          <li key={blog.id}> <Link href={`/blogs/${blog.id}` } rel="noopener noreferrer">{blog.title}</Link>
            , autor: {blog.autor}, likes: {blog.likes}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList
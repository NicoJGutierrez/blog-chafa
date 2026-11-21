"use client"

import Link from "next/link"

type Blog = {
  id: number
  title: string
  author: string
  likes: number
}

const BlogList = ({ blogs }: { blogs: Blog[] }) => {

  const blogsToShow = [...blogs].sort((a, b) => b.likes - a.likes)

  return (
    <div>
      <ul>
        {blogsToShow.map((blog : Blog) => (
          <li key={blog.id}>
            <>
            <Link href={`/blogs/${blog.id}` } rel="noopener noreferrer">{blog.title}</Link>
            {" "}by {blog.author}, likes: {blog.likes}
            </>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList
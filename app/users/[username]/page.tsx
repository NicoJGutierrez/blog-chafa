import Link from "next/link"
import { notFound } from "next/navigation"
import { getUserWithBlogs, getUsers } from "../../services/users"
import { Suspense } from "react"

const UserPage = async ({ params }: { params: Promise<{ username: string }> }) => {
    return (
    <Suspense fallback={<p>Cargando datos de usuario...</p>}>
        <UserData params={params} />
    </Suspense>
    )
}

const UserData = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params
  const decodedUsername = decodeURIComponent(username)
  const user = await getUserWithBlogs(decodedUsername)

  if (!user) {
    notFound()
  }

  return (
    <div>
      <h2>{user.username}</h2>
      <h3>Blogs</h3>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserPage
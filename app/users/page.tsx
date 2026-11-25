import Link from "next/link"
import { getUsers } from "../services/users"
import { Suspense } from "react"

type User = {
  id: number
  username: string
}

const UsersPage = async () => {
    return (
    <Suspense fallback={<p>Cargando lista de usuarios...</p>}>
        <UserList />
    </Suspense>
    )
}

const UserList = async () => {
  const users = await getUsers()

  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <Link href={`/users/${user.username}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage
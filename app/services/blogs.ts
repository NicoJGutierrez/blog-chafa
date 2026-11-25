import { eq, sql } from "drizzle-orm"
import { db } from "../../db"
import { blogs } from "@/db/schema"

export const getblogs = async () => {
  return db.query.blogs.findMany({
    with: { user: { columns: { username: true } } }
  })
}

export const getBlogById = async (id: number) => {
  return db.query.blogs.findFirst({
    where: eq(blogs.id, id),
    with: { user: { columns: { username: true } } }
  })
}

export const addLike = async (id: number) => {
  return db.update(blogs).set({ likes: sql`${blogs.likes} + 1` }).where(eq(blogs.id, id))
}

export const addBlog = async (title: string, content: string, url: string) => {
  const user = await db.query.users.findFirst({
    orderBy: sql`RANDOM()`,
  })
  return db.insert(blogs).values({ title, userId: user.id, content, url, likes: 0 })
}


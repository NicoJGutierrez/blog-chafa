import { eq, sql } from "drizzle-orm"
import { db } from "../../db"
import { blogs } from "@/db/schema"

export const getblogs = async () => {
  return db.query.blogs.findMany()
}

export const getBlogById = async (id: number) => {
  return db.query.blogs.findFirst({
    where: eq(blogs.id, id)
  })
}

export const addLike = async (id: number) => {
  return db.update(blogs).set({ likes: sql`${blogs.likes} + 1` }).where(eq(blogs.id, id))
}

export const addBlog = async (title: string, author: string, content: string, url: string) => {
  return db.insert(blogs).values({ title, author, content, url, likes: 0 })
}
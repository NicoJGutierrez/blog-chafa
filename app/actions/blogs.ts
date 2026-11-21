"use server"

import { redirect } from "next/navigation"
import { addBlog } from "../services/blogs"
import { revalidatePath } from "next/cache"
import { addLike } from "../services/blogs"

export const createBlog = async (formData: FormData) => {
  const title = formData.get("title") as string
  const author = formData.get("author") as string
  const content = formData.get("content") as string
  const url = formData.get("url") as string
  addBlog(title, author, content, url)
  revalidatePath("/blogs")
  redirect("/blogs")
}

export const addBlogLike = async (formData: FormData) => {
  const id = Number(formData.get("id"))
  addLike(id)
  revalidatePath(`/blogs/${id}`)
  revalidatePath("/blogs")
  
}
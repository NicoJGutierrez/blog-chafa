import { pgTable, serial, text, integer } from "drizzle-orm/pg-core"

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  content: text("content").notNull(),
  likes: integer("likes").notNull().default(0),
  url: text("url"),
})
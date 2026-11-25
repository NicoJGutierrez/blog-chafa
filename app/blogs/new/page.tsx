import { createBlog } from "../../actions/blogs"

const NewBlog = () => {
  return (
    <div>
      <h2>Create a new blog</h2>
      <form action={createBlog}>
        <div>
        <label>Título: <input type="text" name="title" required /></label>
        </div>
        <div> 
        <label>Contenido:</label>
        </div>
        <div>
        <textarea name="content" required rows={5} />
        </div>
        <div>
          <label>URL (opcional): <input type="url" name="url"/></label>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default NewBlog
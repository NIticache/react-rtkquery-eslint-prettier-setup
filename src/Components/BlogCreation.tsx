import { FormEvent, ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux";

import { postAdded } from "../features/Blogs/postSlice";
import { useGetAllProductsQuery } from "../features/Api/postApiSlice";
const BlogCreation = () => {
  const [newPost, setNewPost] = useState({ title: "", content: "" })
  const dispatch = useDispatch()
  const { data } = useGetAllProductsQuery({})
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(postAdded(newPost.title, newPost.content))
    setNewPost({ title: "", content: "" })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type='text' name="title" value={newPost.title} placeholder='Title' onChange={handleChange} />
        <label>Content</label>
        <input type='text' name="content" value={newPost.content} placeholder='Content' onChange={handleChange} />
        <button type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default BlogCreation

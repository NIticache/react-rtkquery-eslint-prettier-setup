import { useSelector } from "react-redux"

import BlogCard from "../Components/BlogCard"
import { getAllPosts } from "../features/Blogs/postSlice"
import React from "react"
import BlogCreation from "../Components/BlogCreation"
const Blog = () => {
  const postsState = useSelector(getAllPosts)
  console.log(postsState, "...........")
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }
  return (
    <>
      <BlogCreation />
      <div style={style}>
        {postsState.posts.map(({ title, content }) => <BlogCard title={title} content={content} />)}
      </div>
    </>
  )
}

export default Blog

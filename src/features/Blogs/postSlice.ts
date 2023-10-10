import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit"

interface postType {
  id: string;
  title: string;
  content: string;
}
interface initialStateType { posts: postType[] }
const initialState: initialStateType = {
  posts: [{ id: nanoid(), "title": "All is Well", "content": "Positive energy gives luck " },
  { id: nanoid(), "title": "All is Well", "content": "Positive energy gives luck " }]
}


export const postSlice = createSlice({
  name: "blogPosts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<postType>) {
        state.posts.push(action.payload);
      },
      prepare(title: string, content: string) {
        return { payload: { id: nanoid(), title, content } }
      }
    }
  }

})

export const getAllPosts = (state: { blogPosts: initialStateType }) => state.blogPosts
export const { postAdded } = postSlice.actions
export default postSlice.reducer
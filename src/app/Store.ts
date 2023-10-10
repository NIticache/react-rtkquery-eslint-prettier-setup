import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import postReducer from "../features/Blogs/postSlice";
import { productsApi } from "../features/Api/postApiSlice";
export const Store = configureStore({
  reducer: combineReducers({ counter: counterReducer, blogPosts: postReducer, [productsApi.reducerPath]: productsApi.reducer }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware), // Add API middleware
})
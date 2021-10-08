import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./ApiData";

export default configureStore({
  reducer: {
    posts: postReducer,
  },
});

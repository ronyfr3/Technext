import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./Data";
import postReducer from "./ApiData";

export default configureStore({
  reducer: {
    searchData: SearchReducer,
    allData: postReducer,
  },
});

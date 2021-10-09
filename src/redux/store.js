import { configureStore } from "@reduxjs/toolkit";
import LaunchReducer from "./LaunchSlice";

export default configureStore({
  reducer: {
    launches: LaunchReducer,
  },
});

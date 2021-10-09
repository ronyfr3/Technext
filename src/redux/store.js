import { configureStore } from "@reduxjs/toolkit";
import LaunchReducer from "./launchReducer";

export default configureStore({
  reducer: {
    launches: LaunchReducer,
  },
});

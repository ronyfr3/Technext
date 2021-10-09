import { createSlice } from "@reduxjs/toolkit";
import getPosts from "../Api/Api";

const LaunchSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getPosts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default LaunchSlice.reducer;

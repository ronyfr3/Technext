import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return axios
    .get("https://api.spacexdata.com/v3/launches")
    .then((res) => res.data)
    .catch((err) => err);
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default postSlice.reducer;

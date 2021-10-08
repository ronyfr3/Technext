import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async (props) => {
  console.log("props", props);
  let url = "https://api.spacexdata.com/v3/launches/?";
  if (props.rocketName) {
    url = url + `rocket_name=${props.rocketName.replace(" ", "+")}`;
  }
  if (props["start/end"]) {
    url = url + `start/end=${props["start/end"]}`;
  }
  return fetch(url)
    .then(async (res) => await res.json())
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

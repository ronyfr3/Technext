import { createAsyncThunk } from "@reduxjs/toolkit";

const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (rocketName) => {
    let url = "https://api.spacexdata.com/v3/launches/?";
    if (rocketName) {
      url += `rocket_name=${rocketName.replace(" ", "+")}`;
    }
    return fetch(url)
      .then(async (res) => res.json())
      .catch((err) => err);
  },
);
export default getPosts;

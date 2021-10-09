import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (rocketName) => {
    console.log("rocket", rocketName);
    let url = "https://api.spacexdata.com/v3/launches/?";
    if (rocketName) {
      url = url + `rocket_name=${rocketName.replace(" ", "+")}`;
    }
    console.log("url", url);
    return fetch(url)
      .then(async (res) => await res.json())
      .catch((err) => err);
  }
);

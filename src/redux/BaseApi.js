import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// HEADERS
const BaseAPIHeaders = {
  "Content-Type": "application/json",
};
//BASEURL
const baseUrl = "https://api.spacexdata.com/v3";

const createRequest = (url) => ({
  url,
  headers: BaseAPIHeaders,
});

export const BaseAPI = createApi({
  reducerPath: "spaceAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => createRequest("/launches"),
    }),
  }),
});
export const { useGetDataQuery } = BaseAPI;

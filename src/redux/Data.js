import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: { value: [] },
  reducers: {
    filteredData: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { filteredData } = dataSlice.actions;
export default dataSlice.reducer;

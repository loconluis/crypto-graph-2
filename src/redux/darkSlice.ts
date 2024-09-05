import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
  name: "dark",
  initialState: { active: false },
  reducers: {
    setDarkMode(state, action) {
      return { ...state, active: action.payload };
    },
  },
});

export const { setDarkMode } = darkSlice.actions;

export default darkSlice.reducer;

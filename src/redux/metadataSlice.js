import { createSlice } from "@reduxjs/toolkit";

export const metadataSlice = createSlice({
  name: "metadata",
  initialState: {
    theme: "light"
  },

  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});

export const { setTheme } = metadataSlice.actions;
export const metadataSelector = state => state.metadata;
export default metadataSlice.reducer;

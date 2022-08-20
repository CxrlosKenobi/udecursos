import { createSlice } from "@reduxjs/toolkit";

export const careerSlice = createSlice({
  name: "career",
  initialState: {
    chosen: {},
  },

  reducers: {
    setCareer: (state, action)  => {
      state.chosen = action.payload;
    },
    cleanCareer: (state) => {
      state.chosen = {};
    }
  }
});

export const { setCareer, cleanCareer } = careerSlice.actions;
export const careerSelector = state => state.career;
export default careerSlice.reducer;

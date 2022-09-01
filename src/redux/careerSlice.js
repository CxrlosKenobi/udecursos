import { createSlice } from "@reduxjs/toolkit";

export const careerSlice = createSlice({
  name: "career",
  initialState: {
    info: {},
    malla: {}
  },

  reducers: {
    setCareerInfo: (state, action)  => {
      state.info = {
        code: action.payload.code,
        name: action.payload.name,
        link: action.payload.link
      };
    },
    stateMalla: (state, action) => {
      state.malla = action.payload;
    },
    passTask: (state, action) => {
      const { col, index, passed } = action.payload;
      state.malla.semesters[col].tasks[index].properties.done = passed;
    },
    cleanCareer: (state) => {
      state.info = {};
      state.malla = {};
    }
  }
});

export const {
  setCareerInfo,
  stateMalla,
  passTask,
  cleanCareer,
} = careerSlice.actions;
export const careerSelector = state => state.career;
export const mallaSelector = state => state.career.malla;
export default careerSlice.reducer;

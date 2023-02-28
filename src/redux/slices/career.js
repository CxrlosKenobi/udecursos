import { createSlice } from "@reduxjs/toolkit";

export const careerSlice = createSlice({
  name: "career",
  initialState: {
    info: {},
    malla: {},
    approved_credits: 0,
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
      const { col, index, passed, credits } = action.payload;
      state.malla.semesters[col].tasks[index].properties.done = passed;

      if (passed) {
        state.approved_credits += credits;
      } else {
        (state.approved_credits - credits) >= 0 && (
          state.approved_credits -= credits
        );
      }
    },
    cleanCareer: (state) => {
      state.info = {};
      state.malla = {};
      state.approved_credits = 0;
    },
    cleanApprovedCredits: (state) => {
      state.approved_credits = 0;
    }
  }
});

export const {
  setCareerInfo,
  stateMalla,
  passTask,
  cleanCareer,
  cleanApprovedCredits
} = careerSlice.actions;
export const careerSelector = state => state.career;
export const mallaSelector = state => state.career.malla;
export const semestersSelector = state => state.career.malla.semesters;
export const creditsSelector = state => state.career.approved_credits;
export default careerSlice.reducer;

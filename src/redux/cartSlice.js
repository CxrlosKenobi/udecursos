import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    career: {},
  },

  reducers: {
    sendCareer: (state, action)  => {
      state.career = action.payload;
    }
  }
});

export const { sendCareer } = cartSlice.actions;
export const cartSelector = state => state.cart;
export default cartSlice.reducer;

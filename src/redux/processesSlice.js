import { createSlice } from "@reduxjs/toolkit";

export const processesSlice = createSlice({
  name: "processes",
  initialState: {
    queue: []
  },
  reducers: {
    pushProcess: (state, action) => {
      const index = state.queue.findIndex(item => item.id === action.payload.id);
      if (index !== -1) { 
        let process = { ...state.queue[index], status: "pending" };
        state.queue[index] = process;
      } else {
        state.queue.push({ ...action.payload, status: "pending" });
      }
    },
    updateProcess: (state, action) => {
      let { id, status } = action.payload;
      let process = state.queue.find(p => p.id === id);
      process.status = status;
    },
    removeProcess: (state, action) => {
      let { id } = action.payload;
      let index = state.queue.findIndex(p => p.id === id);
      state.queue.splice(index, 1);
    }
  }
});

export const {
  pushProcess,
  updateProcess,
  removeProcess
} = processesSlice.actions;
export const selectProcesses = state => state.processes.queue;
export default processesSlice.reducer;

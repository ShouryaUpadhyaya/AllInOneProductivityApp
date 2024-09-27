import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    addTask: (state, action) => {
      state.push(action.payload);
    },
    completeTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) task.completed = true;
      else task.completed = false;
    },
  },
});

export const { addTask, completeTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;

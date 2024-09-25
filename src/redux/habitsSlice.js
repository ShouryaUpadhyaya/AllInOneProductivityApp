import { createSlice } from "@reduxjs/toolkit";

const habitsSlice = createSlice({
  name: "habits",
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      state.push(action.payload);
    },
    completeHabit: (state, action) => {
      const habit = state.find((habit) => habit.id === action.payload);
      if (habit) habit.completed = true;
    },
  },
});

export const { addHabit, completeHabit } = habitsSlice.actions;
export default habitsSlice.reducer;

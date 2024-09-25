import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";
import habitsSlice from "./habitsSlice";
import userSlice from "./userSlice";
export const sstore = configureStore({
  reducer: {
    tasks: tasksSlice,
    habits: habitsSlice,
    user: userSlice,
  },
});

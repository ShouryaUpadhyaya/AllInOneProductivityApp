import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";
import habitsSlice from "./habitsSlice";
import userSlice from "./userSlice";
import dayReviewSlice from "./dayReviewSlice";
export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    habits: habitsSlice,
    user: userSlice,
    dayReviews: dayReviewSlice,
  },
});

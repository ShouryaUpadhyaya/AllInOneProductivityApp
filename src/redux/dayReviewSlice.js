import { createSlice } from "@reduxjs/toolkit";

const dayReviewSlice = createSlice({
  name: "dayReview",
  initialState: [],
  reducers: {
    addDayReview: (state, action) => {
      state.push({
        date: action.payload.date,
        review: action.payload.review,
      });
    },
  },
});

export const { addDayReview } = dayReviewSlice.actions;
export default dayReviewSlice.reducer;

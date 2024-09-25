import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    health: 100,
    level: 1,
  },
  reducers: {
    increaseHealth: (state, action) => {
      state.health += action.payload;
    },
    increaseLevel: (state) => {
      state.level += 1;
    },
  },
});

export const { increaseHealth, increaseLevel } = userSlice.actions;
export default userSlice.reducer;

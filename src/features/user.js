import { createSlice } from "@reduxjs/toolkit";

const initialState = { userName: "", age: 0, email: "" }

export const user = createSlice({
  name: "user",
  initialState: { value: initialState },
  reducers: {
    loginUser: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialState;
    },
  },
});

export default user.reducer;
export const { loginUser, logout } = user.actions;

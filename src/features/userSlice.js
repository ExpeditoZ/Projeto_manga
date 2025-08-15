import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { id: 1, name: "Jhonyy" },
    language: "pt-BR",
    theme: "auto",
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { login, logout, setLanguage, setTheme } = userSlice.actions;
export default userSlice.reducer;

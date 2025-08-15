import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from "./features/MangasSlice";
import userReducer from "./features/userSlice";

const store = configureStore({
  reducer: {
    mangas: mangasReducer,
    user: userReducer,
  },
});

export default store;

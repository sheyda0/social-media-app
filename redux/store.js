import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import postReducer from "./features/post/postSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    post: postReducer,
  },
});

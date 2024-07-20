import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import addPostReducer from "./features/add_post/addPostSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    addPost: addPostReducer,
  },
});

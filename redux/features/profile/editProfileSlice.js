import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "/images/wepik-export-20231128203407BKL1.jpeg",
  name: "Isak Danielson",
  username: "isak",
  bio: "this is gonna be a bio for my profile.",
};

const editProfileSlice = createSlice({
  name: "editProflie",
  initialState,
  reducers: {},
});

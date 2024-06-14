import { closeModal } from "../modal/modalSlice";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  posts: [
    {
      id: 1,
      author: {
        name: "Olivia Rodrigo",
        profile: "/images/wepik-export-20231128203407BKL1.jpeg",
      },
      image: "/images/shahadat-rahman-voM1Z9cGPCU-unsplash.jpg",
      description:
        "Notification Bell SVG Vector 18 Free Download Notification Bell 18 SVG vector file in monocolor and multicolor type for Sketch and Figma from Notification Bell 18 Vectors svg vector collection. Notification Bell 18 Vectors SVGNotification Bell SVG Vector 18 Free Download Notification Bell 18 SVG vector file in monocolor and multicolor type for Sketch and Figma from Notification Bell 18 Vectors svg vector collection. Notification Bell 18 Vectors SVGNotification Bell SVG Vector 18 Free Download Notification Bell 18 SVG vector file in monocolor and multicolor type for Sketch and Figma from Notification Bell 18 Vectors svg vector collection. Notification Bell 18 Vectors SVG",
      likes: 30,
    },
    {
      id: 2,
      author: {
        name: "Olivia Rodrigo",
        profile: "/images/wepik-export-20231128203407BKL1.jpeg",
      },
      image: "/images/shahadat-rahman-voM1Z9cGPCU-unsplash.jpg",
      description:
        "Notification Bell SVG Vector 18 Free Download Notification Bell 18 SVG vector file in monocolor and multicolor type for Sketch and Figma from Notification Bell 18 Vectors svg vector collection. Notification Bell 18 Vectors SVGNotification Bell SVG Vector 18 Free Download Notification Bell 18 SVG vector file in monocolor and multicolor type for Sketch and Figma from Notification Bell 18 Vectors svg vector collection. Notification Bell 18 Vectors SVGNotification Bell SVG Vector 18 Free Download Notification Bell 18 SVG vector file in monocolor and multicolor type for Sketch and Figma from Notification Bell 18 Vectors svg vector collection. Notification Bell 18 Vectors SVG",
      likes: 30,
    },
    // {
    //   author: {
    //     name: "Olivia Rodrigo",
    //     profile: "/images/wepik-export-20231128203407BKL1.jpeg",
    //   },
    //   image: "/images/shahadat-rahman-voM1Z9cGPCU-unsplash.jpg",
    //   description:
    //     "Notification Bell SVG Vector 18 Free Download Notification Bell 18 SVG vector file in monocolor and multicolor type for Sketch and Figma from Notification Bell 18 Vectors svg vector collection. Notification Bell 18 Vectors SVGNotification Bell SVG Vector 18 Free Download Notification Bell 18 SVG vector file in monocolor and multicolor type for Sketch and Figma from Notification Bell 18 Vectors svg vector collection. Notification Bell 18 Vectors SVGNotification Bell SVG Vector 18 Free Download Notification Bell 18 SVG vector file in monocolor and multicolor type for Sketch and Figma from Notification Bell 18 Vectors svg vector collection. Notification Bell 18 Vectors SVG",
    //   likes: 30,
    // },
  ],
  description: "",
  image: null,
};

const addPostSlice = createSlice({
  name: "addPost",
  initialState,
  reducers: {
    setAddPostDescription(state, action) {
      state.description = action.payload.description;
    },
    setAddPostImage(state, action) {
      state.image = action.payload.imageUrl;
    },
    resetImage(state) {
      state.image = null;
    },
    addNewPost(state, action) {
      state.posts.push({
        author: {
          name: "Olivia Rodrigo",
          profile: "/images/wepik-export-20231128203407BKL1.jpeg",
        },
        image: state.image,
        description: state.description,
        likes: 5,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(closeModal, (state) => {
      state.description = "";
      state.image = null;
    });
  },
});

export const {
  setAddPostDescription,
  setAddPostImage,
  resetImage,
  addNewPost,
} = addPostSlice.actions;
export default addPostSlice.reducer;

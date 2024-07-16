import { closeModal } from "../modal/modalSlice";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  posts: [
    {
      id: 1,
      author: {
        name: "Olivia Rodrigo 1",
        profile: "/images/wepik-export-20231128203407BKL1.jpeg",
      },
      image: "/images/shahadat-rahman-voM1Z9cGPCU-unsplash.jpg",
      description:
        "vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.",
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
        "vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.",
      likes: 30,
    },
    {
      id: 3,
      author: {
        name: "Olivia Rodrigo",
        profile: "/images/wepik-export-20231128203407BKL1.jpeg",
      },
      image: "/images/shahadat-rahman-voM1Z9cGPCU-unsplash.jpg",
      description:
        "vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.",
      likes: 30,
    },
    {
      id: 4,
      author: {
        name: "Olivia Rodrigo 4",
        profile: "/images/wepik-export-20231128203407BKL1.jpeg",
      },
      image: "/images/shahadat-rahman-voM1Z9cGPCU-unsplash.jpg",
      description:
        "vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.",
      likes: 30,
    },
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
        likes: 0,
        id: Date.now(),
      });
    },
    sortPosts(state) {
      state.posts = [...state.posts].sort((a, b) => a.id - b.id);
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

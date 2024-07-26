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
      image: "/images/19155.jpg",
      description:
        "vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.",
      likes: 30,
      comments: [
        {
          id: 1,
          username: "shey",
          user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
          created_at: "2023-14-03",
          content:
            "We are thrilled to have you as a supporter! Thank you for recommending our platform!",
          replies: [
            {
              id: 2,
              username: "jack",
              user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
              created_at: "2023-14-03",
              content: "Follow for more Amazing tips",
            },
            {
              id: 3,
              username: "hana",
              user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
              created_at: "2023-14-03",
              content: "Follow for more Amazing tips",
            },
          ],
        },
        {
          id: 6,
          username: "shey",
          user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
          created_at: "2023-14-03",
          content:
            "We are thrilled to have you as a supporter! Thank you for recommending our platform!",
          replies: [
            {
              id: 7,
              username: "jack",
              user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
              created_at: "2023-14-03",
              content: "Follow for more Amazing tips",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      author: {
        name: "Olivia Rodrigo",
        profile: "/images/wepik-export-20231128203407BKL1.jpeg",
      },
      image: "/images/7069574_3249754.jpg",
      description:
        "vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.",
      likes: 30,
      comments: [],
    },
    {
      id: 3,
      author: {
        name: "Olivia Rodrigo",
        profile: "/images/wepik-export-20231128203407BKL1.jpeg",
      },
      image: "/images/2149080794.jpg",
      description:
        "vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.",
      likes: 30,
      comments: [],
    },
    {
      id: 4,
      author: {
        name: "Olivia Rodrigo",
        profile: "/images/wepik-export-20231128203407BKL1.jpeg",
      },
      image: "/images/12210.jpg",
      description:
        "vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.",
      likes: 30,
      comments: [],
    },
    {
      id: 5,
      author: {
        name: "Olivia Rodrigo",
        profile: "/images/wepik-export-20231128203407BKL1.jpeg",
      },
      image: "/images/29267.jpg",
      description:
        "vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.",
      likes: 30,
      comments: [],
    },
    {
      id: 6,
      author: {
        name: "Olivia Rodrigo",
        profile: "/images/wepik-export-20231128203407BKL1.jpeg",
      },
      image: "/images/48458.jpg",
      description:
        "vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.vector file in monocolor and multicolor type for Sketch and Figma from vector collection.",
      likes: 30,
      comments: [
        {
          id: 1,
          username: "shey",
          user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
          created_at: "2023-14-03",
          content:
            "We are thrilled to have you as a supporter! Thank you for recommending our platform!",
          replies: [
            {
              id: 2,
              comment_id: 1,
              username: "rose",
              user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
              created_at: "2023-14-03",
              content: "Follow for more Amazing tips",
            },
            {
              id: 3,
              comment_id: 1,
              username: "hana",
              user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
              created_at: "2023-14-03",
              content: "Follow for more Amazing tips",
            },
          ],
        },
        {
          id: 6,
          username: "shey",
          user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
          created_at: "2023-14-03",
          content:
            "We are thrilled to have you as a supporter! Thank you for recommending our platform!",
          replies: [
            {
              id: 7,
              comment_id: 6,
              username: "rose",
              user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
              created_at: "2023-14-03",
              content: "Follow for more Amazing tips",
            },
          ],
        },
      ],
    },
  ],
  description: "",
  image: null,
};

const postSlice = createSlice({
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
        created_at: new Date().toISOString().split("T")[0],
      });
    },
    sortPosts(state) {
      state.posts = [...state.posts].sort((a, b) => a.id - b.id);
    },
    addComment(state, action) {
      const post = state.posts.find((post) => post.id === action.id);
      if (post) {
        post.comments.push({
          id: Date.now(),
          username: "shey",
          user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
          created_at: new Date().toISOString().split("T")[0],
          content: action.payload.content,
          replies: [],
        });
      }
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
  addComment,
} = postSlice.actions;
export default postSlice.reducer;

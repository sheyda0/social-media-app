const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
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
  },
});

export const { setAddPostDescription, setAddPostImage, resetImage } =
  addPostSlice.actions;
export default addPostSlice.reducer;

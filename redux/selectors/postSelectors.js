import { createSelector } from "@reduxjs/toolkit";

const selectPosts = (state) => state.post.posts;

export const selectSortedPosts = createSelector([selectPosts], (posts) => {
  return [...posts].sort((a, b) => b.id - a.id);
});

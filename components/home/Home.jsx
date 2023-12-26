"use client";

import MainContainer from "../containers/MainContainer";
import PostsContainer from "../containers/PostsContainer";
import Post from "../post/Post";
import AddPost from "./AddPost";
import { useSelector } from "react-redux";
import AddPostModal from "./AddPostModal";

const Home = () => {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <MainContainer>
      <AddPost />
      <PostsContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsContainer>
      {isOpen && <AddPostModal />}
    </MainContainer>
  );
};

export default Home;

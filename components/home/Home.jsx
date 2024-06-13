"use client";

import MainContainer from "../containers/MainContainer";
import PostsContainer from "../containers/PostsContainer";
import Post from "../post/Post";
import AddPost from "./add_post/AddPost";
import { useSelector } from "react-redux";

const Home = () => {
  const posts = useSelector((state) => state.addPost.posts);

  return (
    <MainContainer>
      <AddPost />
      <PostsContainer>
        {posts.map((post) => (
          <Post
            key={post.id}
            image={post.image}
            description={post.description}
            author={post.author}
            likes={post.likes}
          />
        ))}
      </PostsContainer>
    </MainContainer>
  );
};

export default Home;

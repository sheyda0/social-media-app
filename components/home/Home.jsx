"use client";

import { selectSortedPosts } from "@/redux/selectors/postSelectors";
import MainContainer from "../containers/MainContainer";
import PostsContainer from "../containers/PostsContainer";
import Post from "../post/Post";
import AddPost from "./add_post/AddPost";
import { useSelector } from "react-redux";

const Home = () => {
  const sortedPosts = useSelector(selectSortedPosts);

  return (
    <MainContainer>
      <AddPost />

      {sortedPosts.map((post) => (
        <Post
          key={post.id}
          image={post.image}
          description={post.description}
          author={post.author}
          likes={post.likes}
        />
      ))}
    </MainContainer>
  );
};

export default Home;

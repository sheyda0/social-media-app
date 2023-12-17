import MainContainer from "../containers/MainContainer";
import PostsContainer from "../containers/PostsContainer";
import Post from "../post/Post";
import AddPost from "./AddPost";

const Home = () => {
  return (
    <MainContainer>
      <AddPost />
      <PostsContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsContainer>
    </MainContainer>
  );
};

export default Home;

"use client";

import { selectSortedPosts } from "@/redux/selectors/postSelectors";
import Post from "../post/Post";
import AddPost from "./add_post/AddPost";
import { useSelector } from "react-redux";

const Home = () => {
  const sortedPosts = useSelector(selectSortedPosts);
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <div className={isOpen ? "overflow-hidden" : "overflow-visible"}>
      <AddPost />
      <div className="mx-auto">
        {sortedPosts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            image={post.image}
            description={post.description}
            author={post.author}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

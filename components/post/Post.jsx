"use client";

import { useState } from "react";
import PostAddComment from "./PostAddComment";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments";
import PostFooter from "./PostFooter";
import PostImage from "./PostImage";
import PostUserProfile from "./PostUserProfile";

const Post = () => {
  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
    setShowComments((showComments) => true);
  };

  return (
    <div className="bg-light dark:bg-[#242531] w-full md:w-[70%] round p-[0.7rem] md:p-[1.5rem] pb-[1rem]">
      <PostUserProfile />
      <PostCaption />
      <PostImage />
      <PostFooter handleShowComments={handleShowComments} />
      {showComments && (
        <div>
          <PostAddComment />
          <PostComments />
        </div>
      )}
    </div>
  );
};

export default Post;

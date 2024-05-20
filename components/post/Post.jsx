"use client";

import { useState } from "react";
import PostAddComment from "./PostAddComment";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments";
import PostFooter from "./PostFooter";
import PostImage from "./PostImage";
import PostUserProfile from "./PostUserProfile";
import BlurContainer from "../containers/BlurContainer";

const Post = () => {
  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
    setShowComments(true);
  };

  return (
    <BlurContainer cln="w-full md:w-[70%] round p-[0.7rem] md:p-[1.5rem] pb-[1rem] post">
      <div className="!z-50 relative w-full h-full">
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
    </BlurContainer>
  );
};

export default Post;

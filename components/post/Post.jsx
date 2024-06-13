"use client";

import { useState } from "react";
import PostAddComment from "./PostAddComment";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments";
import PostFooter from "./PostFooter";
import PostImage from "./PostImage";
import PostUserProfile from "./PostUserProfile";
import BlurContainer from "../containers/BlurContainer";

const Post = ({ image, description, author, likes }) => {
  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
    setShowComments(true);
  };

  return (
    <BlurContainer cln="w-full md:w-[70%] round p-[0.7rem] md:p-[1.5rem] pb-[1rem] post z-50">
      <div className="relative w-full h-full">
        <PostUserProfile user={author} />
        <PostCaption text={description} />
        <PostImage image={image} />
        <PostFooter handleShowComments={handleShowComments} likes={likes} />
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

import React from "react";

const PostsContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full mt-[3rem] gap-[1.5rem] overflow-y-auto">
      {children}
    </div>
  );
};

export default PostsContainer;

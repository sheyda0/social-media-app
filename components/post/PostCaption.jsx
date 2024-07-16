"use client";

import { useState } from "react";

const PostCaption = ({ text }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="h-max mt-[1rem] relative overflow-y-hidden">
      <p className="text-dark-gray dark:text-[#d6d6d6] text-[1.125rem] font-medium">
        {text}
      </p>
    </div>
  );
};

export default PostCaption;

"use client";

import { useState } from "react";

const PostCaption = ({ text }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div
      className={`${
        showMore ? "h-max" : "h-[5rem]"
      } mt-[1rem] relative overflow-y-hidden`}
    >
      <p className="text-dark-gray dark:text-[#d6d6d6] text-[1.125rem] font-medium">
        {text}
      </p>
      {!showMore && (
        <button
          className="text-gray text-[1.125rem] absolute right-0 bottom-0 bg-[#111E36] rounded-md px-[0.3rem]"
          onClick={handleShowMore}
        >
          ...see more
        </button>
      )}
    </div>
  );
};

export default PostCaption;

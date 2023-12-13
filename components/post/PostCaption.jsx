"use client";

import { useState } from "react";

const PostCaption = () => {
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
      <p className="text-dark-gray dark:text-[#d6d6d6] text-[1.125rem]">
        Notification Bell SVG Vector 18 Free Download Notification Bell 18 SVG
        vector file in monocolor and multicolor type for Sketch and Figma from
        Notification Bell 18 Vectors svg vector collection. Notification Bell 18
        Vectors SVGNotification Bell SVG Vector 18 Free Download Notification
        Bell 18 SVG vector file in monocolor and multicolor type for Sketch and
        Figma from Notification Bell 18 Vectors svg vector collection.
        Notification Bell 18 Vectors SVGNotification Bell SVG Vector 18 Free
        Download Notification Bell 18 SVG vector file in monocolor and
        multicolor type for Sketch and Figma from Notification Bell 18 Vectors
        svg vector collection. Notification Bell 18 Vectors SVG
      </p>
      {!showMore && (
        <button
          className="text-gray text-[1.125rem] absolute right-0 bottom-0 bg-light dark:bg-[#242531]"
          onClick={handleShowMore}
        >
          ...see more
        </button>
      )}
    </div>
  );
};

export default PostCaption;

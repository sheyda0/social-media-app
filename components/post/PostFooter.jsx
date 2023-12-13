"use client";

import { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { RiBookmarkLine } from "react-icons/ri";
import { RiBookmarkFill } from "react-icons/ri";

const PostFooter = ({ handleShowComments }) => {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);

  const handleLikePost = () => {
    setLike((prev) => !prev);
  };

  const handleSavePost = () => {
    setSave((prev) => !prev);
  };

  return (
    <div>
      <div className="mt-[1rem] flex items-center justify-between">
        <div className="flex items-center gap-[1rem]">
          {/* like */}
          <button onClick={handleLikePost}>
            {like ? (
              <HiHeart
                size={24}
                className="text-dark-gray dark:text-[#d6d6d6]"
              />
            ) : (
              <HiOutlineHeart
                size={24}
                className="text-dark-gray dark:text-[#d6d6d6]"
              />
            )}
          </button>

          {/* comment */}
          <button onClick={handleShowComments}>
            <BiMessageSquareDetail
              size={20}
              className="text-dark-gray dark:text-[#d6d6d6]"
            />
          </button>

          {/* share */}
          <button>
            <LuSend size={20} className="text-dark-gray dark:text-[#d6d6d6]" />
          </button>
        </div>

        {/* save */}
        <button onClick={handleSavePost}>
          {save ? (
            <RiBookmarkFill
              size={20}
              className="text-dark-gray dark:text-[#d6d6d6]"
            />
          ) : (
            <RiBookmarkLine
              size={20}
              className="text-dark-gray dark:text-[#d6d6d6]"
            />
          )}
        </button>
      </div>
      <div className="flex items-center justify-between w-full mt-[0.5rem]">
        <span className="text-gray font-semibold text-[0.875rem] capitalize">
          30 likes
        </span>
        <span className="text-gray font-semibold text-[0.875rem] capitalize">
          5 comments
        </span>
      </div>
    </div>
  );
};

export default PostFooter;

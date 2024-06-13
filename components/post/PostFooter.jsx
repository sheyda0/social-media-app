"use client";

import { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { RiBookmarkLine } from "react-icons/ri";
import { RiBookmarkFill } from "react-icons/ri";
import LikeButton from "./like-button/LikeButton";

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
    <div className="relative">
      <div className="mt-[1rem] flex items-center justify-between relative">
        <div className="flex items-center">
          {/* like */}
          {/* {like ? (
              <HiHeart
                size={24}
                className="text-dark-gray dark:text-[#d6d6d6]"
              />
            ) : (
              <HiOutlineHeart
                size={24}
                className="text-dark-gray dark:text-[#d6d6d6]"
              />
            )} */}

          <LikeButton cln={like ? "is-active" : ""} onClick={handleLikePost} />

          <div className="flex items-center gap-[1rem] ml-[3.8rem] z-[51]">
            {/* comment */}
            <button onClick={handleShowComments}>
              <BiMessageSquareDetail
                size={27}
                className="text-dark-gray dark:text-[#d6d6d6]"
              />
            </button>

            {/* share */}
            <button>
              <LuSend
                size={27}
                className="text-dark-gray dark:text-[#d6d6d6]"
              />
            </button>
          </div>
        </div>

        {/* save */}
        <button onClick={handleSavePost}>
          {save ? (
            <RiBookmarkFill
              size={27}
              className="text-dark-gray dark:text-[#d6d6d6]"
            />
          ) : (
            <RiBookmarkLine
              size={27}
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

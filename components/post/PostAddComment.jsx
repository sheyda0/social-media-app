"use client";

import Image from "next/image";
import SecondaryInput from "../inputs/SecondaryInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "@/redux/features/post/postSlice";

const PostAddComment = ({ cln, id }) => {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {
    dispatch(addComment({ id, content: comment }));
    setComment("");
  };

  return (
    <div
      className={`${cln ? cln : ""} mt-[1rem] flex items-center gap-[0.5rem]`}
    >
      <div>
        <Image
          src="/images/wepik-export-20231128203407BKL1.jpeg"
          width={55}
          height={55}
          className="rounded-full"
          alt=""
        />
      </div>
      <div className="relative w-full">
        {comment && (
          <button
            className="position-absolute right-[1rem] top-[1rem] w-[2rem] font-semibold text-dark-gray dark:text-[#d6d6d6]"
            onClick={handlePostComment}
          >
            Post
          </button>
        )}

        <SecondaryInput
          placeholder="Add a comment..."
          cln="h-[3.5rem]"
          value={comment}
          onChange={handleCommentChange}
          autoFocus={true}
        />
      </div>
    </div>
  );
};

export default PostAddComment;

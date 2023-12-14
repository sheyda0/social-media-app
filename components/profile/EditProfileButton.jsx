"use client";

import { BiMessageSquareEdit } from "react-icons/bi";

const EditProfileButton = ({ onClick, cln }) => {
  return (
    <button className={`${cln} w-full flex justify-end`}>
      <BiMessageSquareEdit
        size={24}
        className="text-[#9798AD] dark:text-[#d6d6d6]"
        onClick={onClick}
      />
    </button>
  );
};

export default EditProfileButton;

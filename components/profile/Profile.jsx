"use client";

import FollowItem from "./FollowItem";
import ProfileInfo from "./ProfileInfo";
import { BiMessageSquareEdit } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "../Modal";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <ProfileInfo />
        <div className="flex flex-col h-full w-1/2 justify-center items-center gap-[2rem] pr-[3rem]">
          <button className="w-full flex justify-end">
            <BiMessageSquareEdit
              size={24}
              color="#d6d6d6"
              onClick={handleShowModal}
            />
          </button>
          <div className="flex items-center gap-[1.8rem] w-full justify-end h-full">
            <FollowItem title="posts" sub="10" url="/posts" />
            <FollowItem title="followers" sub="12" url="/followers" />
            <FollowItem title="followings" sub="24" url="/followings" />
          </div>
        </div>
      </div>
      {showModal && <EditProfile closeModal={handleShowModal} />}
    </>
  );
};

export default Profile;

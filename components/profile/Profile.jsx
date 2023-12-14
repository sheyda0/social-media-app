"use client";

import FollowItem from "./FollowItem";
import ProfileInfo from "./ProfileInfo";
import { useState } from "react";
import EditProfile from "./EditProfile";
import Post from "../post/Post";
import EditProfileButton from "./EditProfileButton";
import { isMobile } from "react-device-detect";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center overflow-y-scroll h-[52rem] mt-[3rem]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <ProfileInfo handleShowModal={handleShowModal} />
        <div className="flex flex-col w-full md:w-1/2 justify-between md:justify-center items-center gap-[2rem] md:pr-[3rem]">
          {!isMobile && <EditProfileButton onClick={handleShowModal} />}
          <div className="flex items-center gap-[4rem] md:gap-[1.8rem] w-full justify-center md:justify-end h-full mt-[1.5rem] md:mt-0">
            <FollowItem title="posts" sub="10" url="/posts" />
            <FollowItem title="followers" sub="12" url="/followers" />
            <FollowItem title="followings" sub="24" url="/followings" />
          </div>
        </div>
      </div>
      {/* posts */}
      <div className="flex flex-col items-center w-full mt-[3rem] gap-[1rem]">
        <Post />
        <Post />
      </div>
      {showModal && <EditProfile closeModal={handleShowModal} />}
    </div>
  );
};

export default Profile;

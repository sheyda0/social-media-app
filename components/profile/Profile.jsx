"use client";

import FollowItem from "./FollowItem";
import ProfileInfo from "./ProfileInfo";
import EditProfile from "./EditProfile";
import Post from "../post/Post";
import EditProfileButton from "./EditProfileButton";
import { isMobile } from "react-device-detect";
import MainContainer from "../containers/MainContainer";
import PostsContainer from "../containers/PostsContainer";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "@/redux/features/modal/modalSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <MainContainer cln="pb-[2rem]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <ProfileInfo />
        <div className="flex flex-col w-full md:w-1/2 justify-between md:justify-center items-center gap-[2rem] md:pr-[3rem]">
          {!isMobile && <EditProfileButton onClick={handleOpenModal} />}
          <div className="flex items-center gap-[4rem] md:gap-[1.8rem] w-full justify-center md:justify-end h-full mt-[1.5rem] md:mt-0">
            <FollowItem title="posts" sub="10" />
            <FollowItem title="followers" sub="12" url="/profile/followers" />
            <FollowItem title="followings" sub="24" url="/profile/followings" />
          </div>
        </div>
      </div>
      {/* posts */}
      <PostsContainer>
        <Post />
        <Post />
      </PostsContainer>
      {isOpen && <EditProfile />}
    </MainContainer>
  );
};

export default Profile;

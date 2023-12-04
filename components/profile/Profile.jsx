import FollowItem from "./FollowItem";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <ProfileInfo />
      <div className="flex items-center gap-[1rem] w-1/2 justify-center h-full">
        <FollowItem title="posts" sub="10" url="/posts" />
        <FollowItem title="followers" sub="12" url="/followers" />
        <FollowItem title="followings" sub="24" url="/followings" />
      </div>
    </div>
  );
};

export default Profile;

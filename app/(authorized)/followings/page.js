import MainContainer from "@/components/containers/MainContainer";
import FollowerItem from "@/components/followers/FollowerItem";

const page = () => {
  return (
    <MainContainer cln="px-[5rem]">
      <FollowerItem />
      <FollowerItem />
      <FollowerItem />
    </MainContainer>
  );
};

export default page;

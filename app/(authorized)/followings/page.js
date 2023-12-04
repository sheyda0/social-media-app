import MainContainer from "@/components/MainContainer";
import FollowerItem from "@/components/followers/FollowerItem";

const page = () => {
  return (
    <MainContainer cln="h-[80vh]">
      <FollowerItem />
      <FollowerItem />
      <FollowerItem />
    </MainContainer>
  );
};

export default page;

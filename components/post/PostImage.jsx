import Image from "next/image";
import PostImg from "../../assets/images/shahadat-rahman-voM1Z9cGPCU-unsplash.jpg";

const PostImage = () => {
  return (
    <div className="h-[30rem] w-full relative mt-[1rem]">
      <Image
        src={PostImg}
        fill
        alt=""
        className="relative object-cover round"
      />
    </div>
  );
};

export default PostImage;

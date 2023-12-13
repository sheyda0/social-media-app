import Image from "next/image";
import PostImg from "../../assets/images/vertical-shot-curvy-road-forest-covered-yellowing-trees-dried-leaves-autum.jpg";

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

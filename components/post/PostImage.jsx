import Image from "next/image";

const PostImage = ({ image }) => {
  return (
    <div className="h-[30rem] w-full relative mt-[1rem] opacity-100">
      <Image src={image} fill alt="" className="relative object-cover round" />
    </div>
  );
};

export default PostImage;

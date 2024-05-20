import Image from "next/image";

const SmallProfileImage = ({ img }) => {
  return (
    <div className="min-w-[5.5rem] h-[5.5rem] relative">
      <Image
        src={img}
        fill
        className="rounded-full object-cover w-full h-full"
        alt=""
      />
    </div>
  );
};

export default SmallProfileImage;

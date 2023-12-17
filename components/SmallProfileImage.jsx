import Image from "next/image";

const SmallProfileImage = ({ img }) => {
  return (
    <div className="min-w-[3.5rem] h-[3.5rem] relative">
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

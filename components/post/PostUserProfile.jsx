import Image from "next/image";
import ProfileImage from "../../assets/images/wepik-export-20231128203407BKL1.jpeg";
import Username from "../Username";

const PostUserProfile = () => {
  return (
    <div className="flex gap-[1rem]">
      <Image
        src={ProfileImage}
        width={60}
        height={60}
        className="rounded-full"
        alt=""
      />
      <div className="mt-[1rem]">
        <Username>tom odell</Username>
        <span className="text-gray font-semibold text-[0.75rem] capitalize">
          5 minutes ago
        </span>
      </div>
    </div>
  );
};

export default PostUserProfile;

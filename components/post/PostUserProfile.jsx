import Image from "next/image";
import ProfileImage from "../../assets/images/wepik-export-20231128203407BKL1.jpeg";

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
        <h3 className="capitalize font-bold text-[1.125rem] text-dark-gray dark:text-[#d6d6d6]">
          tom odell
        </h3>
        <span className="text-gray font-semibold text-[0.75rem] capitalize">
          5 minutes ago
        </span>
      </div>
    </div>
  );
};

export default PostUserProfile;

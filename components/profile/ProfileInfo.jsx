import Image from "next/image";
import ProfileImage from "../../assets/images/wepik-export-20231128203407BKL1.jpeg";

const ProfileInfo = () => {
  return (
    <div className="mt-[3rem] w-1/2">
      <div className="flex flex-col md:flex-row gap-[2rem]">
        <button className="rounded-full">
          <Image
            src={ProfileImage}
            width={160}
            height={160}
            className="rounded-full"
            alt=""
          />
        </button>
        <div className="flex justify-center flex-col ">
          <h3 className="capitalize text-[1.6rem] text-dark-gray dark:text-[#d6d6d6] font-semibold">
            isak danielson
          </h3>
          <span className="text-gray">@isak</span>
          <p className="text-dark-gray dark:text-[#d6d6d6] mt-[1.5rem]">
            this is gonna be a bio for my profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

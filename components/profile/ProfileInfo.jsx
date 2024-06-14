import Image from "next/image";
import EditProfileButton from "./EditProfileButton";
import { isMobile } from "react-device-detect";
import { openModal } from "@/redux/features/modal/modalSlice";
import { useDispatch } from "react-redux";

const ProfileInfo = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <div className="w-full md:w-1/2 relative">
      {isMobile && (
        <EditProfileButton
          onClick={handleOpenModal}
          cln="absolute right-0 top-[1rem]"
        />
      )}
      <div className="flex w-full gap-[2rem]">
        <button className="rounded-full relative w-[7rem] md:w-[11rem] h-[7rem] md:h-[11rem]">
          <Image
            src="/images/wepik-export-20231128203407BKL1.jpeg"
            fill
            className="rounded-full object-cover w-full h-full"
            alt=""
          />
        </button>

        <div className="flex justify-center flex-col ">
          <h3 className="capitalize text-[1.6rem] text-dark-gray dark:text-[#d6d6d6] font-semibold">
            isak danielson
          </h3>
          <span className="text-gray text-[1.125rem]">@isak</span>
          <p className="text-dark-gray text-[1.125rem] dark:text-[#d6d6d6] mt-[0.5rem] md:mt-[1.5rem]">
            this is gonna be a bio for my profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

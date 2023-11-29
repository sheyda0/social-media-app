import Image from "next/image";
import Profile from "../../assets/images/wepik-export-20231128203407BKL1.jpeg";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";

const SidebarUserProfile = () => {
  return (
    <Link
      href="/profile"
      className="pl-[14px] pr-[20px] bg-white dark:bg-[#1f1f26] rounded-[10px] py-[14px] mb-[70px] mt-[50px] flex justify-between items-center"
    >
      <div className="flex gap-[12px]">
        <Image
          src={Profile}
          width={80}
          height={80}
          className="rounded-[10px]"
          alt="Picture of the author"
        />
        <div className=" flex flex-col justify-center gap-[4px]">
          <span className="text-milky font-semibold text-[14px] capitalize">
            jackson britsons
          </span>
          <span className="text-gray font-semibold text-[12px] capitalize">
            creator & editor
          </span>
        </div>
      </div>
      <GoChevronRight size={20} />
    </Link>
  );
};

export default SidebarUserProfile;

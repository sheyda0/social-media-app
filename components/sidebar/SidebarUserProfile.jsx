import Image from "next/image";
import Profile from "../../assets/images/wepik-export-20231128203407BKL1.jpeg";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";

const SidebarUserProfile = () => {
  return (
    <Link
      href="/profile"
      className="pl-[0.875rem] raise pr-[1.25rem] text-gray bg-light-white dark:bg-[#141520] round py-[0.875rem] mb-[4.375rem] mt-[1.875rem] flex justify-between items-center"
    >
      <div className="flex gap-[0.75rem]">
        <Image src={Profile} width={55} height={55} className="round" alt="" />
        <div className=" flex flex-col justify-center gap-[0.25rem]">
          <span className="text-gray dark:text-[#d6d6d6] font-semibold text-[0.875rem] capitalize">
            jackson britsons
          </span>
          <span className="text-gray font-semibold text-[0.75rem] capitalize">
            creator & editor
          </span>
        </div>
      </div>
      <GoChevronRight size={20} />
    </Link>
  );
};

export default SidebarUserProfile;

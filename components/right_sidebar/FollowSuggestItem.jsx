import Image from "next/image";
import Profile from "../../assets/images/wepik-export-20231128203407BKL1.jpeg";
import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";

const FollowSuggestItem = () => {
  return (
    <div className="pl-[0.875rem] pr-[1.25rem] raise text-gray bg-light-white dark:bg-[#141520] round py-[0.875rem] mb-[1rem] flex justify-between items-center">
      <div className="flex gap-[0.75rem]">
        <Link href="/">
          <Image
            src={Profile}
            width={55}
            height={55}
            className="round"
            alt=""
          />
        </Link>
        <div className=" flex flex-col justify-center gap-[0.25rem]">
          <Link
            href="/"
            className="text-gray dark:text-[#d6d6d6] font-semibold text-[0.875rem] capitalize"
          >
            jackson britsons
          </Link>
          <span className="text-gray font-semibold text-[0.75rem] capitalize">
            creator & editor
          </span>
        </div>
      </div>
      <PrimaryButton>Follow</PrimaryButton>
    </div>
  );
};

export default FollowSuggestItem;

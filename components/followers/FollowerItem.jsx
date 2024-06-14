import Image from "next/image";
import Link from "next/link";
import SecondaryBorderedBtn from "../buttons/SecondaryBorderedBtn";
import SecondaryButton from "../buttons/SecondaryButton";

const FollowerItem = () => {
  return (
    <>
      <Link
        href="/profile"
        className="pl-[0.875rem] pr-[1.25rem] w-full text-gray round py-[0.875rem] flex justify-between items-center"
      >
        <div className="flex gap-[0.75rem]">
          <Image
            src="/images/wepik-export-20231128203407BKL1.jpeg"
            width={55}
            height={55}
            className="round"
            alt=""
          />
          <div className=" flex flex-col justify-center gap-[0.25rem]">
            <span className="text-gray dark:text-[#d6d6d6] font-semibold text-[0.875rem] capitalize">
              jackson britsons
            </span>
            <span className="text-gray font-semibold text-[0.75rem] capitalize">
              creator & editor
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[1rem]">
          <SecondaryBorderedBtn cln="px-[1rem] py-[0.3rem] text-[0.875rem]">
            Remove
          </SecondaryBorderedBtn>
          <SecondaryButton cln="px-[1rem] py-[0.3rem] text-[0.875rem]">
            Message
          </SecondaryButton>
        </div>
      </Link>
      {/* <div className="px-[5rem]">
        <Separator />
      </div> */}
    </>
  );
};

export default FollowerItem;

import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";
import BlurContainer from "../containers/BlurContainer";

const FollowSuggestItem = () => {
  return (
    <BlurContainer cln="pr-[1rem] pl-[0.5rem] h-[5.5rem] raise text-gray round mb-[1rem] flex justify-between items-center  transition-all hover:translate-x-[-1rem]">
      <div className="flex gap-[0.75rem]">
        <div className="w-[4.2rem] h-[4.2rem] rounded-full border-[1px] border-[var(--purple)] flex justify-center items-center blue-box-shadow">
          <div className="w-[4.2rem] relative h-[4.2rem]">
            <Link href="/">
              <Image
                src="/images/2148107064 (1).jpg"
                fill
                className="object-cover rounded-full"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className=" flex flex-col justify-center gap-[0.25rem]">
          <Link
            href="/"
            className="text-dark-gray dark:text-[#d6d6d6] font-semibold text-[0.875rem] capitalize"
          >
            jackson britsons
          </Link>
          <span className="text-gray font-semibold text-[0.75rem] capitalize">
            creator & editor
          </span>
        </div>
      </div>
      <PrimaryButton cln="text-[0.75rem] px-[0.875rem] py-[0.2rem] rounded-[0.375rem] btn-15-sm-round">
        Follow
      </PrimaryButton>
    </BlurContainer>
  );
};

export default FollowSuggestItem;

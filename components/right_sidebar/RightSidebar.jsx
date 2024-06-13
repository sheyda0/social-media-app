import Title from "../Title";
import FollowSuggestItem from "./FollowSuggestItem";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

const RightSidebar = () => {
  return (
    <div className="h-[100vh] w-[22%] px-[3.125rem] hidden lg:block">
      <div className="mt-[1.875rem]">
        <div className="flex items-center justify-between">
          <Title>suggested for you</Title>
          <Link
            href="/"
            className="mb-[1.125rem] text-gray dark:text-[#d6d6d6] flex items-center gap-[2px]"
          >
            <span className="text-[0.75rem]">See All</span>
            <GoChevronRight size={12} />
          </Link>
        </div>
        <div>
          <FollowSuggestItem />
          <FollowSuggestItem />
          <FollowSuggestItem />
          <FollowSuggestItem />
        </div>
      </div>

      <div className="mt-[2.875rem]">
        <div className="flex items-center justify-between">
          <Title>your friends</Title>
          <Link
            href="/"
            className="mb-[1.125rem] text-gray dark:text-[#d6d6d6] flex items-center gap-[2px]"
          >
            <span className="text-[0.75rem]">See All</span>
            <GoChevronRight size={12} />
          </Link>
        </div>
        <div>
          <FollowSuggestItem />
          <FollowSuggestItem />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

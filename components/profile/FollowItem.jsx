import Link from "next/link";

const FollowItem = ({ title, sub, url }) => {
  if (url) {
    return (
      <Link href={url} className="rounded-md py-[0.3rem] flex gap-[0.5rem]">
        <span className="text-[var(--light-blue)] font-semibold text-[1.125rem]">
          {sub}
        </span>
        <span className="text-dark-gray dark:text-[#d6d6d6] font-semibold text-[1.125rem]">
          {title}
        </span>
      </Link>
    );
  } else {
    return (
      <div className="rounded-md py-[0.3rem] flex gap-[0.5rem]">
        <span className="text-[var(--light-blue)] font-semibold text-[1.125rem]">
          {sub}
        </span>
        <span className="text-dark-gray dark:text-[#d6d6d6] font-semibold text-[1.125rem]">
          {title}
        </span>
      </div>
    );
  }
};

export default FollowItem;

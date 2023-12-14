import Link from "next/link";

const FollowItem = ({ title, sub, url }) => {
  return (
    <Link href={url} className="rounded-md py-[0.3rem] flex gap-[0.5rem]">
      <span className="text-purple font-semibold text-[1.125rem]">{sub}</span>
      <span className="text-dark-gray dark:text-[#d6d6d6] font-semibold text-[1.125rem]">
        {title}
      </span>
    </Link>
  );
};

export default FollowItem;

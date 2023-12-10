import Link from "next/link";

const FollowItem = ({ title, sub, url }) => {
  return (
    <Link href={url} className="rounded-md py-[0.3rem] flex gap-[0.5rem]">
      <span className="text-purple font-semibold">{sub}</span>
      <span className="text-milky font-semibold">{title}</span>
    </Link>
  );
};

export default FollowItem;

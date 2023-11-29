import Link from "next/link";

const HeaderItem = ({ icon, notif, url }) => {
  return (
    <Link
      href={url}
      className="w-[64px] raise h-[64px] relative round bg-[#f0eef4] dark:bg-[#242531] flex items-center justify-center text-gray dark:text-[#d6d6d6]"
    >
      {notif && (
        <div className="w-[7px] h-[7px] bg-[#05E800] rounded-full absolute top-[22px] right-[21px]"></div>
      )}
      {icon}
    </Link>
  );
};

export default HeaderItem;
